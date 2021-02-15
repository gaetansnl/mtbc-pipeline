using System.Collections.Generic;

namespace Core
{
    public class Snp
    {
        public readonly string SequenceId;
        public readonly int Position;
        public readonly string Reference;
        public readonly string Insertion;
        public Dictionary<string, string> Attributes = new();

        public int Position0 => Position - 1;
        public string Spdi => $"{SequenceId}:{Position0}:{Reference}:{Insertion}";

        public Snp(string sequenceId, int position, string reference, string insertion)
        {
            SequenceId = sequenceId;
            Position = position;
            Reference = reference;
            Insertion = insertion;
        }
    }
}