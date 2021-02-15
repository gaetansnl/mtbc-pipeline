using System.Collections.Generic;
using Core.Ncbi;

namespace Indexer.Data
{
    public record Snp
    {
        public string Id { get; init; }
        public string SequenceId { get; init; }
        public int Position { get; init; }
        public string Reference { get; init; }
        public string Insertion { get; init; }
        public string NcbiUrl => NcbiUtils.SequenceViewerUrl(SequenceId, Position, Id, Reference.Length);
        public List<SnpAnnotation> Annotations { get; init; } = new();
    }
}