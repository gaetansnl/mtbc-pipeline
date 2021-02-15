using System;
using System.Collections.Generic;
using System.Threading.Tasks;
using System.Threading.Tasks.Dataflow;
using Core;
using Core.Blast;
using Core.Fasta;

namespace MTBC.Annotation
{
    public class BlastnSnpReporter
    {
        private FastaReader Reader;
        protected BlastnClient Client;
        public int NumberOfProcess = Environment.ProcessorCount;

        public BlastnSnpReporter(BlastnClient client, FastaReader reader)
        {
            Client = client;
            Reader = reader;
        }

        /**
         * TODO: Avec frequency > 2 pour les autres Alternatives ? Inutile pour l'instant
         */
        public async Task<FrequencyReport> SnpFrequency(string referenceId, Snp snp, int windowSize = 20,
            int validateSize = 5)
        {
            var genome = await Reader.ReadSequenceAsync(referenceId);

            if (genome[snp.Position0].ToString() != snp.Reference) throw new Exception("Reference mismatch");

            var beforeWindow = new Range(snp.Position0 - windowSize, snp.Position0);
            var afterWindow = new Range(snp.Position0 + 1, snp.Position0 + 1 + windowSize);

            var seq1 = genome[beforeWindow] + genome[snp.Position0] + genome[afterWindow];
            var seq2 = genome[beforeWindow] + snp.Insertion + genome[afterWindow];

            var options = await BlastnOptions.FromInlineQuery($">id\n{seq2}");
            options.Evalue = "1e-5";
            options.Task = "blastn";
            options.MaxTargetSeqs = 150;
            options.FormatSpecifiers = new List<string> {"sseq"};
            var results = await Client.ExecuteBuffered(options);

            var validateBefore = new Range(windowSize - validateSize + 1, windowSize + 1);
            var validateAfter = new Range(windowSize, windowSize + validateSize);
            
            var frequencies = new FrequencyReport(2);
            foreach (var result in results)
            {
                if (String.IsNullOrEmpty(result.AlignedPartOfSubjectSequence)) continue;
                if (result.AlignedPartOfSubjectSequence.Contains(seq1[validateBefore])) frequencies.Increment(0);
                if (result.AlignedPartOfSubjectSequence.Contains(seq1[validateAfter])) frequencies.Increment(0);
                if (result.AlignedPartOfSubjectSequence.Contains(seq2[validateBefore])) frequencies.Increment(1);
                if (result.AlignedPartOfSubjectSequence.Contains(seq2[validateAfter])) frequencies.Increment(1);
            }

            return frequencies;
        }

        public async Task<FrequencyReport[]> SnpFrequency(string referenceId, List<Snp> snps,
            int windowSize = 20, int validateSize = 5)
        {
            var transformBlock =
                new TransformBlock<(int, Snp), (int, FrequencyReport)>(async tuple =>
                    {
                        var (index, snp) = tuple;
                        var isPresent = await SnpFrequency(referenceId, snp, windowSize, validateSize);
                        return (index, isPresent);
                    },
                    new ExecutionDataflowBlockOptions
                    {
                        MaxDegreeOfParallelism = NumberOfProcess
                    });


            for (int i = 0; i < snps.Count; i++) await transformBlock.SendAsync((i, snps[i]));
            var list = new FrequencyReport[snps.Count];
            for (int i = 0; i < snps.Count; i++)
            {
                var (index, result) = await transformBlock.ReceiveAsync();
                list[index] = result;
            }
            return list;
        }
    }
}