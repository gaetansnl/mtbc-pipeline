using System.IO;

namespace Core.Asset.FileSystem
{
    public class FileAsset : IStreamAsset
    {
        protected readonly FolderAsset Parent;
        public readonly string Name;

        public string AbsolutePath => Path.Join(Parent.AbsolutePath, Name);

        protected FileAsset(FolderAsset parent, string name, bool createIfNotExists)
        {
            Parent = parent;
            Name = name;
            if (!File.Exists(AbsolutePath) && createIfNotExists) File.Create(AbsolutePath).Dispose();
        }

        internal static FileAsset FromPath(FolderAsset parent, string name)
        {
            return new(parent, name, false);
        }
        
        internal static FileAsset Create(FolderAsset parent, string name)
        {
            return new(parent, name, true);
        }

        public Stream GetStream()
        {
            return File.OpenRead(AbsolutePath);
        }

        void IAsset.Release()
        {
            throw new System.NotImplementedException();
        }
    }
}