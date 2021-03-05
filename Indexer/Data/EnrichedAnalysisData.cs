using System.Collections.Generic;
using System.Linq;
using Core.Ncbi;

namespace Indexer.Data
{
    public record EnrichedAnalysisData: AnalysisData
    {
        public string? CountryCode { get; set; }
        public List<SnpData> SnpWithoutAnnotation { get; set; }
        public List<SnpData> Snp { get; set; }
        public NcbiRun? Run { get; set; }
        public List<GeneData> MissingGenes{ get; set; }
        public List<bool> Spoligotype43Crispr{ get; set; }
        public List<bool> Spoligotype98Crispr{ get; set; }
        public bool Spoligotype43MatchBlast => Enumerable.SequenceEqual(Spoligotype43Crispr, Spoligotype43Blast);
        public bool Spoligotype98MatchBlast => Enumerable.SequenceEqual(Spoligotype98Crispr, Spoligotype98Blast);
    }
}