using System;
using System.Collections.Generic;

namespace Core.Ncbi
{
    public class NcbiSample
    {
        public string? Accession { get; set; }
        public string? Title { get; set; }
        public string? TaxonId { get; set; }
        public string? ScientificName { get; set; }

        protected static readonly string[] LocationNames =
        {
            "geo_loc_name",
            "country",
            "geo loc name",
            "geographic location (country and/or sea region)",
            "geographic location (country and/or sea)",
            "geographic location (country and/or sea, region)",
            "geographic location (country and/or sea,region)",
            "geographic location (country)",
            "geographic location (country:region,area)",
            "geographic location (locality)",
            "geographic location country and or sea",
            "geographic locations",
            "geographic origin",
            "geographical location",
            "geographical location (country:region, location)",
            "geolocname"
        };

        protected static readonly string[] LatLonNames =
        {
            "lat_lon",
            "geographic location (latitude and longitude)",
            "geographic location (latitude, longitude)",
            "geographical location (lat lon)",
            "geographical location (longitude and longitude)",
            "lat lon",
            "latlon"
        };

        public Dictionary<string, string> RawAttributes { get; set; } = new();

        public DateTime? CollectedAt =>
            NcbiParserUtils.ToNullableDate(NcbiParserUtils.DictionnaryFallbackGet(RawAttributes, "collection_date"));

        public string? Strain =>
            NcbiParserUtils.DictionnaryFallbackGet(RawAttributes, new[] {"Strain", "strain"});

        public Coordinate? Coordinates =>
            Coordinate.Parse(NcbiParserUtils.DictionnaryFallbackGet(RawAttributes, LatLonNames));

        public string? Location =>
            NcbiParserUtils.DictionnaryFallbackGet(RawAttributes, LocationNames);
    }
}