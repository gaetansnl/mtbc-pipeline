using System.Collections.Generic;
using Core.Doi;

namespace Indexer.Data
{
    public record AnalysisData
    {
        public string Id => StrainId;
        public string StrainId { get; init; }

        public List<string> SnpSpdi { get; init; }

        public List<string> MissingGeneTags{ get; init; }

        public List<InsertionSequence> InsertionSequences{ get; init; }
        public List<Lineage> Lineages{ get; init; }
        public List<bool> Spoligotype43Blast{ get; init; }
        public List<bool> Spoligotype98Blast{ get; init; }
        public List<bool> SpoligotypeBlouinBlast{ get; init; }

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
        public record Lineage
        {
            public string Key { get; init; }
            public List<string> Lineages { get; init; }
            public DoiCitation? Study { get; set; }
            public string Name { get; set; }
        }
    }
}