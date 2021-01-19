using System;
using System.Diagnostics;
using System.Threading.Tasks;
using Core;
using Core.Blast;
using Core.Fasta;
using MTBC;
using MTBC.Annotation;

namespace Test
{
    class Program
    {
        static async Task Main(string[] args)
        {
            // Console.WriteLine(Directory.GetCurrentDirectory());
            // var databases = new List<ISQLiteDatabaseProvider>
            // {
            //     new SQLiteDatabaseProvider("ncbi_info",
            //         new SQLiteOptions()
            //         {
            //             DBConfig = new SQLiteDBOptions()
            //                 {FileName = "ncbi_info", FilePath = Directory.GetCurrentDirectory()}
            //         })
            // };
            // var cache = new DefaultSQLiteCachingProvider("ncbi_info", databases,
            //     new SQLiteOptions());
            // FileStream text = File.OpenRead(@"runs.json");
            // var r = await JsonSerializer.DeserializeAsync<List<string>>(text);
            // var client = new NcbiClient(cache){AllowQuery = false};
            // // var list = new List<string>();
            // foreach (var id in r)
            // {
            //     var result = await client.FindRunByAccession(id);
            //     // Console.WriteLine(result?.Samples.First().RawAttributes.GetValueOrDefault("geographic location (country and/or sea)"));
            //     // Console.WriteLine(result?.Samples.First().RawAttributes.GetValueOrDefault("geo_loc_name"));
            //     if (!string.IsNullOrEmpty(result?.Samples.First().RawAttributes.GetValueOrDefault("host_disease")))
            //     {
            //         Console.WriteLine(result?.Samples.First().RawAttributes.GetValueOrDefault("host_disease"));
            //     }
            //     
            //     // list.AddRange(result?.Samples.First().RawAttributes.Keys.ToList() ?? new List<string>());
            // }
            //
            // // var gg = list
            // //     .GroupBy(v => v)
            // //     .OrderBy(v => v.Count())
            // //     .ToDictionary(v => v.Key, v => v.Count());
            // Console.WriteLine("");

            var process =
                new BlastnClient(
                    "C:\\Users\\Gaetan\\Desktop\\Nouveaudossier(7)\\CRISPRbuilder-TB\\bin\\windows\\blastn.exe",
                    "test2", "C:\\Users\\Gaetan\\Desktop\\Nouveaudossier(7)\\CRISPRbuilder-TB\\bin\\windows");
            // var e =  process.Execute(new BlastnOptions("test2",
            //     "C:\\Users\\Gaetan\\Downloads\\tb-tools\\data\\fastas\\NC_000962.3_CDS.fasta"){DbPath = "C:\\Users\\Gaetan\\Desktop\\Nouveaudossier(7)\\CRISPRbuilder-TB\\bin\\windows"});
            // await foreach (var v in e)
            // {
            //     Console.WriteLine("gg");
            // }
            Stopwatch stopWatch = new Stopwatch();
            stopWatch.Start();
            var snps = await Snp.FromCsv(DataPath.GetDataPath("snp/koster.csv"));
            var v = await FastaReader.CreateAsync(DataPath.GetDataPath("references/H37Rv.fasta"));
            var report = new BlastnSnpReporter(process, v);
            var result = await report.SnpFrequency("NC_000962.3", snps);
            //
            // var reporter = new BlastnFrequencyReporter(process){MaxTargetSeqs = 15, Task = "megablast"};
            // var v = await FastaReader.CreateAsync(DataPath.GetDataPath("genes/H37Rv.fasta"));
            // var result = (await reporter.Frequency(v, "1e-20")).ToPresenceReport(5);
            
            // var reporter = new BlastnFrequencyReporter(process){MaxTargetSeqs = 500, Task = "blastn"};
            // var v = await FastaReader.CreateAsync(DataPath.GetDataPath("spol/spol43.fasta"));
            // var result = await reporter.Frequency(v, "1e-2");
            
            // for (int i = 0; i < snps.Count; i++)
            // {
            //     if(result.GetPresence(i)) Console.WriteLine($"{snps[i].Position}");
            // }
            // var v = await FastaReader.CreateAsync(DataPath.GetDataPath("spol/spol43.fasta"));
            // var v = await FastaReader.CreateAsync("C:\\Users\\Gaetan\\Downloads\\tb-tools\\data\\fastas\\NC_000962.3_CDS.fasta");
            // var v = await FastaReader.CreateAsync("C:\\Users\\Gaetan\\Downloads\\GRCh38_latest_genomic.fna\\GRCh38_latest_genomic.fna");
            // var result = await v.ReadSequenceAsync(">lcl|NC_000962.3_cds_NP_214515.1_1");
            // var result3 = await v.ReadSequenceAsync(">lcl|NC_000962.3_cds_NP_218441.1_3906");
            stopWatch.Stop();
            // Console.WriteLine(v);
            // Get the elapsed time as a TimeSpan value.
            TimeSpan ts = stopWatch.Elapsed;

            // Format and display the TimeSpan value.
            string elapsedTime = String.Format("{0:00}:{1:00}:{2:00}.{3:00}",
                ts.Hours, ts.Minutes, ts.Seconds,
                ts.Milliseconds);
            Console.WriteLine("RunTime " + elapsedTime);
            // Console.WriteLine(string.Join(',',v.Identifiers.Take(10).ToList()));

            // var session = new Session(); 
            // var folder = session.CreateFolder();
            // var dbFolder = folder.CreateFolder("db");
            //
            // var process =
            //     new BlastMakeClient(
            //         "C:\\Users\\Gaetan\\Desktop\\Nouveaudossier(7)\\CRISPRbuilder-TB\\bin\\windows\\makeblastdb.exe");
            // await process.execute(new BlastMakeClient.BlastMakeOptions("test4", "nucl",
            //     "C:\\Users\\Gaetan\\Desktop\\Nouveaudossier(7)\\CRISPRbuilder-TB\\sequences\\SRR1173284.fasta"){DbPath = dbFolder.AbsolutePath});
        }
    }
}