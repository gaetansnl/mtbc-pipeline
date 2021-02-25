using System.Collections.Generic;

namespace Indexer.Data
{
    public record AnalysisData
    {
        public string Id => StrainId;
        public string StrainId { get; init; }
        
        public List<string> SnpSpdi { get; set; }
        public List<SnpData> Snp { get; set; }
        
        public List<string> MissingGeneTags{ get; init; }
        public List<GeneData> MissingGenes{ get; set; }
        
        public List<InsertionSequence> InsertionSequences{ get; init; }
        public List<bool> Spoligotype43Blast{ get; init; }
        public List<bool> Spoligotype98Blast{ get; init; }
        public List<bool> SpoligotypeBloinBlast{ get; init; }
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