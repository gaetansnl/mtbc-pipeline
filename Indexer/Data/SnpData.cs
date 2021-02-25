using System.Collections.Generic;
using Core.Doi;
using Core.Ncbi;

namespace Indexer.Data
{
    public record SnpData
    {
        public string Id { get; init; }
        public string SequenceId { get; init; }
        public int Position { get; init; }
        public string Reference { get; init; }
        public string Insertion { get; init; }
        public string NcbiUrl => NcbiUtils.SequenceViewerUrl(SequenceId, Position, Id, Reference.Length);
        public List<Annotation> Annotations { get; init; } = new();

        public record Annotation
        {
            public DoiCitation Study { get; init; }
            public string? Lineage { get; init; }
        };
        public static SnpData FromSnp(Core.Snp snp)
        {
            return new()
            {
                Id = snp.Spdi,
                SequenceId = snp.SequenceId,
                Insertion = snp.Insertion,
                Reference = snp.Reference,
                Position = snp.Position,
            };
        }
    }
}