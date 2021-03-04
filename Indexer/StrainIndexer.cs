using System;
using System.Collections;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Text.Json;
using System.Threading;
using System.Threading.Tasks;
using Core.Ncbi;
using Indexer.Data;
using MTBC.Configuration;

namespace Indexer
{
    public class StrainIndexer
    {
        protected Configuration Config;
        protected LiteDbDriver Database;
        protected NcbiClient NcbiClient;

        public StrainIndexer(Configuration config, LiteDbDriver database, NcbiClient ncbiClient)
        {
            Config = config;
            Database = database;
            NcbiClient = ncbiClient;
        }

        public List<bool> RealSpol98(AnalysisData data)
        {
            List<bool> result = Enumerable.Repeat(false, 98).ToList();
            foreach (var part in data.Crispr)
            {
                if (part.Spacer == null || part.Spacer.Id > 98) continue;
                result[part.Spacer.Id-1] = true;
            }

            return result;
        }

        public List<bool> RealSpol43(AnalysisData data)
        {
            List<bool> spol98 = RealSpol98(data);
            List<bool> result = Enumerable.Repeat(false, 43).ToList();
            int[] positions =
            {
                2, 3, 4, 12, 13, 14, 15, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37,
                38, 39, 40, 41, 42, 43, 44, 46, 47, 51, 52, 53, 62, 63, 64, 65
            };
            for (int i = 0; i < 43; i++)
            {
                result[i] = spol98[positions[i]-1];
            }

            return result;
        }

        public async Task Index()
        {
            if (Config.AnalysisResultPath == null) return;
            var path = Config.ResolvePath(Config.AnalysisResultPath);
            var files = Directory.GetFiles(path);
            foreach (var file in files)
            {
                using FileStream openStream = File.OpenRead(file);
                var result = await JsonSerializer.DeserializeAsync<AnalysisData>(openStream,
                    new JsonSerializerOptions {PropertyNamingPolicy = JsonNamingPolicy.CamelCase});

                if (result == null)
                {
                    throw new Exception("Can't parse");
                }

                result.Snp = (await Database.ListSnpById(result.SnpSpdi)).OrderBy(v => v.Position).ToList();
                // if (result.Snp.Count != result.SnpSpdi.Count) throw new Exception("Snp not found");

                result.MissingGenes = (await Database.ListGenesByLocus(result.MissingGeneTags)).OrderBy(v => v.LocusTag)
                    .ToList();
                if (result.MissingGeneTags.Count != result.MissingGenes.Count) throw new Exception("Gene not found");

                foreach (var crisprPart in result.Crispr)
                {
                    if (crisprPart?.Gene?.Name != null)
                    {
                        crisprPart.Gene.Gene = await Database.GetGeneByLocus(crisprPart.Gene.Name);
                    }
                }

                result.Spoligotype43Crispr = RealSpol43(result);
                result.Spoligotype98Crispr = RealSpol98(result);
                result.Run = await NcbiClient.FindRunByAccession(result.Id);
                await Database.Index(result);
                Console.WriteLine($"Indexed ${file}");
                Thread.Sleep(100);
            }
        }
    }
}