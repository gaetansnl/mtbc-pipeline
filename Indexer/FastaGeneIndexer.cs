using System;
using System.Collections.Generic;
using System.Threading.Tasks;
using Core;
using Core.Fasta;
using Indexer.Data;

namespace Indexer
{
    public class FastaGeneIndexer
    {
        protected LiteDbDriver Database;
        protected string FastaPath;
        protected string SequenceId;

        public FastaGeneIndexer(LiteDbDriver database, string sequenceId, string fastaPath)
        {
            Database = database;
            SequenceId = sequenceId;
            FastaPath = fastaPath;
        }

        public async Task Index()
        {
            var reader = await FastaReader.CreateAsync(FastaPath);
            foreach (var identifier in reader.Identifiers)
            {
                var comment = reader.CommentOf(identifier);
                var attributes = AttributesParser.Parse(comment);
                var id = attributes.GetValueOrDefault("protein_id");
                if (id == null) throw new Exception("Id missing");
                var data = new GeneData(id, SequenceId)
                {
                    Symbol = attributes.GetValueOrDefault("gene"),
                    Description = attributes.GetValueOrDefault("protein"),
                    LocusTag = attributes.GetValueOrDefault("locus_tag") ?? throw new Exception("Locus tag missing"),
                };
                await Database.Index(data);
            }
        }
    }
}