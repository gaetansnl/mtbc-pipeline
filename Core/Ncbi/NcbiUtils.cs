using System;

namespace Core.Ncbi
{
    public static class NcbiUtils
    {
        public static string SequenceViewerUrl(string sequenceId, int position, string name, int size = 1)
        {
            return $"https://www.ncbi.nlm.nih.gov/nuccore/{sequenceId}?report=graph&mk={position}:{position+size-1}|{name}&v={position-50}:{position+50}";
        }
    }
}