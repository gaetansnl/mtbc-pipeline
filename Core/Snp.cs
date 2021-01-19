using System.Collections.Generic;
using System.Globalization;
using System.IO;
using System.Threading.Tasks;
using CsvHelper;

namespace Core
{
    public class Snp
    {
        public string SequenceId;
        public int Position;
        public string Id;
        public string Reference;
        public string[] Alternatives;

        public Snp(string sequenceId, int position, string id, string reference, string[] alternatives)
        {
            SequenceId = sequenceId;
            Position = position;
            Id = id;
            Reference = reference;
            Alternatives = alternatives;
        }

        public static async Task<List<Snp>> FromCsv(string path)
        {
            using (var reader = new StreamReader(path))
            using (var csv = new CsvReader(reader, CultureInfo.InvariantCulture))
            {
                csv.Configuration.Delimiter = "\t";
                var records = new List<Snp>();
                await csv.ReadAsync();
                csv.ReadHeader();
                while (await csv.ReadAsync())
                {
                    var record = new Snp(
                        csv.GetField("SEQ"),
                        csv.GetField<int>("POS"),
                        csv.GetField("ID"),
                        csv.GetField("REF"),
                        csv.GetField("A/T").Split(',')
                    );
                    records.Add(record);
                }

                return records;
            }
        }
    }
}