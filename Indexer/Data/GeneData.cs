namespace Indexer.Data
{
    public class GeneData
    {
        public GeneData(string id, string sequenceId)
        {
            Id = id;
            SequenceId = sequenceId;
        }

        public string Id { get; init; }
        public string SequenceId { get; init; }
        public string? Symbol { get; init; }
        public string? Description { get; init; }
        public string LocusTag { get; init; }
    }
}