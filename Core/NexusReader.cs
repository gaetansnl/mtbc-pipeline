using System;
using System.Buffers;
using System.Collections.Generic;
using System.Globalization;
using System.IO;
using System.IO.Pipelines;
using System.Text;
using System.Threading.Tasks;

namespace Core
{
    public class NexusReader
    {
        protected string Path;

        protected NexusReader(string path)
        {
            Path = path;
        }

        public static async Task<NexusReader> FromPath(string path)
        {
            var result = new NexusReader(path);
            await result.Index();
            return result;
        }

        protected async Task Index()
        {
            await using var stream = File.OpenRead(Path);
            var pipe = PipeReader.Create(stream,
                new StreamPipeReaderOptions(MemoryPool<byte>.Shared, (int) Math.Pow(2, 20)));
            await ReadPipeAsync(pipe);
        }

        async Task ReadPipeAsync(PipeReader reader)
        {
            while (true)
            {
                ReadResult result = await reader.ReadAsync();
                ReadOnlySequence<byte> buffer = result.Buffer;

                while (TryReadLine(ref buffer))
                {
                }

                // Tell the PipeReader how much of the buffer has been consumed.
                reader.AdvanceTo(buffer.Start, buffer.End);

                // Stop reading if there's no more data coming.
                if (result.IsCompleted)
                {
                    break;
                }
            }

            // Mark the PipeReader as complete.
            await reader.CompleteAsync();
        }

        protected string? StateCurrentInstruction;
        protected string? StateCurrentBlock;
        public Dictionary<int, string> Vertices = new();
        public Dictionary<int, (double, double)> NetworkVertices = new();
        public Dictionary<int, (int, int)> NetworkEdges = new();

        bool ProcessCommand(ref ReadOnlySequence<byte> buffer)
        {
            var separators = new[] {(byte) ' ', (byte) ',', (byte) '\n'};
            if (StateCurrentInstruction == "BEGIN")
            {
                StateCurrentBlock = Encoding.UTF8.GetString(buffer).Trim();
                buffer = buffer.Slice(buffer.End);
                return false;
            }
            else if (StateCurrentBlock == "Network" && StateCurrentInstruction == "TRANSLATE")
            {
                buffer.Skip(separators);
                if (buffer.PositionOf((byte) ',') == null) return false;

                var reader = new SequenceReader<byte>(buffer);
                if (!reader.TryReadTo(out ReadOnlySpan<byte> vertexIdSpan, (byte) ' ')) throw new Exception();
                if (!reader.TryReadTo(out ReadOnlySpan<byte> taxonNameSpan, (byte) ',')) throw new Exception();
                var vertexId = int.Parse(Encoding.UTF8.GetString(vertexIdSpan));
                var taxonName = Encoding.UTF8.GetString(taxonNameSpan.Slice(1, taxonNameSpan.Length - 2));
                Vertices[vertexId] = taxonName;
                buffer = reader.UnreadSequence;
                return !reader.UnreadSequence.IsEmpty;
            }
            else if (StateCurrentBlock == "Network" && StateCurrentInstruction == "VERTICES")
            {
                buffer.Skip(separators);
                if (buffer.PositionOf((byte) ',') == null) return false;

                var reader = new SequenceReader<byte>(buffer);
                if (!reader.TryReadTo(out ReadOnlySpan<byte> vertexIdSpan, (byte) ' ')) throw new Exception();
                if (!reader.TryReadTo(out ReadOnlySpan<byte> xPositionSpan, (byte) ' ')) throw new Exception();
                if (!reader.TryReadTo(out ReadOnlySpan<byte> yPositionSpan, (byte) ' ')) throw new Exception();
                var vertexId = int.Parse(Encoding.UTF8.GetString(vertexIdSpan));
                var xPosition = double.Parse(Encoding.UTF8.GetString(xPositionSpan), NumberStyles.Any,
                    CultureInfo.InvariantCulture);
                var yPosition = double.Parse(Encoding.UTF8.GetString(yPositionSpan), NumberStyles.Any,
                    CultureInfo.InvariantCulture);
                NetworkVertices[vertexId] = (xPosition, yPosition);
                reader.TryReadTo(out ReadOnlySpan<byte> _, (byte) ',');
                buffer = reader.UnreadSequence;
                return !reader.UnreadSequence.IsEmpty;
            }
            else if (StateCurrentBlock == "Network" && StateCurrentInstruction == "EDGES")
            {
                buffer.Skip(separators);
                if (buffer.PositionOf((byte) ',') == null) return false;

                var reader = new SequenceReader<byte>(buffer);
                if (!reader.TryReadTo(out ReadOnlySpan<byte> edgeIdSpan, (byte) ' ')) throw new Exception();
                if (!reader.TryReadTo(out ReadOnlySpan<byte> vertex1Span, (byte) ' ')) throw new Exception();
                if (!reader.TryReadTo(out ReadOnlySpan<byte> vertex2Span, (byte) ' ')) throw new Exception();
                var edgeId = int.Parse(Encoding.UTF8.GetString(edgeIdSpan));
                var vertex1 = int.Parse(Encoding.UTF8.GetString(vertex1Span));
                var vertex2 = int.Parse(Encoding.UTF8.GetString(vertex2Span));
                NetworkEdges[edgeId] = (vertex1, vertex2);
                reader.TryReadTo(out ReadOnlySpan<byte> _, (byte) ',');
                buffer = reader.UnreadSequence;
                return !reader.UnreadSequence.IsEmpty;
            }
            else
            {
                buffer = buffer.Slice(buffer.End);
                return false;
            }
        }


        bool TryReadLine(ref ReadOnlySequence<byte> buffer)
        {
            SequencePosition? commentPosition = buffer.PositionOf((byte) '#');
            SequencePosition? eolPosition = buffer.PositionOf((byte) '\n');
            if (commentPosition != null)
            {
                if (eolPosition != null)
                {
                    buffer = buffer.Slice(buffer.GetPosition(1, eolPosition.Value));
                    return true;
                }

                return false;
            }

            if (StateCurrentInstruction == null)
            {
                var separators = new[] {(byte) ' ', (byte) '\n'};
                if (!buffer.SkipBetween((byte) '[', (byte) ']', separators)) return false;
                if (!buffer.Skip(separators)) return false;
                var nameEndPosition = buffer.PositionOfAny(new[] {(byte) ';', (byte) ' ', (byte) '\n'});
                if (nameEndPosition != null)
                {
                    StateCurrentInstruction = Encoding.UTF8.GetString(buffer.Slice(0, nameEndPosition.Value));
                    buffer = buffer.Slice(buffer.GetPosition(0, nameEndPosition.Value));
                    return true;
                }

                return false;
            }

            SequencePosition? endPosition = buffer.PositionOf((byte) ';');
            if (endPosition != null)
            {
                var slice = buffer.Slice(0, endPosition.Value);
                while (ProcessCommand(ref slice))
                {
                }

                StateCurrentInstruction = null;
                buffer = buffer.Slice(buffer.GetPosition(2, endPosition.Value));
                return true;
            }

            while (ProcessCommand(ref buffer))
            {
            }

            return false;
        }
    }
}