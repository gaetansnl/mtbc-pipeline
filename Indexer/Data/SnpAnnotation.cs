using Core.Doi;

namespace Indexer.Data
{
    public record SnpAnnotation
    {
        public DoiCitation Study { get; init; }
        public string? Lineage { get; init; }

        public virtual bool Equals(SnpAnnotation? other)
        {
            if (ReferenceEquals(null, other)) return false;
            if (ReferenceEquals(this, other)) return true;
            return Study.Equals(other.Study);
        }

        public override int GetHashCode()
        {
            return Study.GetHashCode();
        }
    }
}