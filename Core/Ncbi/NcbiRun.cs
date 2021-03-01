using System;
using System.Collections.Generic;

namespace Core.Ncbi
{
    public class NcbiRun
    {
        public string? Accession { get; set; }
        public string? Link => Accession != null ? $"https://trace.ncbi.nlm.nih.gov/Traces/sra/?run={Accession}" : null;

        public NcbiExperiment? Experiment{ get; set; }
        public string? Title{ get; set; }
        public int? TotalBases{ get; set; }
        public int? TotalSpots{ get; set; }
        public int? Size{ get; set; }
        public List<NcbiSample> Samples { get; set; } = new();
        public DateTime? PublishedAt{ get; set; }
        public string? DownloadUrl{ get; set; }
        public int? ReadsPerSpot { get; set; }
        public int? TotalReads => ReadsPerSpot != null && TotalSpots != null ? ReadsPerSpot * TotalSpots : null;
        public int? AverageReadLength { get; set; }
    }
}