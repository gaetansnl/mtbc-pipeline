namespace Core.Ncbi
{
    public class NcbiExperiment
    {
        public string? Accession{ get; set; }
        public string? CenterName{ get; set; }
        public string? Title{ get; set; }
        public NcbiStudy? Study{ get; set; }
    }
}