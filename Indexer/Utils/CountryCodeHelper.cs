using System.Collections.Generic;
using System.Linq;
using Two10.CountryLookup;

namespace Indexer.Utils
{
    public class CountryCodeHelper
    {
        protected ReverseLookup ReverseLookup = new ReverseLookup();
        protected  Dictionary<string, string> CountryCodes;

        public CountryCodeHelper()
        {
            CountryCodes = ISO3166.Country.List.ToDictionary(v => v.Name, v => v.TwoLetterCode);
            CountryCodes.Add("United Kingdom", "UK");
            CountryCodes.Add("Russia", "RU");
            CountryCodes.Add("USA", "US");
        }

        public string? LookupCountryCode(string? countryName)
        {
            var country = CountryCodes.FirstOrDefault(v =>
                countryName?.ToLower() != null && countryName.ToLower().Contains(v.Key.ToLower()));
             return country.Equals(default) ? null : country.Value;
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