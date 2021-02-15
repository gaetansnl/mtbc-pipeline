using System.Collections.Generic;
using System.IO;
using YamlDotNet.Serialization;
using YamlDotNet.Serialization.NamingConventions;

namespace MTBC.Configuration
{
    public class Configuration
    {
        protected string FilePath = Directory.GetCurrentDirectory(); 
        public List<SnpSource>? Snp;
        public List<GeneSource>? Gene;
        public List<ReferenceSource>? Reference;

        public string ResolvePath(string path)
        {
            string? folder = Path.GetDirectoryName(FilePath);
            if (folder == null) return Path.GetFullPath(path);
            return Path.GetFullPath(path, folder);
        }
        
        public static Configuration FromYaml(string path)
        {
            using (StreamReader reader = File.OpenText(path))
            {
                var deserializer = new DeserializerBuilder()
                    .WithNamingConvention(UnderscoredNamingConvention.Instance)
                    .Build();
                var config =  deserializer.Deserialize<Configuration>(reader);
                config.FilePath =  Path.GetFullPath(path);
                return config;
            }
        }
    }
}