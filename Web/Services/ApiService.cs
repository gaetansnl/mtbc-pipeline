using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using AutoMapper;
using Core;
using Core.Doi;
using Google.Protobuf.Collections;
using Grpc.Core;
using Indexer;
using Indexer.Data;
using LiteDB;
using Microsoft.Extensions.Logging;

namespace Web.Services
{
    public class ApiService : Api.ApiBase
    {
        private readonly ILogger<ApiService> _logger;

        public ApiService(ILogger<ApiService> logger)
        {
            _logger = logger;
        }

        private static NexusReader? _gg;

        public override async Task<HelloReply> SayHello(HelloRequest request, ServerCallContext context)
        {
            if (_gg == null)
            {
                _gg = await NexusReader.FromPath(
                    "C:\\Users\\Gaetan\\Downloads\\tb-tools\\results\\phylogenetic_network.nexus");
            }

            var response = new HelloReply();
            response.Graph = new Graph();

            var clusters = _gg.NetworkVertices
                .Where(v => v.Key > 1600)
                .GroupBy(
                    v => (Math.Round(v.Value.Item1 / request.ClusteringLevel) * request.ClusteringLevel,
                        Math.Round(v.Value.Item2 / request.ClusteringLevel) * request.ClusteringLevel), v => v.Key)
                .Select(v => new
                {
                    Position = v.Key,
                    Id = v.Max(),
                    Merged = v.ToList(),
                    Average = (v.Select(id => _gg.NetworkVertices[id].Item1).Average(),
                        v.Select(id => _gg.NetworkVertices[id].Item2).Average())
                })
                .ToList();
            var idToNewId = clusters
                .SelectMany(v => v.Merged.Select(id => (previousId: id, newId: v.Id)))
                .Concat(Enumerable.Range(1, 1600).Select(v => (previousId: v, newId: v)))
                .ToDictionary(v => v.previousId, v => v.newId);
            var idToPosition = clusters
                .ToDictionary(v => v.Id, v => v.Average);

            var nodes = clusters.Select(v => v.Id).ToList();
            nodes.AddRange(Enumerable.Range(1, 1600).ToList());
            var edges = new List<(int, int)>();
            foreach (var (id, (firstNode, secondNode)) in _gg.NetworkEdges)
            {
                var newEdge = (Math.Min(idToNewId[firstNode], idToNewId[secondNode]),
                    Math.Max(idToNewId[firstNode], idToNewId[secondNode]));
                if (newEdge.Item1 != newEdge.Item2) edges.Add(newEdge);
            }

            edges = edges.Distinct().ToList();

            foreach (var id in nodes)
            {
                var position = idToPosition.ContainsKey(id) ? idToPosition[id] : _gg.NetworkVertices[id];
                response.Graph.Nodes.Add(new Node()
                {
                    Id = id, Name = _gg.Vertices.GetValueOrDefault(id, "VIRTUAL"), PositionX = position.Item1,
                    PositionY = position.Item2
                });
            }

            var i = 1;
            foreach (var edge in edges)
            {
                response.Graph.Edges.Add(new Edge() {Id = i, FirstNode = edge.Item1, SecondNode = edge.Item2});
                i++;
            }

            return response;
        }

        private static LiteDatabase db =
            new LiteDatabase(@"C:\Users\Gaetan\RiderProjects\API\Indexer\bin\Debug\net5.0\db");

        public override async Task<ListSnpReply> ListSnp(ListSnpRequest request, ServerCallContext context)
        {
            var driver = new LiteDbDriver(db);
            var list = await driver.ListSnp();

            var configuration = new MapperConfiguration(cfg =>
            {
                cfg.CreateMap<SnpData, Snp>(MemberList.None);
                cfg.CreateMap<DoiCitation, Study>(MemberList.None);
                cfg.CreateMap<DoiCitation.Author, Author>(MemberList.None);
                cfg.CreateMap<SnpData.Annotation, SnpAnnotation>(MemberList.None);
                cfg.ForAllPropertyMaps(
                    map => map.DestinationType.IsGenericType &&
                           map.DestinationType.GetGenericTypeDefinition() == typeof(RepeatedField<>),
                    (map, options) => options.UseDestinationValue());
            });
            configuration.AssertConfigurationIsValid();
            var mapper = configuration.CreateMapper();
            var gg = mapper.Map<IEnumerable<Snp>>(list);
            ListSnpReply reply = new();
            reply.Snps.AddRange(gg);
            return reply;
        }

        public override async Task<GetStrainReply> GetStrain(GetStrainRequest request, ServerCallContext context)
        {
            var driver = new LiteDbDriver(db);
            var result = await driver.GetResult(request.Id);

            var configuration = new MapperConfiguration(cfg =>
            {
                cfg.CreateMap<SnpData, Snp>(MemberList.None);
                cfg.CreateMap<DoiCitation, Study>(MemberList.None);
                cfg.CreateMap<DoiCitation.Author, Author>(MemberList.None);
                cfg.CreateMap<SnpData.Annotation, SnpAnnotation>(MemberList.None);
                cfg.CreateMap<AnalysisData, StrainResult>(MemberList.None);
                cfg.CreateMap<AnalysisData.InsertionSequence, InsertionSequence>(MemberList.None);
                cfg.CreateMap<AnalysisData.InsertionSequence.PrefixedPosition, InsertionSequencePosition>(MemberList
                    .None);
                // Fix problem with oneof
                cfg.CreateMap<CrisprPartData, CrisprPart>(MemberList.None).ForAllMembers(opts =>
                    opts.Condition((src, dest, srcMember) => srcMember != null));
                cfg.CreateMap<CrisprPartData.SequencePart, SequenceCrisprPart>(MemberList.None);
                cfg.CreateMap<CrisprPartData.SpacerPart, SpacerCrisprPart>(MemberList.None);
                cfg.CreateMap<CrisprPartData.DirectRepeatPart, DirectRepeatCrisprPart>(MemberList.None);
                cfg.CreateMap<CrisprPartData.InsertionSequencePart, InsertionSequenceCrisprPart>(MemberList.None);
                cfg.CreateMap<CrisprPartData.NamedSequencePart, NamedSequenceCrisprPart>(MemberList.None);
                cfg.CreateMap<CrisprPartData.SequenceRange, Range>(MemberList.None);
                cfg.CreateMap<CrisprPartData.GenePart, GeneCrisprPart>(MemberList.None);
                cfg.CreateMap<GeneData, Gene>(MemberList.None);
                cfg.ForAllPropertyMaps(
                    map => map.DestinationType.IsGenericType &&
                           map.DestinationType.GetGenericTypeDefinition() == typeof(RepeatedField<>),
                    (map, options) => options.UseDestinationValue());
            });
            configuration.AssertConfigurationIsValid();
            var mapper = configuration.CreateMapper();
            var gg = mapper.Map<StrainResult>(result);
            GetStrainReply reply = new();
            reply.Result = gg;
            return reply;
        }
    }
}