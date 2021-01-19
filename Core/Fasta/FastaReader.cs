using System;
using System.Buffers;
using System.Collections.Concurrent;
using System.Collections.Generic;
using System.IO;
using System.IO.Pipelines;
using System.Text;
using System.Threading;
using System.Threading.Tasks;

namespace Core.Fasta
{
    /**
     * TODO: If file isn't starting with > (due to bad encoding) discard will be non-zero at start and will fail
     */
    public class FastaReader
    {
        protected readonly Dictionary<string, int> IndexByIdentifier = new();
        protected readonly List<string> SequenceComments = new();
        protected readonly List<long> SequenceStarts = new();
        protected readonly List<long> SequenceLengths = new();
        protected ArrayPool<byte> Pool = ArrayPool<byte>.Shared;
        protected ConcurrentDictionary<int, string> SequenceCache = new();
        protected SemaphoreSlim SequenceCacheLock = new(1, 1);

        public readonly string Path;
        public bool CacheSequences = true;

        public static async Task<FastaReader> CreateAsync(string path)
        {
            var result = new FastaReader(path);
            await result.Index();
            return result;
        }

        protected FastaReader(string path)
        {
            Path = path;
        }

        public async Task<string> ReadSequenceAsync(string identifier)
        {
            return await (CacheSequences ? ReadSequenceCachedAsync(identifier) : ReadSequenceUncachedAsync(identifier));
        }

        protected async Task<string> ReadSequenceCachedAsync(string identifier)
        {
            int index = IndexOf(identifier);
            if (SequenceCache.TryGetValue(index, out var result)) return result;
            await SequenceCacheLock.WaitAsync();
            try
            {
                if (SequenceCache.TryGetValue(index, out result)) return result;
                return SequenceCache[index] = await ReadSequenceUncachedAsync(identifier);
            }
            finally
            {
                SequenceCacheLock.Release();
            }
        }

        protected async Task<string> ReadSequenceUncachedAsync(string identifier)
        {
            int index = IndexOf(identifier);
            int sequenceLength = (int) SequenceLengths[index];
            byte[] buffer = Pool.Rent(sequenceLength);

            await using var stream = File.OpenRead(Path);
            stream.Seek(SequenceStarts[index], SeekOrigin.Begin);

            await stream.ReadAsync(buffer, 0, sequenceLength);
            var result = Encoding.UTF8.GetString(buffer).Replace("\n", "");

            Pool.Return(buffer);
            return result;
        }

        public string CommentOf(string identifier)
        {
            return SequenceComments[IndexOf(identifier)];
        }

        public int IndexOf(string identifier)
        {
            return IndexByIdentifier[identifier];
        }

        public IEnumerable<string> Identifiers => IndexByIdentifier.Keys;
        public int Length => IndexByIdentifier.Count;

        protected async Task Index()
        {
            await using var stream = File.OpenRead(Path);
            var pipe = PipeReader.Create(stream,
                new StreamPipeReaderOptions(MemoryPool<byte>.Shared, (int) Math.Pow(2, 20)));
            await ReadPipeAsync(pipe);
        }

        protected void IndexHeader(ReadOnlySequence<byte> line)
        {
            var space = line.PositionOf((byte) ' ');

            var identifierSlice = space != null ? line.Slice(1, space.Value) : line.Slice(1);
            Span<byte> identifierBytes = stackalloc byte[(int) identifierSlice.Length];
            identifierSlice.CopyTo(identifierBytes);
            IndexByIdentifier.Add(Encoding.UTF8.GetString(identifierBytes), IndexByIdentifier.Count);

            if (space != null)
            {
                var commentSlice = line.Slice(space.Value).Slice(1);
                Span<byte> commentBytes = stackalloc byte[(int) commentSlice.Length];
                commentSlice.CopyTo(commentBytes);
                SequenceComments.Add(Encoding.UTF8.GetString(commentBytes));
            }
        }

        protected async Task ReadPipeAsync(PipeReader reader)
        {
            long discarded = 0;
            long totalDiscarded = 0;
            while (true)
            {
                ReadResult result = await reader.ReadAsync();
                ReadOnlySequence<byte> buffer = result.Buffer;

                while (TryReadLine(ref buffer, out ReadOnlySequence<byte> line, ref discarded))
                {
                    if (discarded > 0) SequenceLengths.Add(discarded);
                    totalDiscarded += discarded + line.Length;
                    SequenceStarts.Add(totalDiscarded);
                    discarded = 0;

                    IndexHeader(line);
                }

                // Tell the PipeReader how much of the buffer has been consumed.
                reader.AdvanceTo(buffer.Start, buffer.End);

                // Stop reading if there's no more data coming.
                if (result.IsCompleted)
                {
                    SequenceLengths.Add(discarded);
                    break;
                }
            }

            // Mark the PipeReader as complete.
            await reader.CompleteAsync();
        }

        protected bool TryReadLine(ref ReadOnlySequence<byte> buffer, out ReadOnlySequence<byte> line,
            ref long discarded)
        {
            SequencePosition? headerStart = buffer.PositionOf((byte) '>');
            if (headerStart == null)
            {
                line = default;
                discarded += buffer.Length;
                buffer = buffer.Slice(buffer.End);
                return false;
            }

            SequencePosition? headerEnd = buffer.Slice(headerStart.Value).PositionOf((byte) '\n');
            if (headerEnd == null)
            {
                line = default;
                discarded += 0;
                return false;
            }

            line = buffer.Slice(headerStart.Value, headerEnd.Value);
            discarded += buffer.Slice(buffer.Start, headerStart.Value).Length;
            buffer = buffer.Slice(buffer.GetPosition(0, headerEnd.Value));
            return true;
        }
    }
}