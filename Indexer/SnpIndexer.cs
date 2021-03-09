using System;
using System.Collections.Generic;
using System.IO;
using System.Text.Json;
using System.Threading.Tasks;
using Core;
using Core.Doi;
using Indexer.Data;
using MTBC.Configuration;
using Snp = Core.Snp;

namespace Indexer
{
    public class SnpIndexer
    {
        protected Configuration Config;
        protected LiteDbDriver Database;
        protected DoiClient DoiClient;

        public SnpIndexer(Configuration config, LiteDbDriver database, DoiClient doiClient)
        {
            Config = config;
            Database = database;
            DoiClient = doiClient;
        }

        public async Task IndexSnp(SnpSource source, Snp snp)
        {
            var doi = source.Study?.Doi;
            SnpData snpData = SnpData.FromSnp(snp);
            if (doi != null)
            {
                var citation = await DoiClient.GetCitation(doi);
                if (citation != null)
                    snpData.Annotations.Add(new SnpData.Annotation
                    {
                        Study = citation,
                        Lineage = snp.Attributes.GetValueOrDefault("lineage")
                    });
            }

            await Database.Index(snpData);
        }

        public async Task Index()
        {
            if (Config.Snp == null) return;
            foreach (var snpSource in Config.Snp)
            {
                if (snpSource?.TsvFile == null) continue;
                foreach (var file in snpSource.TsvFile)
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
    }
}