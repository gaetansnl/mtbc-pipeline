using System;
using System.Collections.Generic;
using System.IO;
using System.Threading.Tasks;
using CliWrap;
using CliWrap.EventStream;

namespace Core.Blast
{
    public class BlastMakeClient
    {
        public class BlastMakeOptions
        {
            public string DbName;
            public string DbPath = Directory.GetCurrentDirectory();
            public string DbType;
            public string InputFile;
            public string InputType = "fasta";


            public BlastMakeOptions(string dbName, string dbType, string inputFile)
            {
                if (inputFile.Contains(' '))
                    throw new ArgumentException("Can't contain whitespace", nameof(inputFile));
                DbName = dbName;
                DbType = dbType;
                InputFile = inputFile;
            }

            public List<string> GetArguments()
            {
                var arguments = new List<string>();
                arguments.Add($"-out \"{Path.Join(DbPath, DbName)}\"");
                arguments.Add($"-dbtype {DbType}");
                arguments.Add($"-in \"{InputFile}\"");
                arguments.Add($"-input_type {InputType}");
                return arguments;
            }

            public Dictionary<string, string> GetEnv()
            {
                var env = new Dictionary<string, string>();
                return env;
            }
        }

        public readonly string MakeBlastPath;

        public BlastMakeClient(string makeBlastPath)
        {
            MakeBlastPath = makeBlastPath;
        }

        public async Task execute(BlastMakeOptions options)
        {
            var command = Cli
                .Wrap(MakeBlastPath)
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