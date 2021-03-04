using System.Collections.Generic;
using System.Linq;
using Core.Ncbi;

namespace Indexer.Data
{
    public record AnalysisData
    {
        public string Id => StrainId;
        public string StrainId { get; init; }
        public string? CountryCode { get; set; }
        
        public List<string> SnpSpdi { get; init; }
        public List<SnpData> Snp { get; set; }
        public NcbiRun? Run { get; set; }
        
        public List<string> MissingGeneTags{ get; init; }
        public List<GeneData> MissingGenes{ get; set; }
        
        public List<InsertionSequence> InsertionSequences{ get; init; }
        public List<bool> Spoligotype43Blast{ get; init; }
        public List<bool> Spoligotype98Blast{ get; init; }
        public List<bool> SpoligotypeBloinBlast{ get; init; }
        public List<bool> Spoligotype43Crispr{ get; set; }
        public List<bool> Spoligotype98Crispr{ get; set; }
        public bool Spoligotype43MatchBlast => Enumerable.SequenceEqual(Spoligotype43Crispr, Spoligotype43Blast);
        public bool Spoligotype98MatchBlast => Enumerable.SequenceEqual(Spoligotype98Crispr, Spoligotype98Blast);
        public List<CrisprPartData> Crispr{ get; init; }
        
        public record InsertionSequence
        {
            public record PrefixedPosition
            {
                public string Prefix{ get; init; }
                public int Position{ get; init; }
            }
            public string Name { get; init; }
            public List<PrefixedPosition> Positions { get; init; }
        }
    }
}