using System.Collections.Generic;
using System.Threading.Tasks;
using Core;
using Core.Doi;
using Indexer.Data;
using MTBC.Configuration;
using Snp = Core.Snp;

namespace Indexer
{
    public class Indexer
    {
        protected Configuration Config;
        protected LiteDBDriver Database;
        protected DoiClient DoiClient;

        public Indexer(Configuration config, LiteDBDriver database, DoiClient doiClient)
        {
            Config = config;
            Database = database;
            DoiClient = doiClient;
        }

        public async Task IndexSnp(SnpSource source, Snp snp)
        {
            var doi = source.Study?.Doi;
            Data.Snp dataSnp = new()
            {
                Id = snp.Spdi,
                SequenceId = snp.SequenceId,
                Insertion = snp.Insertion,
                Reference = snp.Reference,
                Position = snp.Position,
            };
            if (doi != null)
            {
                var citation = await DoiClient.GetCitation(doi);
                if (citation != null)
                    dataSnp.Annotations.Add(new SnpAnnotation
                    {
                        Study = citation,
                        Lineage = snp.Attributes.GetValueOrDefault("lineage")
                    });
            }

            await Database.IndexSnp(dataSnp);
        }

        public async Task IndexSnps()
        {
            if (Config.Snp == null) return;
            foreach (var snpSource in Config.Snp)
            {
                if (snpSource?.CsvFile == null) continue;
                foreach (var file in snpSource.CsvFile)
                {
                    if (file == null) continue;
                    var path = Config.ResolvePath(file);
                    var snps = await SnpFileReader.FromCsv(path);
                    foreach (var snp in snps)
                    {
                        await IndexSnp(snpSource, snp);
                    }
                }
            }
        }


        public void Index()
        {
        }
    }
}