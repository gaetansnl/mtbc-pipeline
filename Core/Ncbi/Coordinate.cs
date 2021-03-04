using System.Globalization;
using System.Text.RegularExpressions;

namespace Core.Ncbi
{
    public struct Coordinate
    {
        public double Latitude { get; }
        public double Longitude { get; }

        public Coordinate(double latitude, double longitude)
        {
            Latitude = latitude;
            Longitude = longitude;
        }
        
        public static Coordinate? Parse(string? s)
        {
            if (s == null) return null;
            var match = Regex.Match(s, "([0-9\\.,]*) +([NS]) +([0-9\\.,]*) +([EW])");
            if (!match.Success) return null;

            var latitude = double.Parse(match.Groups[1].Value, NumberStyles.Any, CultureInfo.InvariantCulture) *
                           (match.Groups[2].Value == "N" ? 1 : -1);
            var longitude = double.Parse(match.Groups[3].Value, NumberStyles.Any, CultureInfo.InvariantCulture) *
                            (match.Groups[4].Value == "E" ? 1 : -1);
            return new Coordinate(latitude, longitude);
        }
    }
}