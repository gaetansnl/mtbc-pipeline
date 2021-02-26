
using System;
using System.Threading.Tasks;
using Core.Doi;
using EasyCaching.Core;
using EasyCaching.LiteDB;
using Indexer.Data;
using LiteDB;
using Microsoft.Extensions.DependencyInjection;
using MTBC.Configuration;

namespace Indexer
{
    class Program
    {
        static async Task Main(string[] args)
        {
            
            IServiceCollection services = new ServiceCollection();
            services.AddEasyCaching(option =>
            {
                option.UseLiteDB(c =>
                {
                    c.DBConfig = new LiteDBDBOptions
                    {
                        FileName = "doi.db"
                    };
                }, "doi");
            });
            IServiceProvider serviceProvider = services.BuildServiceProvider();
            var factory = serviceProvider.GetService<IEasyCachingProviderFactory>();
            
            var doiClient = new DoiClient(factory.GetCachingProvider("doi"));
            var config = Configuration.FromYaml("C:\\Users\\Gaetan\\RiderProjects\\API\\Web\\Data\\config.yaml");
            var db = new LiteDatabase("db");
            var driver = new LiteDbDriver(db);
            
            // var snpIndexer = new SnpIndexer(config, driver, doiClient);
            // await snpIndexer.Index();
            //
            // var geneIndexer = new FastaGeneIndexer(driver, "NC_000962.3", "C:\\Users\\Gaetan\\RiderProjects\\API\\Web\\Data\\genes\\H37Rv.fasta");
            // await geneIndexer.Index();
            //
            var strainIndexer = new StrainIndexer(config, driver);
            await strainIndexer.Index();


            Console.WriteLine("gg");
        }
    }
}