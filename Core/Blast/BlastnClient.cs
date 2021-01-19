using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Threading.Tasks;
using CliWrap;
using CliWrap.Buffered;

namespace Core.Blast
{
    public class BlastnOptions
    {
        public static string[] AllowedFormatSpecifier =
        {
            "qseqid", "qgi", "qacc", "qaccver", "qlen", "sseqid", "sallseqid", "sgi", "sallgi", "sacc", "saccver",
            "sallacc", "slen", "qstart", "qend", "sstart", "send", "qseq", "sseq", "evalue", "bitscore", "score",
            "length", "pident", "nident", "mismatch", "positive", "gapopen", "gaps", "ppos", "frames", "qframe",
            "sframe", "btop", "staxids", "sscinames", "scomnames", "sblastnames", "sskingdoms", "stitle", "salltitles",
            "sstrand", "qcovs", "qcovhsp"
        };

        public string Evalue = "10";

        public List<string> FormatSpecifiers = new()
        {
            "qseqid", "sseqid", "pident", "length", "mismatch", "gapopen", "qstart", "qend", "sstart", "send",
            "evalue", "bitscore"
        };

        public int MaxTargetSeqs = 500;
        public int NumThreads = Environment.ProcessorCount;
        public string QueryPath;
        public string? InlineQuery;
        public string Task = "megablast";

        public BlastnOptions(string queryPath)
        {
            QueryPath = queryPath;
        }

        public static async Task<BlastnOptions> FromInlineQuery(string inlineQuery)
        {
            /* jamais supprimé */
            var path = Path.GetTempFileName();
            await File.WriteAllTextAsync(path, inlineQuery);
            return new(path) {InlineQuery = inlineQuery};
        }

        public List<string> GetArguments()
        {
            var arguments = new List<string>();
            arguments.Add($"-num_threads {NumThreads}");
            arguments.Add($"-query {QueryPath}");
            arguments.Add($"-evalue {Evalue}");
            arguments.Add($"-task {Task}");
            arguments.Add($"-outfmt \"10 {string.Join(' ', FormatSpecifiers)}\"");
            arguments.Add($"-max_target_seqs {MaxTargetSeqs}");
            return arguments;
        }

        public Dictionary<string, string> GetEnv()
        {
            var env = new Dictionary<string, string>();
            return env;
        }
    }

    public class BlastnClient
    {
        public readonly string BlastnPath;
        public readonly string DbName;
        public readonly string DbPath;

        public BlastnClient(string blastnPath, string dbName, string dbPath)
        {
            BlastnPath = blastnPath;
            DbName = dbName;
            DbPath = dbPath;
        }

        public async Task<List<BlastnResult>> ExecuteBuffered(BlastnOptions options)
        {
            var env = options.GetEnv();
            env["BLASTDB"] = DbPath;

            var args = options.GetArguments();
            args.Add($"-db {DbName}");

            var command = Cli
                .Wrap(BlastnPath)
                .WithArguments(args, false)
                .WithEnvironmentVariables(env);

            var result = await command.ExecuteBufferedAsync();
            var blastnResults = result.StandardOutput.Split('\n')
                .Where(v => !string.IsNullOrEmpty(v))
                .Select(v => BlastnResult.FromOutput(options, v))
                .ToList();
            return blastnResults;
        }
    }
}