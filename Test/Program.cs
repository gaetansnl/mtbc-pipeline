using System;
using System.Collections.Generic;
using System.Diagnostics;
using System.Linq;
using System.Threading.Tasks;
using Core;
using Couchbase.Lite;
using Couchbase.Lite.Query;

namespace Test
{
    class Program
    {
        static async Task Main(string[] args)
        {
            var database = new Database("mydb");
            var random = new Random();
// Create a new document (i.e. a record) in the database
            // for (int i = 0; i < 80000; i++)
            // {
            //        string id = null;
            //         using (var mutableDoc = new MutableDocument()) {
            //             mutableDoc
            //                 .SetInt("random", random.Next())
            //                 .SetFloat("version", 2.0f)
            //                 .SetString("type", "SDK");
            //
            //             // Save it to the database
            //             database.Save(mutableDoc);
            //             id = mutableDoc.Id;
            //         }
            // }
            //

// Create a query to fetch documents of type SDK
// i.e. SELECT * FROM database WHERE type = "SDK"
            Stopwatch stopWatch = new Stopwatch();
            stopWatch.Start();
            // using (var query = QueryBuilder.Select(SelectResult.All())
            //     .From(DataSource.Database(database))
            //     .Where(Expression.Property("random").GreaterThan(Expression.Int(1)))) {
            //     // Run the query
            //     var result = query.Execute();
            //     Console.WriteLine($"Number of rows :: {result.Count()}");
            // }

            var result = await NexusReader.FromPath("C:\\Users\\Gaetan\\Downloads\\tb-tools\\results\\phylogenetic_network.nexus");

            var clusters = result.NetworkVertices
                .Where(v => v.Key>1600)
                .GroupBy(v => (Math.Round(v.Value.Item1,4), Math.Round(v.Value.Item2,4)),v => v.Key)
                .Select(v => new{ Position = v.Key, Id = v.Max(), Merged = v.ToList() })
                .ToList();
            var idToNewId = clusters
                .SelectMany(v => v.Merged.Select(id => (previousId: id, newId: v.Id)))
                .Concat(Enumerable.Range(1, 1600).Select(v => (previousId: v, newId: v)))
                .ToDictionary(v => v.previousId, v => v.newId);
            
            var nodes = clusters.Select(v => v.Id).ToList();
            nodes.AddRange(Enumerable.Range(1, 1600).ToList());
            var edges = new List<(int, int)>();
            foreach (var (id,(firstNode, secondNode)) in result.NetworkEdges)
            {
                var newEdge = (idToNewId[firstNode], idToNewId[secondNode]);
                if( newEdge.Item1 != newEdge.Item2) edges.Add(newEdge);
            }

            edges = edges.Distinct().ToList();
            stopWatch.Stop();
            TimeSpan ts = stopWatch.Elapsed;
            
            // Format and display the TimeSpan value.
            string elapsedTime = String.Format("{0:00}:{1:00}:{2:00}.{3:00}",
                ts.Hours, ts.Minutes, ts.Seconds,
                ts.Milliseconds);
            Console.WriteLine("RunTime " + elapsedTime);
        }

