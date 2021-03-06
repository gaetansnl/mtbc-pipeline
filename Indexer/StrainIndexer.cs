﻿using System;
using System.Collections;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Text.Json;
using System.Threading;
using System.Threading.Tasks;
using Core.Doi;
using Core.Ncbi;
using Indexer.Data;
using Indexer.Utils;
using MoreLinq;
using MTBC.Configuration;

namespace Indexer
{
    public class StrainIndexer
    {
        protected Configuration Config;
        protected LiteDbDriver Database;
        protected NcbiClient NcbiClient;
        protected CountryCodeHelper CountryCodeHelper;
        protected DoiClient DoiClient;

        public StrainIndexer(Configuration config, LiteDbDriver database, NcbiClient ncbiClient,
            CountryCodeHelper countryCodeHelper, DoiClient doiClient)
        {
            Config = config;
            Database = database;
            NcbiClient = ncbiClient;
            CountryCodeHelper = countryCodeHelper;
            DoiClient = doiClient;
        }

        public List<bool> RealSpol98(EnrichedAnalysisData data)
        {
            List<bool> result = Enumerable.Repeat(false, 98).ToList();
            foreach (var part in data.Crispr)
            {
                if (part.Spacer == null || part.Spacer.Id > 98) continue;
                result[part.Spacer.Id - 1] = true;
            }

            return result;
        }

        public List<bool> RealSpol43(EnrichedAnalysisData data)
        {
            List<bool> spol98 = RealSpol98(data);
            List<bool> result = Enumerable.Repeat(false, 43).ToList();
            int[] positions =
            {
                2, 3, 4, 12, 13, 14, 15, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37,
                38, 39, 40, 41, 42, 43, 44, 46, 47, 51, 52, 53, 62, 63, 64, 65
            };
            for (int i = 0; i < 43; i++)
            {
                result[i] = spol98[positions[i] - 1];
            }

            return result;
        }

        public async Task Index()
        {
            if (Config.AnalysisResultPath == null) return;
            var path = Config.ResolvePath(Config.AnalysisResultPath);
            var files = Directory.GetFiles(path);
            foreach (var file in files)
            {
                using FileStream openStream = File.OpenRead(file);
                var result = await JsonSerializer.DeserializeAsync<EnrichedAnalysisData>(openStream,
                    new JsonSerializerOptions {PropertyNamingPolicy = JsonNamingPolicy.CamelCase});

                if (result == null)
                {
                    throw new Exception("Can't parse");
                }

                result.Snp = (await Database.ListSnpById(result.SnpSpdi)).OrderBy(v => v.Position).ToList();
                if (result.Snp.Count != result.SnpSpdi.Count) throw new Exception("Snp not found");
                result.SnpWithoutAnnotation =
                    result.Snp.Select(v => v with {Annotations = new List<SnpData.Annotation>()}).ToList();
                result.MissingGenes = (await Database.ListGenesByLocus(result.MissingGeneTags)).OrderBy(v => v.LocusTag)
                    .ToList();
                if (result.MissingGeneTags.Count != result.MissingGenes.Count) throw new Exception("Gene not found");

                foreach (var crisprPart in result.Crispr)
                {
                    if (crisprPart?.Gene?.Name != null)
                    {
                        crisprPart.Gene.Gene = await Database.GetGeneByLocus(crisprPart.Gene.Name);
                    }
                }

                result.Spoligotype43Crispr = RealSpol43(result);
                result.Spoligotype98Crispr = RealSpol98(result);
                result.InsertionSequenceTuples = result.InsertionSequences
                    .SelectMany(x => x.Positions.Select(y => new Tuple<string, int>(x.Name, y.Position))).ToList();
                result.Run = await NcbiClient.FindRunByAccession(result.Id);

                var coordinates = result.Run?.Samples[0]?.Coordinates;

                result.CountryCode = CountryCodeHelper.LookupCountryCode(
                    result.Run?.Samples[0]?.Location,
                    coordinates.HasValue ? (long) coordinates?.Latitude : null,
                    coordinates.HasValue ? (long) coordinates?.Longitude : null);
                result.Country = result.CountryCode != null
                    ? ISO3166.Country.List.FirstOrDefault(v => v.TwoLetterCode == result.CountryCode)?.Name
                    : null;

                foreach (var lineage in result.Lineages)
                {
                    var info = Config.Lineages.FirstOrDefault(v => v.Key == lineage.Key);
                    if (info == null) continue;
                    lineage.Name = info.Name;
                    lineage.Study = await DoiClient.GetCitation(info.Doi);
                }

                Console.WriteLine($"Enriched {file}");
                await Database.Index(result);
            }
        }
    }
}