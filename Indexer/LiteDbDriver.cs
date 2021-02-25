using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Indexer.Data;
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
            Database.GetCollection<AnalysisData>("result");
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

        public async Task<IEnumerable<SnpData>> ListSnp(int page = 0)
        {
            var collection = Database.GetCollection<SnpData>("snp");
            return collection.Find(Query.All(), limit: 100);
        }
        
        public async Task<IEnumerable<SnpData>> ListSnpById(List<string> ids)
        {
            var collection = Database.GetCollection<SnpData>("snp");
            return collection.Find(v => ids.Contains(v.Id));
        }
        
        public async Task<IEnumerable<GeneData>> ListGenesByLocus(List<string> locus)
        {
            var collection = Database.GetCollection<GeneData>("gene");
            return collection.Find(v => locus.Contains(v.LocusTag));
        }
        
        public async Task<GeneData?> GetGeneByLocus(string locus)
        {
            var collection = Database.GetCollection<GeneData>("gene");
            return collection.FindOne(v => locus ==v.LocusTag);
        }


        public async Task<AnalysisData?> GetResult(string id)
        {
            var collection = Database.GetCollection<AnalysisData>("result");
            return collection.Include(v => v.Snp).Include(v => v.MissingGenes).FindById(id);
        }
    }
}