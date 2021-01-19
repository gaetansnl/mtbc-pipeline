using System.Collections.Generic;
using System.Threading.Tasks;
using Core.Blast;
using Core.Fasta;

namespace MTBC.Annotation
{
    public class BlastnSequenceReporter
    {
        protected BlastnClient Client;
        public string Task = "blastn";
        public int MaxTargetSeqs = 500;

        public BlastnSequenceReporter(BlastnClient client)
        {
            Client = client;
        }

        public async Task<FrequencyReport> Frequency(FastaReader reader, string evalue = "1e-6")
        {
            var report = new FrequencyReport(reader.Length);
            var blastnResults = await Client.ExecuteBuffered(new BlastnOptions(reader.Path)
            {
                Task = Task,
                Evalue = evalue,
                FormatSpecifiers = new List<string> {"qseqid"},
                MaxTargetSeqs = MaxTargetSeqs
            });

            foreach (var result in blastnResults)
            {
                if (result.QuerySeqId == null) continue;
                var index = reader.IndexOf(result.QuerySeqId);
                report.Increment(index);
            }

            return report;
        }
    }
}