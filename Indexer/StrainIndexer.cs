using System;
using System.IO;
using System.Linq;
using System.Text.Json;
using System.Threading.Tasks;
using Indexer.Data;
using MTBC.Configuration;

namespace Indexer
{
    public class StrainIndexer
    {
        protected Configuration Config;
        protected LiteDbDriver Database;

        public StrainIndexer(Configuration config, LiteDbDriver database)
        {
            Config = config;
            Database = database;
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
                
                result.Snp = (await Database.ListSnpById(result.SnpSpdi)).ToList();
                // if (result.Snp.Count != result.SnpSpdi.Count) throw new Exception("Snp not found");
                
                result.MissingGenes = (await Database.ListGenesByLocus(result.MissingGeneTags)).ToList();
                if (result.MissingGeneTags.Count != result.MissingGenes.Count) throw new Exception("Gene not found");
                
                foreach (var crisprPart in result.Crispr)
                {
                    if (crisprPart?.Gene?.Name != null)
                    {
                        crisprPart.Gene.Gene = await Database.GetGeneByLocus(crisprPart.Gene.Name);
                    }
                }
                await Database.Index(result);
                Console.WriteLine("gg");
            }
        }
    }
}