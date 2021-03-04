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
            Database.GetCollection<AnalysisData>("result").EnsureIndex("$.StrainId");
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

        protected BsonExpression KeywordToQuery(KeywordCondition condition, string value)
        {
            return condition.Field switch
            {
                KeywordCondition.KeywordField.ACCESSION => Query.EQ("StrainId", value)
            };
        }

        protected BsonExpression? ConditionToQuery(Condition condition)
        {
            BsonExpression main;
            if (condition.Bool != null)
            {
                var expressions = condition.Bool.Conditions.Select(v => ConditionToQuery(v)).Where(v => v != null)
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
                var conditions = condition.Keyword.Values.Select(v => KeywordToQuery(condition.Keyword, v)).ToArray();
                if (conditions.Length == 0) return null;
                if (conditions.Length == 1) main = conditions[0];
                else main = condition.Keyword.AllOf ? Query.And(conditions) : Query.Or(conditions);
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
            var query = ConditionToQuery(condition);
            if (query == null) return new List<string>();
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