        // static int[,] Alignment(string seq1, string seq2)
        // {
        //     /* Array initialization*/
        //     var m = new int[seq1.Length + 1, seq2.Length + 1];
        //     for (int i = 0; i < m.GetLength(0); i++) m[i, 0] = -i;
        //     for (int i = 0; i < m.GetLength(1); i++) m[0, i] = -i;
        //
        //     var match = 1;
        //     var mismatch = -1;
        //     var indel = -1;
        //
        //     for (int i = 1; i < m.GetLength(0); i++)
        //     {
        //         for (int j = 1; j < m.GetLength(1); j++)
        //         {
        //             var v1 = m[i - 1, j - 1] + (seq1[i - 1] == seq2[j - 1] ? match : mismatch);
        //             var v2 = indel + m[i - 1, j];
        //             var v3 = indel + m[i, j - 1];
        //             m[i, j] = Math.Max(v1, Math.Max(v2, v3));
        //         }
        //     }
        //
        //     return m;
        //     // for (int i = 0; i < m.GetLength(0); i++)
        //     // {
        //     //     for (int k = 0; k < m.GetLength(1); k++) {
        //     //         Console.Write(m[i,k].ToString().PadLeft(3));
        //     //     }
        //     //
        //     //     Console.WriteLine();
        //     // }
        // }
        //
        // static int[,] AlignmentParallel(string seq1, string seq2)
        // {
        //     /* Array initialization*/
        //     var m = new int[seq1.Length + 1, seq2.Length + 1];
        //     for (int i = 0; i < m.GetLength(0); i++) m[i, 0] = -i;
        //     for (int i = 0; i < m.GetLength(1); i++) m[0, i] = -i;
        //
        //     var match = 1;
        //     var mismatch = -1;
        //     var indel = -1;
        //
        //     for (int d = 1; d < m.GetLength(0); d++)
        //     {
        //         Parallel.Invoke(() =>
        //         {
        //             for (int j = 1; j < m.GetLength(1); j++)
        //             {
        //                 var v1 = m[d - 1, j - 1] + (seq1[d - 1] == seq2[j - 1] ? match : mismatch);
        //                 var v2 = indel + m[d - 1, j];
        //                 var v3 = indel + m[d, j - 1];
        //                 m[d, j] = Math.Max(v1, Math.Max(v2, v3));
        //             }
        //         }, () =>
        //         {
        //             for (int j = 1; j < m.GetLength(1); j++)
        //             {
        //                 var v1 = m[d - 1, j - 1] + (seq1[d - 1] == seq2[j - 1] ? match : mismatch);
        //                 var v2 = indel + m[d - 1, j];
        //                 var v3 = indel + m[d, j - 1];
        //                 m[d, j] = Math.Max(v1, Math.Max(v2, v3));
        //             }
        //         });
        //     }
        //
        //     return m;
        //     // for (int i = 0; i < m.GetLength(0); i++)
        //     // {
        //     //     for (int k = 0; k < m.GetLength(1); k++) {
        //     //         Console.Write(m[i,k].ToString().PadLeft(3));
        //     //     }
        //     //
        //     //     Console.WriteLine();
        //     // }
        // }
        //
        // static void Traceback(int[,] m, string seq1, string seq2)
        // {
        //     var nexti = m.GetLength(0) - 1;
        //     var nextj = m.GetLength(1) - 1;
        //     while (nexti > 0 && nextj > 0)
        //     {
        //         if (seq1[nexti - 1] == seq2[nextj - 1])
        //         {
        //             nexti--;
        //             nextj--;
        //             Console.WriteLine("Match");
        //         }
        //         else
        //         {
        //             var v1 = m[nexti - 1, nextj - 1];
        //             var v2 = m[nexti, nextj - 1];
        //             var v3 = m[nexti - 1, nextj];
        //             if (v1 > v2 && v1 > v3)
        //             {
        //                 Console.WriteLine("MISTMATCH");
        //                 nextj--;
        //                 nexti--;
        //             }
        //             else
        //             {
        //                 Console.WriteLine("GAP");
        //                 if (v2 > v3)
        //                     nextj--;
        //                 else
        //                     nexti--;
        //             }
        //         }
        //     }
        // }
        // private static Random random = new Random();
        // public static string RandomSequence(int length)
        // {
        //     const string chars = "TAGC";
        //     return new string(Enumerable.Repeat(chars, length)
        //         .Select(s => s[random.Next(s.Length)]).ToArray());
        // }
        // static async Task Main(string[] args)
        // {
        //     // Stopwatch stopWatch = new Stopwatch();
        //     // stopWatch.Start();
        //     // var gg = Alignment(RandomSequence(500), RandomSequence(500));
        //     // stopWatch.Stop();
        //     // // Console.WriteLine(v);
        //     // // Get the elapsed time as a TimeSpan value.
        //     // TimeSpan ts = stopWatch.Elapsed;
        //     //
        //     // // Format and display the TimeSpan value.
        //     // string elapsedTime = String.Format("{0:00}:{1:00}:{2:00}.{3:00}",
        //     //     ts.Hours, ts.Minutes, ts.Seconds,
        //     //     ts.Milliseconds);
        //     // Console.WriteLine("RunTime " + elapsedTime);
        //     // Traceback(gg, "GATTACA", "GCATGCU");
        //     // Console.WriteLine(Directory.GetCurrentDirectory());
        //     // var databases = new List<ISQLiteDatabaseProvider>
        //     // {
        //     //     new SQLiteDatabaseProvider("ncbi_info",
        //     //         new SQLiteOptions()
        //     //         {
        //     //             DBConfig = new SQLiteDBOptions()
        //     //                 {FileName = "ncbi_info", FilePath = Directory.GetCurrentDirectory()}
        //     //         })
        //     // };
        //     // var cache = new DefaultSQLiteCachingProvider("ncbi_info", databases,
        //     //     new SQLiteOptions());
        //     // FileStream text = File.OpenRead(@"runs.json");
        //     // var r = await JsonSerializer.DeserializeAsync<List<string>>(text);
        //     // var client = new NcbiClient(cache){AllowQuery = false};
        //     // // var list = new List<string>();
        //     // foreach (var id in r)
        //     // {
        //     //     var result = await client.FindRunByAccession(id);
        //     //     // Console.WriteLine(result?.Samples.First().RawAttributes.GetValueOrDefault("geographic location (country and/or sea)"));
        //     //     // Console.WriteLine(result?.Samples.First().RawAttributes.GetValueOrDefault("geo_loc_name"));
        //     //     if (!string.IsNullOrEmpty(result?.Samples.First().RawAttributes.GetValueOrDefault("host_disease")))
        //     //     {
        //     //         Console.WriteLine(result?.Samples.First().RawAttributes.GetValueOrDefault("host_disease"));
        //     //     }
        //     //     
        //     //     // list.AddRange(result?.Samples.First().RawAttributes.Keys.ToList() ?? new List<string>());
        //     // }
        //     //
        //     // // var gg = list
        //     // //     .GroupBy(v => v)
        //     // //     .OrderBy(v => v.Count())
        //     // //     .ToDictionary(v => v.Key, v => v.Count());
        //     // Console.WriteLine("");
        //
        //     var process =
        //         new BlastnClient(
        //             "C:\\Users\\Gaetan\\Desktop\\Nouveaudossier(7)\\CRISPRbuilder-TB\\bin\\windows\\blastn.exe",
        //             "test2", "C:\\Users\\Gaetan\\Desktop\\Nouveaudossier(7)\\CRISPRbuilder-TB\\bin\\windows");
        //     // // var e =  process.Execute(new BlastnOptions("test2",
        //     // //     "C:\\Users\\Gaetan\\Downloads\\tb-tools\\data\\fastas\\NC_000962.3_CDS.fasta"){DbPath = "C:\\Users\\Gaetan\\Desktop\\Nouveaudossier(7)\\CRISPRbuilder-TB\\bin\\windows"});
        //     // // await foreach (var v in e)
        //     // // {
        //     // //     Console.WriteLine("gg");
        //     // // }
        //     // Stopwatch stopWatch = new Stopwatch();
        //     // stopWatch.Start();
        //     // // var snps = await Snp.FromCsv(DataPath.GetDataPath("snp/koster.csv"));
        //     // // var v = await FastaReader.CreateAsync(DataPath.GetDataPath("references/H37Rv.fasta"));
        //     // // var report = new BlastnSnpReporter(process, v);
        //     // // var result = await report.SnpFrequency("NC_000962.3", snps);
        //     // //
        //     // // var reporter = new BlastnFrequencyReporter(process){MaxTargetSeqs = 15, Task = "megablast"};
        //     // // var v = await FastaReader.CreateAsync(DataPath.GetDataPath("genes/H37Rv.fasta"));
        //     // // var result = (await reporter.Frequency(v, "1e-20")).ToPresenceReport(5);
        //     //
        //     var reporter = new BlastnSequenceReporter(process){MaxTargetSeqs = 5000, Task = "blastn"};
        //     var v = await FastaReader.CreateAsync("C:\\Users\\Gaetan\\Downloads\\data\\data\\fastas\\spoligo_old.fasta");
        //     var result = (await reporter.Frequency(v, "1e-6")).ToPresenceReport(5).ToSquareString();
        //     //
        //     // // for (int i = 0; i < snps.Count; i++)
        //     // // {
        //     // //     if(result.GetPresence(i)) Console.WriteLine($"{snps[i].Position}");
        //     // // }
        //     // // var v = await FastaReader.CreateAsync(DataPath.GetDataPath("spol/spol43.fasta"));
        //     // var v = await FastaReader.CreateAsync("C:\\Users\\Gaetan\\Downloads\\tb-tools\\data\\fastas\\NC_000962.3_CDS.fasta");
        //     // // var v = await FastaReader.CreateAsync("C:\\Users\\Gaetan\\Downloads\\GRCh38_latest_genomic.fna\\GRCh38_latest_genomic.fna");
        //     // // var result = await v.ReadSequenceAsync(">lcl|NC_000962.3_cds_NP_214515.1_1");
        //     // // var result3 = await v.ReadSequenceAsync(">lcl|NC_000962.3_cds_NP_218441.1_3906");
        //     // stopWatch.Stop();
        //     // // Console.WriteLine(v);
        //     // // Get the elapsed time as a TimeSpan value.
        //     // TimeSpan ts = stopWatch.Elapsed;
        //     //
        //     // // Format and display the TimeSpan value.
        //     // string elapsedTime = String.Format("{0:00}:{1:00}:{2:00}.{3:00}",
        //     //     ts.Hours, ts.Minutes, ts.Seconds,
        //     //     ts.Milliseconds);
        //     // Console.WriteLine("RunTime " + elapsedTime);
        //     // // Console.WriteLine(string.Join(',',v.Identifiers.Take(10).ToList()));
        //     //
        //     // // var session = new Session(); 
        //     // // var folder = session.CreateFolder();
        //     // // var dbFolder = folder.CreateFolder("db");
        //     // //
        //     // // var process =
        //     // //     new BlastMakeClient(
        //     // //         "C:\\Users\\Gaetan\\Desktop\\Nouveaudossier(7)\\CRISPRbuilder-TB\\bin\\windows\\makeblastdb.exe");
        //     // // await process.execute(new BlastMakeClient.BlastMakeOptions("test4", "nucl",
        //     // //     "C:\\Users\\Gaetan\\Desktop\\Nouveaudossier(7)\\CRISPRbuilder-TB\\sequences\\SRR1173284.fasta"){DbPath = dbFolder.AbsolutePath});
        // }
    }
}