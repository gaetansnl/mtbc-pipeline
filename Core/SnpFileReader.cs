using System.Collections.Generic;
using System.Globalization;
using System.IO;
using System.Threading.Tasks;
using CsvHelper;

namespace Core
{
    public static class SnpFileReader
    {
        public static async Task<List<Snp>> FromCsv(string path)
        {
            using (var reader = new StreamReader(path))
            using (var csv = new CsvReader(reader, CultureInfo.InvariantCulture))
            {
                csv.Configuration.Delimiter = "\t";
                var records = new List<Snp>();
                while (await csv.ReadAsync())
                {
                    var record = SpdiParser.Parse(csv.GetField(0));
                    var hasAttributes = csv.TryGetField(1, out string attributesFied);
                    if (hasAttributes)
                    {
                        var attributes = AttributesParser.Parse(attributesFied);
                        record.Attributes = attributes;
                    }
                    records.Add(record);
                }

                return records;
            }
        }
    }
}