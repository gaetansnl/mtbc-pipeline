using System;
using System.Linq;
using System.Net.Http;
using System.Threading.Tasks;
using System.Xml;
using EasyCaching.Core;

namespace Core.Ncbi
{
    public class NcbiClient
    {
        private readonly HttpClient _httpClient = new();

        private readonly IEasyCachingProvider _cache;

        private const string ApiUrl =
            "https://trace.ncbi.nlm.nih.gov/Traces/sra/sra.cgi?save=efetch&db=sra&rettype=native&term=";

        public bool AllowQuery { get; set; }

        public NcbiClient(IEasyCachingProvider cache)
        {
            _cache = cache;
        }

        protected NcbiRun? _runFromDoc(XmlDocument doc, string accession)
        {
            XmlNode? runNode = doc.DocumentElement?.SelectSingleNode($"//RUN[@accession='{accession}']");
            if (runNode == null) return null;

            var run = new NcbiRun();
            run.Accession = runNode.Attributes?["accession"]?.Value;
            run.TotalSpots = NcbiParserUtils.ToNullableInt(runNode.Attributes?["total_spots"]?.Value);
            run.TotalBases = NcbiParserUtils.ToNullableInt(runNode.Attributes?["total_bases"]?.Value);
            run.Size = NcbiParserUtils.ToNullableInt(runNode.Attributes?["size"]?.Value);
            run.PublishedAt = NcbiParserUtils.ToNullableDate(runNode.Attributes?["published"]?.Value);
            run.Title = runNode.SelectSingleNode("TITLE")?.InnerText;
            run.DownloadUrl = runNode
                .SelectSingleNode("//SRAFile[@sratoolkit='1']/Alternatives[@access_type='anonymous']/@url")?.InnerText;

            string? experimentId = runNode.SelectSingleNode("EXPERIMENT_REF")?.Attributes?["accession"]?.Value;
            if (experimentId != null) run.Experiment = _experimentFromDoc(doc, experimentId);

            var memberNodes = runNode.SelectNodes("Pool/Member");
            if (memberNodes != null)
            {
                var sampleAccessions = memberNodes.Cast<XmlNode>().Select(node => node.Attributes?["accession"]?.Value)
                    .OfType<string>()
                    .ToList();
                run.Samples = sampleAccessions.Select(id => _sampleFromDoc(doc, id)).OfType<NcbiSample>().ToList();
            }


            return run;
        }

        protected NcbiExperiment? _experimentFromDoc(XmlDocument doc, string accession)
        {
            XmlNode? experimentNode = doc.DocumentElement?.SelectSingleNode($"//EXPERIMENT[@accession='{accession}']");
            if (experimentNode == null) return null;

            var experiment = new NcbiExperiment();
            experiment.Accession = experimentNode.Attributes?["accession"]?.Value;
            experiment.Title = experimentNode.SelectSingleNode("TITLE")?.InnerText;
            experiment.CenterName = experimentNode.Attributes?["center_name"]?.Value;

            string? studyId = experimentNode.SelectSingleNode("STUDY_REF")?.Attributes?["accession"]?.Value;
            if (studyId != null) experiment.Study = _studyFromDoc(doc, studyId);

            return experiment;
        }

        protected NcbiStudy? _studyFromDoc(XmlDocument doc, string accession)
        {
            XmlNode? studyNode = doc.DocumentElement?.SelectSingleNode($"//STUDY[@accession='{accession}']");
            if (studyNode == null) return null;

            var study = new NcbiStudy();
            study.Accession = studyNode.Attributes?["accession"]?.Value;
            study.CenterName = studyNode.Attributes?["center_name"]?.Value;
            study.Alias = studyNode.Attributes?["alias"]?.Value;
            study.Title = studyNode.SelectSingleNode("DESCRIPTOR/STUDY_TITLE")?.InnerText;
            study.Abstract = studyNode.SelectSingleNode("DESCRIPTOR/STUDY_ABSTRACT")?.InnerText;
            study.ProjectName = studyNode.SelectSingleNode("DESCRIPTOR/CENTER_PROJECT_NAME")?.InnerText;

            return study;
        }

        protected NcbiSample? _sampleFromDoc(XmlDocument doc, string accession)
        {
            XmlNode? sampleNode = doc.DocumentElement?.SelectSingleNode($"//SAMPLE[@accession='{accession}']");
            if (sampleNode == null) return null;

            var sample = new NcbiSample();
            sample.Accession = sampleNode.Attributes?["accession"]?.Value;
            sample.Title = sampleNode.SelectSingleNode("TITLE")?.InnerText;
            sample.TaxonId = sampleNode.SelectSingleNode("SAMPLE_NAME/TAXON_ID")?.InnerText;
            sample.ScientificName = sampleNode.SelectSingleNode("SAMPLE_NAME/SCIENTIFIC_NAME")?.InnerText;

            var attributeNodes = sampleNode.SelectNodes("SAMPLE_ATTRIBUTES/SAMPLE_ATTRIBUTE");
            if (attributeNodes != null)
            {
                sample.RawAttributes = attributeNodes.Cast<XmlNode>()
                    .Where(n => n.SelectSingleNode("TAG") != null)
                    .ToDictionary(
                        n => n.SelectSingleNode("TAG")?.InnerText ?? "",
                        n => n.SelectSingleNode("VALUE")?.InnerText ?? "");
            }

            return sample;
        }

        protected async Task<string> _cachedExperimentPackage(string accession)
        {
            var cached = await _cache.GetAsync<string>(accession);
            if (cached.HasValue) return cached.Value;
            if (!AllowQuery) throw new Exception("Query is disabled");
            var response = await _httpClient.GetAsync($"{ApiUrl}{accession}");
            var data = await response.Content.ReadAsStringAsync();
            await _cache.SetAsync(accession, data, TimeSpan.FromDays(365));
            return data;
        }

        public async Task<NcbiRun?> FindRunByAccession(string accession)
        {
            var data = await _cachedExperimentPackage(accession);
            XmlDocument doc = new();
            doc.LoadXml(data);
            return _runFromDoc(doc, accession);
        }
    }
}