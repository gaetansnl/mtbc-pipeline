using System.IO;

namespace Core.Asset
{
    public interface IStreamAsset: IAsset
    {
        public Stream GetStream();
    }
}