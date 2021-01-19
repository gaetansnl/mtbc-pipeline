using System.IO;
using System.Threading.Tasks;
using Core.Asset.FileSystem;

namespace Core.Asset
{
    public class FileSytemPersistence
    {
        public string BasePath = Path.Join(Directory.GetCurrentDirectory(), "filesystem");
        public async Task Persist(string key, IStreamAsset asset)
        {
            var fileName = AssetUtils.GetHash(key);
            using (var fileStream = File.Create(Path.Join(BasePath, fileName)))
            {
                await asset.GetStream().CopyToAsync(fileStream);
            }
        }
        
        public async Task<FileAsset?> Get(string key)
        {
            var fileName = AssetUtils.GetHash(key);
            var sourcePath = Path.Join(BasePath, fileName);
            if(!File.Exists(sourcePath)) return null;
            
            var folder = FolderAsset.Create();
            var file = folder.CreateFile("file");
            using var destination = File.Create(Path.Join(BasePath, file.AbsolutePath));
            using var source = File.OpenRead(Path.Join(BasePath, fileName));
            await source.CopyToAsync(destination);
            return file;
        }
    }
}