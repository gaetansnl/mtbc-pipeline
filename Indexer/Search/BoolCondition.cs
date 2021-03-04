using System.Collections.Generic;

namespace Indexer.Search
{
    public record BoolCondition
    {
        public enum BoolOperator
        {
            OR = 0,
            AND = 1
        }
        public BoolOperator Operator { get; set; }
        public List<Condition> Conditions { get; set; }

    }
}