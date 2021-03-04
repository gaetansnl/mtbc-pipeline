using System.Collections.Generic;
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

        public ApiService(ILogger<ApiService> logger, IMapper mapper, LiteDbDriver driver, NexusGraph graph)
        {
            _logger = logger;
            _mapper = mapper;
            _driver = driver;
            _graph = graph;
        }

        public override async Task<HelloReply> SayHello(HelloRequest request, ServerCallContext context)
        {
            var response = new HelloReply();
            response.Graph = _graph.GetSimplifiedGraph(request.ClusteringLevel, v => v < 1600);

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