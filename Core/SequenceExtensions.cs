using System;
using System.Buffers;
using System.Linq;

namespace Core
{
    public static class SequenceExtensions
    {
        public static bool Skip(this ref ReadOnlySequence<byte> buffer, byte[] delimiters)
        {
            var reader = new SequenceReader<byte>(buffer);
            while (reader.TryRead(out var readByte))
            {
                if (!delimiters.Contains(readByte))
                {
                    reader.Rewind(1);
                    buffer = reader.UnreadSequence;
                    return true;
                }
            }
            buffer = reader.UnreadSequence;
            return false;
        }

        public static bool SkipBetween(this ref ReadOnlySequence<byte> buffer, byte start, byte end,  byte[] ignore)
        {
            if (!buffer.Skip(ignore)) return false;
            while (buffer.PositionOf(start).Equals(buffer.Start))
            {
                var endPosition = buffer.PositionOf(end);
                if (endPosition == null) return false;
                buffer = buffer.Slice(buffer.GetPosition(1, endPosition.Value));
                if (!buffer.Skip(ignore)) return false;
            }
            return true;
        }
        
        public static SequencePosition? PositionOfAny(this ReadOnlySequence<byte> buffer, byte[] delimiters)
        {
            SequencePosition? result = null;
            int last = Int32.MaxValue;
            foreach (var delimiter in delimiters)
            {
                var position = buffer.PositionOf(delimiter);
                if (position != null && position.Value.GetInteger() < last)
                {
                    result = position;
                    last = position.Value.GetInteger();
                }
            }
            return result;
        }
        
    }
}