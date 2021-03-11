using System;
using System.Collections.Generic;
using System.Diagnostics;
using System.Linq;
using System.Threading.Tasks;
using Indexer.Data;
using Indexer.Search;
using LiteDB;
using Microsoft.Extensions.Caching.Memory;
using MoreLinq.Extensions;

namespace Indexer
{
    public class LiteDbDriver
    {
        protected LiteDatabase Database;
        protected ILiteCollection<EnrichedAnalysisData> AnalysisData;
        protected ILiteCollection<SnpData> SnpData;
        protected ILiteCollection<GeneData> GeneData;

        protected Lazy<Dictionary<string, int>> SnpStrainCount;
        protected Lazy<Dictionary<Tuple<string, int>, int>> InsertionSequenceStrainCount;
        protected Lazy<Dictionary<string, int>> MissingGeneStrainCount;
        protected Lazy<int> TotalStrain;

        public LiteDbDriver(LiteDatabase database)
        {
            Database = database;
            SnpData = Database.GetCollection<SnpData>("snp");
            SnpData.EnsureIndex(v => v.Id);
            Database.Mapper.Entity<SnpData>().Ignore(v => v.NcbiUrl);

            AnalysisData = Database.GetCollection<EnrichedAnalysisData>("result");
            AnalysisData.EnsureIndex("$.StrainId");

            GeneData = Database.GetCollection<GeneData>("gene");
            GeneData.EnsureIndex(v => v.LocusTag);

            BsonMapper.Global.Entity<EnrichedAnalysisData>().DbRef(x => x.Snp, "snp");
            BsonMapper.Global.Entity<EnrichedAnalysisData>().DbRef(x => x.MissingGenes, "gene");

            SnpStrainCount = new(() =>
            {
                return AnalysisData
                    .Query()
                    .Select(v => new {v.SnpSpdi})
                    .ToEnumerable()
                    .SelectMany(v => v.SnpSpdi)
                    .GroupBy(v => v)
                    .ToDictionary(v => v.Key, v => v.Count());
            });
            InsertionSequenceStrainCount = new(() =>
            {
                return AnalysisData
                    .Query()
                    .Select(v => new {v.InsertionSequenceTuples})
                    .ToEnumerable()
                    .SelectMany(v => v.InsertionSequenceTuples)
                    .GroupBy(v => v)
                    .ToDictionary(v => v.Key, v => v.Count());
            });
            MissingGeneStrainCount = new(() =>
            {
                return AnalysisData
                    .Query()
                    .Select(v => new {v.MissingGeneTags})
                    .ToEnumerable()
                    .SelectMany(v => v.MissingGeneTags)
                    .GroupBy(v => v)
                    .ToDictionary(v => v.Key, v => v.Count());
            });
            TotalStrain = new(() =>
            {
                return AnalysisData
                    .Query()
                    .Count();
            });
        }

        public async Task Index(SnpData snpData)
        {
            var existing = SnpData.FindById(snpData.Id);
            if (existing != null)
            {
                existing = existing with
                {
                    Annotations = existing.Annotations.Concat(snpData.Annotations).Distinct().ToList()
                };
                SnpData.Update(existing);
            }
            else
            {
                SnpData.Insert(snpData);
            }
        }

        public async Task Index(EnrichedAnalysisData result)
        {
            var existing = AnalysisData.FindById(result.StrainId);
            if (existing != null)
            {
                AnalysisData.Delete(existing.Id);
            }

            AnalysisData.Insert(result);
        }

        public async Task Index(List<EnrichedAnalysisData> result)
        {
            var ids = result.Select(v => v.Id).ToList();
            AnalysisData.DeleteMany(v => ids.Contains(v.Id));
            AnalysisData.InsertBulk(result);
        }

        public async Task Index(GeneData gene)
        {
            var existing = GeneData.FindById(gene.Id);
            if (existing != null)
            {
                GeneData.Delete(existing.Id);
            }

            GeneData.Insert(gene);
        }

        public async Task<List<SnpData>> ListSnp(int page = 0)
        {
            return SnpData.Find(Query.All(), limit: 100).ToList();
        }

        protected BsonExpression? ConditionToQuery(Condition condition, Dictionary<string, BsonValue> args)
        {
            BsonExpression main;
            if (condition.Bool != null)
            {
                var expressions = condition.Bool.Conditions.Select(v => ConditionToQuery(v, args)).Where(v => v != null)
                    .Select(e => e!).ToArray();
                if (expressions.Length == 0) return null;
                if (expressions.Length == 1) main = expressions[0];
                else
                {
                    main = condition.Bool.Operator switch
                    {
                        BoolCondition.BoolOperator.OR => Query.Or(expressions),
                        BoolCondition.BoolOperator.AND => Query.And(expressions),
                        _ => throw new ArgumentOutOfRangeException()
                    };
                }
            }
            else if (condition.Keyword != null)
            {
                if (condition.Keyword.Values.Count == 0) return null;
                var key = "p" + (args.Count + 1);
                if (condition.Keyword.Field == KeywordCondition.KeywordField.SNP_POSITION)
                {
                    args.Add(key, new BsonArray(condition.Keyword.Values.Select(v => new BsonValue(int.Parse(v)))));
                }
                else
                {
                    args.Add(key, new BsonArray(condition.Keyword.Values.Select(v => new BsonValue(v))));
                }

                Func<string, string> fieldCondition = field => $"{field} IN @{key}";
                Func<string, string> arrayCondition = field =>
                    condition.Keyword.AllOf
                        ? $"LENGTH(EXCEPT(@{key}, {field})) = 0"
                        : $"{field} ANY IN @{key}";
                main = condition.Keyword.Field switch
                {
                    KeywordCondition.KeywordField.ACCESSION => BsonExpression.Create(fieldCondition("$.StrainId")),
                    KeywordCondition.KeywordField.SNP_SPDI => BsonExpression.Create(arrayCondition("$.SnpSpdi[*]")),
                    KeywordCondition.KeywordField.COUNTRY_CODE =>
                        BsonExpression.Create(fieldCondition("$.CountryCode")),
                    KeywordCondition.KeywordField.GENE_ID => BsonExpression.Create(
                        $"({arrayCondition("$.MissingGenes[*].$id")})=false"),
                    KeywordCondition.KeywordField.GENE_LOCUS_TAG => BsonExpression.Create(
                        $"({arrayCondition("$.MissingGeneTags[*]")})=false"),
                    KeywordCondition.KeywordField.SNP_POSITION => BsonExpression.Create(
                        arrayCondition("$.SnpWithoutAnnotation[*].Position")),
                    KeywordCondition.KeywordField.INSERTION_SEQUENCE_NAME => BsonExpression.Create(
                        arrayCondition("$.InsertionSequences[*].Name")),
                    _ => throw new ArgumentOutOfRangeException()
                };
            }
            else
            {
                throw new Exception();
            }

            return condition.Negate ? string.Format("({0})=false", main.Source) : main;
        }

