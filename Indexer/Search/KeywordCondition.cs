using System.Collections.Generic;

namespace Indexer.Search
{
    public record KeywordCondition
    {
        public enum KeywordField
        {
            ACCESSION = 0,
            COUNTRY_CODE = 1,

            GENE_LOCUS_TAG = 2,
            GENE_ID = 3,
  
            SIT  = 4,

            SNP_POSITION = 5,
            SNP_SPDI = 6,
            SNP_STUDY_DOI = 7,

            INSERTION_SEQUENCE_NAME = 8,

            SPOL_43_BLAST = 9,
            SPOL_98_BLAST = 10,
            SPOL_BLOUIN_BLAST = 11,
            SPOL_43_CRISPR = 12,
            SPOL_98_CRISPR = 13,
        }
        public bool AllOf { get; set; }
        public KeywordField Field { get; set; }
        public List<string> Values { get; set; }

    }
}