using System;
using System.Collections.Generic;

namespace Core.Ncbi
{
    public class NcbiParserUtils
    {
        public static int? ToNullableInt(string? s)
        {
            return s != null && int.TryParse(s, out var i) ? i : null;
        }

        public static DateTime? ToNullableDate(string? s)
        {
            return s != null && DateTime.TryParse(s, out var date) ? date : null;
        }

        public static string? DictionnaryFallbackGet(Dictionary<string, string> dic, string[] keys)
        {
            foreach (var key in keys)
                if (dic.ContainsKey(key) && dic[key] != "")
                    return dic[key];
            return null;
        }

        public static string? DictionnaryFallbackGet(Dictionary<string, string> dic, string key)
        {
            return dic.ContainsKey(key) && dic[key] != "" ? dic[key] : null;
        }
    }
}