using System.Collections.Generic;
using System.Linq;
using System.Text.Json.Serialization;

namespace Core.Doi
{
    public record DoiCitation
    {
        public record Author
        {
            public string Given { get; init; }
            public string Family { get; init; }
            public string Sequence { get; init; }
            public string Orcid { get; init; }
            public string FullName => $"{Family}, {Given}";

        }

        public string Publisher { get; init; }
        public string Doi { get; init; }
        public string Url => $"https://doi.org/{Doi}";

        public string Title { get; init; }

        [JsonPropertyName("is-referenced-by-count")]
        public int ReferencedByCount { get; init; }

        [JsonPropertyName("author")] public List<Author> Authors { get; init; }
        public List<Author> PrimaryAuthors => Authors.Where(v => v.Sequence == "first" || v.Sequence == "primary").ToList();
        public Author MainAuthor => PrimaryAuthors.First();

        public virtual bool Equals(DoiCitation? other)
        {
            if (ReferenceEquals(null, other)) return false;
            if (ReferenceEquals(this, other)) return true;
            return Doi == other.Doi;
        }

        public override int GetHashCode()
        {
            return Doi.GetHashCode();
        }
    }
}