using System.Security.Cryptography;
using System.Text;

namespace Core.Asset
{
    public class AssetUtils
    {
        public static string GetHash(string value)
        {
            using (SHA256 sha256Hash = SHA256.Create())
            {
                byte[] data = sha256Hash.ComputeHash(Encoding.UTF8.GetBytes(value));
                var sBuilder = new StringBuilder();
                for (int i = 0; i < data.Length; i++)
                {
                    sBuilder.Append(data[i].ToString("x2"));
                }
                return sBuilder.ToString();
            }
        }
    }
}