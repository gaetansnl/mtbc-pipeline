
using System;
using System.Threading.Tasks;
using Core.Doi;
using Core.Ncbi;
using EasyCaching.Core;
using EasyCaching.LiteDB;
using Indexer.Data;
using Indexer.Utils;
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
                option.UseLiteDB(c =>
                {
                    c.DBConfig = new LiteDBDBOptions
                    {
                        FileName = "ncbi.db"
                    };
                }, "ncbi");
            });
            IServiceProvider serviceProvider = services.BuildServiceProvider();
            var factory = serviceProvider.GetService<IEasyCachingProviderFactory>();
            
            var doiClient = new DoiClient(factory.GetCachingProvider("doi"));
            var ncbiClient = new NcbiClient(factory.GetCachingProvider("ncbi"));
            ncbiClient.AllowQuery = true;
            var config = Configuration.FromYaml("C:\\Users\\Gaetan\\RiderProjects\\API\\Web\\Data\\config.yaml");
            var db = new LiteDatabase("db");
            var driver = new LiteDbDriver(db);
            var countryHelper = new CountryCodeHelper();
            
            // var snpIndexer = new SnpIndexer(config, driver, doiClient);
            // await snpIndexer.Index();
            //
            // var geneIndexer = new FastaGeneIndexer(driver, "NC_000962.3", "C:\\Users\\Gaetan\\RiderProjects\\API\\Web\\Data\\genes\\H37Rv.fasta");
            // await geneIndexer.Index();
            
            var strainIndexer = new StrainIndexer(config, driver, ncbiClient,countryHelper, doiClient);
            await strainIndexer.Index();


            Console.WriteLine("gg");
        }
    }
}