using System.Linq;
using Two10.CountryLookup;

namespace Indexer.Utils
{
    public class CountryCodeHelper
    {
        protected ReverseLookup ReverseLookup = new ReverseLookup();

        public CountryCodeHelper()
        {
        }

        public string? LookupCountryCode(string? countryName)
        {
            var country = ISO3166.Country.List.FirstOrDefault(v =>
                countryName?.ToLower() != null && v.Name.ToLower().Contains(countryName.ToLower()));
            return country?.TwoLetterCode;
        }

        public string? ThreeLetterToTwo(string? threeLetterCode)
        {
            var country = ISO3166.Country.List.FirstOrDefault(v => v.ThreeLetterCode == threeLetterCode);
            return country?.TwoLetterCode;
        }

        public string? LookupCountryCode(long latitude, long longitude)
        {
            var result = ReverseLookup.Lookup(latitude, longitude);
            if (result.Type == RegionType.Country) return ThreeLetterToTwo(result.Code);
            return null;
        }

        public string? LookupCountryCode(string? countryName, long? latitude, long? longitude)
        {
            string? result = null;
            if (latitude != null && longitude != null) result = LookupCountryCode(latitude.Value, longitude.Value);
            if (result == null && countryName != null) result = LookupCountryCode(countryName);
            return result;
        }
    }
}