using System.IO;

namespace MTBC
{
    public static class DataPath
    {
        public static string GetDataPath(string subpath)
        {
            return Path.Join(
                Path.GetDirectoryName(System.Reflection.Assembly.GetExecutingAssembly().Location), "data", subpath);
        }
    }
}