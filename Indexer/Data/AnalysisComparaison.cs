using System.Collections.Generic;

namespace Indexer.Data
{
    public class AnalysisComparaison
    {
        public List<SnpData> SharedSnp { get; set; }
        public List<GeneData> SharedMissingGenes { get; set; }
        public List<AnalysisData.InsertionSequence> SharedInsertionSequences { get; set; }
        
        public Dictionary<string, int> SharedSnpExclusivity { get; set; }
        public Dictionary<string, int> SharedMissingGenesExclusivity { get; set; }
        public Dictionary<string, int> SharedInsertionSequencesExclusivity { get; set; }
        public int TotalSelected { get; set; }
        public int Total { get; set; }

    }
}