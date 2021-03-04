using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Indexer.Data;
using Indexer.Search;
using LiteDB;
using MoreLinq;

namespace Indexer
{
    public class LiteDbDriver
    {
        protected LiteDatabase Database;

        public LiteDbDriver(LiteDatabase database)
        {
            Database = database;
            Database.GetCollection<SnpData>("snp");
            var result = Database.GetCollection<AnalysisData>("result");
            result.EnsureIndex("$.StrainId");
            Database.GetCollection<AnalysisData>("gene");

            BsonMapper.Global.Entity<AnalysisData>().DbRef(x => x.Snp, "snp");
            BsonMapper.Global.Entity<AnalysisData>().DbRef(x => x.MissingGenes, "gene");
        }

        public async Task Index(SnpData snpData)
        {
            var collection = Database.GetCollection<SnpData>("snp");
            var existing = collection.FindById(snpData.Id);
            if (existing != null)
            {
                existing = existing with
                {
                    Annotations = existing.Annotations.Concat(snpData.Annotations).Distinct().ToList()
                };
                collection.Update(existing);
            }
            else
            {
                collection.Insert(snpData);
            }
        }

        public async Task Index(AnalysisData result)
        {
            var collection = Database.GetCollection<AnalysisData>("result");
            var existing = collection.FindById(result.StrainId);
            if (existing != null)
            {
                collection.Delete(existing.Id);
            }

            collection.Insert(result);
        }

        public async Task Index(GeneData gene)
        {
            var collection = Database.GetCollection<GeneData>("gene");
            var existing = collection.FindById(gene.Id);
            if (existing != null)
            {
                collection.Delete(existing.Id);
            }

            collection.Insert(gene);
        }

        public async Task<List<SnpData>> ListSnp(int page = 0)
        {
            var collection = Database.GetCollection<SnpData>("snp");
            return collection.Find(Query.All(), limit: 100).ToList();
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
                args.Add(key, new BsonArray(condition.Keyword.Values.Select(v => new BsonValue(v))));
                Func<string, string> fieldCondition =field => $"{field} IN @{key}";
                Func<string, string> arrayCondition = field =>
                    condition.Keyword.AllOf
                        ? $"LENGTH(EXCEPT(@{key}, {field})) = 0"
                        : $"{field} ANY IN @{key}";
                main = condition.Keyword.Field switch
                {
                    KeywordCondition.KeywordField.ACCESSION => BsonExpression.Create(fieldCondition("$.StrainId")),
                    KeywordCondition.KeywordField.SNP_SPDI => BsonExpression.Create(arrayCondition("$.SnpSpdi[*]"))
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
            var collection = Database.GetCollection<AnalysisData>("result");
            var gg = new Dictionary<string, BsonValue>();
            var query = ConditionToQuery(condition, gg);
            foreach (var (k, v) in gg)
            {
                query.Parameters[k] = v;
            }

            if (query == null) return new List<string>();
            Console.WriteLine(collection.Query().Where(query).Select(v => v.Id).GetPlan().ToString());
            return collection.Query().Where(query).Select(v => v.Id).ToList();
        }


        public async Task<List<SnpData>> ListSnpById(List<string> ids)
        {
            var collection = Database.GetCollection<SnpData>("snp");
            return collection.Find(v => ids.Contains(v.Id)).ToList();
        }

        public async Task<List<GeneData>> ListGenesByLocus(List<string> locus)
        {
            var collection = Database.GetCollection<GeneData>("gene");
            return collection.Find(v => locus.Contains(v.LocusTag)).ToList();
        }

        public async Task<GeneData?> GetGeneByLocus(string locus)
        {
            var collection = Database.GetCollection<GeneData>("gene");
            return collection.FindOne(v => locus == v.LocusTag);
        }


        public async Task<AnalysisData?> GetResult(string id)
        {
            var collection = Database.GetCollection<AnalysisData>("result");
            return collection.Include(v => v.Snp).Include(v => v.MissingGenes).FindById(id);
        }
    }
}