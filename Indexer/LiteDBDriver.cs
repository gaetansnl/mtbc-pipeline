using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Indexer.Data;
using LiteDB;

namespace Indexer
{
    public class LiteDBDriver
    {
        protected LiteDatabase Database;

        public LiteDBDriver(LiteDatabase database)
        {
            Database = database;
        }

        public async Task IndexSnp(Snp snp)
        {
            var collection = Database.GetCollection<Snp>("snp");
            var existing = collection.FindById(snp.Id);
            if (existing != null)
            {
                existing = existing with {Annotations = existing.Annotations.Concat(snp.Annotations).Distinct().ToList()};
                collection.Update(existing);
            }
            else
            {
                collection.Insert(snp);
            }
        }

        public async Task<IEnumerable<Snp>> ListSnp(int page = 0)
        {
            var collection = Database.GetCollection<Snp>("snp");
            return collection.Find(Query.All(), limit: 100);
        }
    }
}