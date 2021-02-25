namespace Indexer.Data
{
    public record CrisprPartData
    {
        public SpacerPart? Spacer { get; init; }
        public DirectRepeatPart? DirectRepeat { get; init; }
        public InsertionSequencePart? InsertionSequence { get; init; }
        public NamedSequencePart? NamedSequence { get; init; }
        public SequencePart? Sequence { get; init; }
        public GenePart? Gene { get; init; }
        public record GenePart
        {
            public string Name { get; init; }
            public GeneData? Gene { get; set; }
        }
        public record SequenceRange
        {
            public int? From { get; init; }
            public int? To { get; init; }
        }
        public record DirectRepeatPart
        {
            public string Name { get; init; }
            public int Version { get; init; }
            public SequenceRange Range { get; init; }
        }
        public record SpacerPart
        {
            public int Id { get; init; }
            public int Version { get; init; }
            public SequenceRange Range { get; init; }
        }
        public record InsertionSequencePart
        {
            public string Name { get; init; }
            public bool IsReverse { get; init; }
            public SequenceRange Range { get; init; }
        }
        public record NamedSequencePart
        {
            public string Name { get; init; }
        }
        public record SequencePart
        {
            public string Value { get; init; }
        }
    }
}