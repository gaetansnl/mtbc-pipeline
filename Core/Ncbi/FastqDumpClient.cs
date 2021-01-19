using System;
using System.Collections.Generic;
using System.Threading.Tasks;
using CliWrap;
using CliWrap.EventStream;

namespace Core.Ncbi
{
    public class FastqDumpClient
    {
        public class FastqDumpOptions
        {
            public string OutDir;
            public string InputFile;
            public bool Fasta;

            public FastqDumpOptions(string inputFile,string outDir)
            {
                OutDir = outDir;
                InputFile = inputFile;
            }

            public List<string> GetArguments()
            {
                var arguments = new List<string>();
                arguments.Add(InputFile);
                arguments.Add($"--outdir {OutDir}");
                if(Fasta) arguments.Add("--fasta 60");
                return arguments;
            }

            public Dictionary<string, string> GetEnv()
            {
                var env = new Dictionary<string, string>();
                return env;
            }
        }
        public readonly string  FastqDumpPath;

        public FastqDumpClient(string makeBlastPath)
        {
            FastqDumpPath = makeBlastPath;
        }

        public async Task execute(FastqDumpOptions options)
        {
            var command = Cli
                .Wrap(FastqDumpPath)
                .WithArguments(options.GetArguments(), false).WithEnvironmentVariables(options.GetEnv());

            await foreach (var cmdEvent in command.ListenAsync())
                switch (cmdEvent)
                {
                    case StandardOutputCommandEvent e:
                        Console.WriteLine(e.Text);
                        break;
                    case StandardErrorCommandEvent e:
                        Console.WriteLine(e.Text);
                        break;
                    default:
                        Console.WriteLine("");
                        break;
                }
        }
    }
}