        public async Task<List<string>> Search(Condition condition)
        {
            var args = new Dictionary<string, BsonValue>();
            var query = ConditionToQuery(condition, args);
            foreach (var (k, v) in args) query.Parameters[k] = v;

            if (query == null) return new List<string>();
            return AnalysisData.Query().Where(query).Select(v => v.Id).ToList();
        }

        MemoryCache SnpCache = new(new MemoryCacheOptions
        {
            SizeLimit = 1024
        });

        public async Task<List<SnpData>> ListSnpById(List<string> ids)
        {
            var found = ids.Select(v => SnpCache.TryGetValue(v, out var value) ? value : null).OfType<SnpData>()
                .ToList();
            var notFound = ids.Where(v => found.All(x => x.Id != v)).ToList();
            var requested = SnpData.Find(v => notFound.Contains(v.Id)).ToList();
            requested.ForEach(v => SnpCache.Set(v.Id, v, new MemoryCacheEntryOptions {Size = 1}));
            return requested.Concat(found).OrderBy(v => v.Position).ToList();
        }

        public async Task<List<GeneData>> ListGenesByLocus(List<string> locus)
        {
            return GeneData.Find(v => locus.Contains(v.LocusTag)).OrderBy(v => v.LocusTag).ToList();
        }

        public async Task<GeneData?> GetGeneByLocus(string locus)
        {
            return GeneData.FindOne(v => locus == v.LocusTag);
        }

        public async Task<EnrichedAnalysisData?> GetResult(string id)
        {
            return AnalysisData.Include(v => v.Snp).Include(v => v.MissingGenes).FindById(id);
        }

        public async Task<List<string>> ListResultAccession()
        {
            return AnalysisData.Query().Select(v => v.Id).ToList();
        }

        public async Task<AnalysisComparaison> Compare(List<string> ids)
        {
            var query = AnalysisData
                .Query()
                .Where(v => ids.Contains(v.Id))
                .Select(v => new {v.SnpSpdi, v.MissingGeneTags, v.InsertionSequenceTuples});

            var first = query.FirstOrDefault();
            if (first == null) return new AnalysisComparaison();

            var totalSelected = query.Count();
            var result = query
                .ToEnumerable()
                .Skip(1)
                .Aggregate(
                    new
                    {
                        SharedSnp = new HashSet<string>(first.SnpSpdi),
                        SharedIS = new HashSet<Tuple<string, int>>(first.InsertionSequenceTuples),
                        SharedMissingGenes = new HashSet<string>(first.MissingGeneTags),
                    },
                    (h, e) =>
                    {
                        h.SharedSnp.IntersectWith(e.SnpSpdi);
                        h.SharedIS.IntersectWith(e.InsertionSequenceTuples);
                        h.SharedMissingGenes.IntersectWith(e.MissingGeneTags);

                        return h;
                    }
                );

            var insertionSequences = result.SharedIS.GroupBy(v => v.Item1).Select(v =>
                new AnalysisData.InsertionSequence
                {
                    Name = v.Key,
                    Positions = v.Select(x => new AnalysisData.InsertionSequence.PrefixedPosition
                    {
                        Position = x.Item2,
                        Prefix = ""
                    }).ToList()
                }).ToList();

            return new AnalysisComparaison
            {
                SharedSnp = await ListSnpById(result.SharedSnp.ToList()),
                SharedInsertionSequences = insertionSequences,
                SharedMissingGenes = await ListGenesByLocus(result.SharedMissingGenes.ToList()),
                SharedSnpExclusivity = result.SharedSnp.Select(v => (v, SnpStrainCount.Value[v] - totalSelected))
                    .ToDictionary(),
                SharedInsertionSequencesExclusivity = result.SharedIS.Select(v =>
                    ($"{v.Item1}:{v.Item2}", InsertionSequenceStrainCount.Value[v] - totalSelected)).ToDictionary(),
                SharedMissingGenesExclusivity = result.SharedMissingGenes
                    .Select(v => (v, MissingGeneStrainCount.Value[v] - totalSelected)).ToDictionary(),
                TotalSelected = totalSelected,
                Total = TotalStrain.Value,
            };
        }
    }
}