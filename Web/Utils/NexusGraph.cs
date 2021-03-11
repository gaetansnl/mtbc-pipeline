using System;
using System.Collections.Generic;
using System.Diagnostics;
using System.Linq;
using System.Threading.Tasks;
using Core;
using Microsoft.Extensions.Logging;

namespace Web.Utils
{
    public class NexusGraph
    {
        public readonly string Path;
        public NexusReader? Reader;
        private readonly ILogger<NexusGraph> _logger;


        public NexusGraph(string path, ILogger<NexusGraph> logger)
        {
            Path = path;
            _logger = logger;
        }

        public async Task InitAsync()
        {
            if (Reader != null) throw new Exception("Already initialized");
            Reader = await NexusReader.FromPath(
                Path);
        }

        protected double Round(double value, double precision)
        {
            return Math.Round(value / precision) * precision;
        }

        public Graph GetSimplifiedGraph(double clusteringLevel, Func<int, bool> keepNode)
        {
            if (Reader == null) throw new Exception("Not initialized");

            Stopwatch stopWatch = new();
            stopWatch.Start();

            List<int> ignoredNodes = Reader.NetworkVertices.Keys.Where(v => keepNode(v)).ToList();
            var graph = new Graph();

            var clusters = Reader.NetworkVertices
                .Where(v => !keepNode(v.Key))
                .GroupBy(
                    v => (
                        Round(v.Value.Item1, clusteringLevel),
                        Round(v.Value.Item2, clusteringLevel)), v => v.Key
                )
                .Select(v => new
                {
                    Position = v.Key,
                    Id = v.Max(),
                    Merged = v.ToList(),
                    Average = (
                        v.Select(id => Reader.NetworkVertices[id].Item1).Average(),
                        v.Select(id => Reader.NetworkVertices[id].Item2).Average()
                    )
                })
                .ToList();

            var idToNewId = clusters
                .SelectMany(v => v.Merged.Select(id => (previousId: id, newId: v.Id)))
                .Concat(ignoredNodes.Select(v => (previousId: v, newId: v)))
                .ToDictionary(v => v.previousId, v => v.newId);
            var idToPosition = clusters
                .ToDictionary(v => v.Id, v => v.Average);

            var nodes = clusters.Select(v => v.Id).ToList();
            nodes.AddRange(ignoredNodes);
            var edges = new List<(int, int)>();
            foreach (var (id, (firstNode, secondNode)) in Reader.NetworkEdges)
            {
                var newEdge = (Math.Min(idToNewId[firstNode], idToNewId[secondNode]),
                    Math.Max(idToNewId[firstNode], idToNewId[secondNode]));
                if (newEdge.Item1 != newEdge.Item2) edges.Add(newEdge);
            }

            edges = edges.Distinct().ToList();
            foreach (var id in nodes)
            {
                var position = idToPosition.ContainsKey(id) ? idToPosition[id] : Reader.NetworkVertices[id];
                graph.Nodes.Add(new Node
                {
                    Id = id, Name = keepNode(id) ? Reader.Vertices.GetValueOrDefault(id, "VIRTUAL") : "VIRTUAL",
                    PositionX = position.Item1,
                    PositionY = position.Item2
                });
            }

            var i = 1;
            foreach (var edge in edges)
            {
                graph.Edges.Add(new Edge {Id = i, FirstNode = edge.Item1, SecondNode = edge.Item2});
                i++;
            }

            stopWatch.Stop();
            _logger.LogDebug(
                $"Computed graph at clusteringLevel {clusteringLevel} ({ignoredNodes.Count} ignored nodes) in {stopWatch.ElapsedMilliseconds} ms. " +
                $"{edges.Count} edges and {nodes.Count} nodes");

            return graph;
        }
    }
}