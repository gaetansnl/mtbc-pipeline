using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using AutoMapper;
using Grpc.Core;
using Indexer;
using Indexer.Search;
using Microsoft.Extensions.Logging;
using Web.Utils;

namespace Web.Services
{
    public class ApiService : Api.ApiBase
    {
        private readonly ILogger<ApiService> _logger;
        private readonly IMapper _mapper;
        private readonly LiteDbDriver _driver;
        private readonly NexusGraph _graph;
        private HashSet<int>? DisplayedNodes = null;

        public ApiService(ILogger<ApiService> logger, IMapper mapper, LiteDbDriver driver, NexusGraph graph)
        {
            _logger = logger;
            _mapper = mapper;
            _driver = driver;
            _graph = graph;
        }

        public override async Task<HelloReply> SayHello(HelloRequest request, ServerCallContext context)
        {
            if (DisplayedNodes == null)
            {
                var allAccession = new HashSet<string>(await _driver.ListResultAccession());
                DisplayedNodes = _graph.Reader.Vertices.Where(v => allAccession.Contains(v.Value)).Select(v => v.Key).ToHashSet();
            }
            var response = new HelloReply();
            response.Graph = _graph.GetSimplifiedGraph(request.ClusteringLevel, v => DisplayedNodes.Contains(v));

            return response;
        }

        public override async Task<ListSnpReply> ListSnp(ListSnpRequest request, ServerCallContext context)
        {
            var list = await _driver.ListSnp();
            ListSnpReply reply = new();
            reply.Snps.AddRange(_mapper.Map<IEnumerable<Snp>>(list));
            return reply;
        }

        public override async Task<GetStrainReply> GetStrain(GetStrainRequest request, ServerCallContext context)
        {
            var result = await _driver.GetResult(request.Id);
            GetStrainReply reply = new();
            reply.Result = _mapper.Map<StrainResult>(result);
            return reply;
        }
        
        public override async Task<CompareStrainReply> CompareStrains(CompareStrainRequest request, ServerCallContext context)
        {
            var result = await _driver.Compare(request.Ids.ToList());
            return _mapper.Map<CompareStrainReply>(result);
        }
        
        public override async Task<SearchReply> Search(SearchRequest request, ServerCallContext context)
        {
            var condition = _mapper.Map<Condition>(request.Condition);
            var results = await _driver.Search(condition);
            var response =  new SearchReply();
            response.Ids.AddRange(results);
            return response;
        }
    }
}