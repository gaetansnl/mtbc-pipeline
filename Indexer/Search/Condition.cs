namespace Indexer.Search
{
    public record Condition
    {
        public bool Negate { get; set; }
        public KeywordCondition? Keyword { get; set; }
        public BoolCondition? Bool { get; set; }
    }
}