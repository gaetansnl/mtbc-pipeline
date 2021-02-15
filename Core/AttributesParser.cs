using System.Collections.Generic;
using System.Text.RegularExpressions;

namespace Core
{
    public class AttributesParser
    {
        public static readonly Regex AttributeRegex = new(@"\[(.*?)=(.*?)\]",
            RegexOptions.Compiled | RegexOptions.IgnoreCase);

        public static Dictionary<string, string> Parse(string attributes)
        {
            var matches = AttributeRegex.Matches(attributes);
            Dictionary<string, string> results = new(matches.Count);
            foreach (Match match in matches)
            {
                GroupCollection groups = match.Groups;
                results[groups[1].Value] = groups[2].Value;
            }

            return results;
        }
    }
}