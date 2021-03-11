using System.Collections.Generic;

namespace Indexer.Data
{
    public class AnalysisComparaison
    {
        public List<SnpData> SharedSnp { get; set; }
        public List<GeneData> SharedMissingGenes { get; set; }
        public List<AnalysisData.InsertionSequence> SharedInsertionSequences { get; set; }
    }
}