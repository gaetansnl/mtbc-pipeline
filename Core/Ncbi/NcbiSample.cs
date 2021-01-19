using System;
using System.Collections.Generic;

namespace Core.Ncbi
{
    public class NcbiSample
    {
        public string? Accession;
        public string? Title;
        public string? TaxonId;
        public string? ScientificName;
        public Dictionary<string, string> RawAttributes = new();

        public DateTime? CollectedAt =>
            NcbiParserUtils.ToNullableDate(NcbiParserUtils.DictionnaryFallbackGet(RawAttributes, "collection_date"));

        public string? Strain =>
            NcbiParserUtils.DictionnaryFallbackGet(RawAttributes, new[] {"Strain", "strain"});

        public Coordinate? Coordinates =>
            Coordinate.Parse(NcbiParserUtils.DictionnaryFallbackGet(RawAttributes, "lat_lon"));

        public string? Location =>
            NcbiParserUtils.DictionnaryFallbackGet(RawAttributes,
                new[] {"geographic location (country and/or sea)", "geo_loc_name"});
    }
}