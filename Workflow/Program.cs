using System;
using System.Collections.Generic;
using System.IO;
using System.Threading.Tasks;
using Core.Blast;
using Core.Ncbi;
using EasyCaching.SQLite;
using Microsoft.Extensions.DependencyInjection;
using Workflow.Workflow;
using WorkflowCore.Interface;
using WorkflowCore.Models;

namespace Workflow
{
    class Program
    {

        private static void Host_OnStepError(WorkflowInstance workflow, WorkflowStep step, Exception exception)
        {
            Console.WriteLine(exception);
        }


        static async Task Main(string[] args)
        {
            var blastMake =
                new BlastMakeClient(
                    "C:\\Users\\Gaetan\\Desktop\\Nouveaudossier(7)\\CRISPRbuilder-TB\\bin\\windows\\makeblastdb.exe");
            var fastqDumpClient =
                new FastqDumpClient(
                    "C:\\Users\\Gaetan\\Desktop\\Nouveaudossier(7)\\CRISPRbuilder-TB\\bin\\windows\\fastq-dump.exe");
            var databases = new List<ISQLiteDatabaseProvider>
            {
                new SQLiteDatabaseProvider("ncbi_info",
                    new SQLiteOptions()
                    {
                        DBConfig = new SQLiteDBOptions()
                            {FileName = "ncbi_info", FilePath = Directory.GetCurrentDirectory()}
                    })
            };
            var cache = new DefaultSQLiteCachingProvider("ncbi_info", databases,
                new SQLiteOptions());
            
            var serviceProvider = ConfigureServices();

            //start the workflow host
            var host = serviceProvider.GetService<IWorkflowHost>();
            host.OnStepError += Host_OnStepError;
            host.RegisterWorkflow<Test, Data>();
            host.Start();

            Console.WriteLine("Starting workflow...");
            var workflowId = await host.StartWorkflow("test", new Data(){BlastClient = blastMake, Ncbi = new NcbiClient(cache), FastqDumpClient = fastqDumpClient});

            Console.ReadLine();
            host.Stop();
        }

        private static IServiceProvider ConfigureServices()
        {
            //setup dependency injection
            IServiceCollection services = new ServiceCollection();
            services.AddLogging();
            services.AddWorkflow();
            //services.AddWorkflow(x => x.UseMongoDB(@"mongodb://localhost:27017", "workflow"));
            //services.AddWorkflow(x => x.UseSqlServer(@"Server=.;Database=WorkflowCore;Trusted_Connection=True;", true, true));
            //services.AddWorkflow(x => x.UsePostgreSQL(@"Server=127.0.0.1;Port=5432;Database=workflow;User Id=postgres;", true, true));

            var serviceProvider = services.BuildServiceProvider();                        
            return serviceProvider;
        }
    }
}