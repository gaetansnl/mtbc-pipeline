using System;
using System.Collections.Generic;

namespace Core.Ncbi
{
    public class NcbiRun
    {
        public string? Accession;
        public NcbiExperiment? Experiment;
        public string? Title;
        public int? TotalBases;
        public int? TotalSpots;
        public int? Size;
        public List<NcbiSample> Samples = new();
        public DateTime? PublishedAt;
        public string? DownloadUrl;
    }
}