using System.Linq;

namespace Core.Blast
{
    public class BlastnResult
    {
        public string? QuerySeqId;
        public string? QueryGi;
        public string? QueryAccesion;
        public string? QueryAccesionVersion;
        public string? QuerySequenceLength;
        public string? SubjectSeqId;
        public string? AllSubjectSeqIdSSeparatedByA;
        public string? SubjectGi;
        public string? AllSubjectGIs;
        public string? SubjectAccession;
        public string? SubjectAccessionVersion;
        public string? AllSubjectAccessions;
        public string? SubjectSequenceLength;
        public string? StartOfAlignmentInQuery;
        public string? EndOfAlignmentInQuery;
        public string? StartOfAlignmentInSubject;
        public string? EndOfAlignmentInSubject;
        public string? AlignedPartOfQuerySequence;
        public string? AlignedPartOfSubjectSequence;
        public string? ExpectValue;
        public string? BitScore;
        public string? RawScore;
        public string? AlignmentLength;
        public string? PercentageOfIdenticalMatches;
        public string? NumberOfIdenticalMatches;
        public string? NumberOfMismatches;
        public string? NumberOfPositiveScoringMatches;
        public string? NumberOfGapOpenings;
        public string? TotalNumberOfGaps;
        public string? PercentageOfPositiveScoringMatches;
        public string? QueryAndSubjectFramesSeparatedByA;
        public string? QueryFrame;
        public string? SubjectFrame;
        public string? BlastTracebackOperationsBtop;
        public string? SubjectTaxonomyId;
        public string? SubjectScientificName;
        public string? SubjectCommonName;
        public string? SubjectBlastName;
        public string? SubjectSuperKingdom;
        public string? UniqueSubjectTaxonomyIdSSeparatedByA;
        public string? UniqueSubjectScientificNameSSeparatedByA;
        public string? UniqueSubjectCommonNameSSeparatedByA;
        public string? UniqueSubjectBlastNameSSeparatedByA;
        public string? UniqueSubjectSuperKingdomSSeparatedByA;
        public string? SubjectTitle;
        public string? AllSubjectTitleSSeparatedByA;
        public string? SubjectStrand;
        public string? QueryCoveragePerSubject;
        public string? QueryCoveragePerHsp;

        public string? QueryCoveragePerUniqueSubjectBlastnOnly;

        public static BlastnResult FromOutput(BlastnOptions options, string line)
        {
            var result = new BlastnResult();
            var values = line.Replace("\r", "").Split(',');
            foreach (var index in Enumerable.Range(0, options.FormatSpecifiers.Count))
            {
                switch (options.FormatSpecifiers[index])
                {
                    case "qseqid":
                        result.QuerySeqId = values[index];
                        break;
                    case "sseqid":
                        result.SubjectSeqId = values[index];
                        break;                   
                    case "sseq":
                        result.AlignedPartOfSubjectSequence = values[index];
                        break;
                    case "pident":
                        result.PercentageOfIdenticalMatches = values[index];
                        break;
                    case "length":
                        result.AlignmentLength = values[index];
                        break;
                    case "mismatch":
                        result.NumberOfMismatches = values[index];
                        break;
                    case "gapopen":
                        result.NumberOfGapOpenings = values[index];
                        break;
                    case "qstart":
                        result.StartOfAlignmentInQuery = values[index];
                        break;
                    case "qend":
                        result.EndOfAlignmentInQuery = values[index];
                        break;
                    case "sstart":
                        result.StartOfAlignmentInSubject = values[index];
                        break;
                    case "send":
                        result.EndOfAlignmentInSubject = values[index];
                        break;
                    case "evalue":
                        result.ExpectValue = values[index];
                        break;
                    case "bitscore":
                        result.BitScore = values[index];
                        break;
                }
            }

            return result;
        }
    }
}