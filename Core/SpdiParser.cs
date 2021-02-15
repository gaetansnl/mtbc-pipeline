using System;

namespace Core
{
    public class SpdiParser
    {
        public static Snp Parse(string spdi)
        {
            string[] parts = spdi.Split(':');
            if (parts.Length != 4) throw new ArgumentException("Invalid SPDI");
            int position = int.Parse(parts[1]) + 1;
            return new Snp(parts[0], position, parts[2], parts[3]);
        }
    }
}