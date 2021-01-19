using System;
using System.IO;

namespace Core.Asset.FileSystem
{
    public class FolderAsset : IAsset
    {
        protected static string BasePath = Path.Join(Path.GetTempPath(), "assetManager");
        protected readonly FolderAsset? Parent;
        protected readonly string Name ;
        public string AbsolutePath => Path.Join(BasePath, RelativePath);
        public string RelativePath { get; }

        protected FolderAsset(FolderAsset parent, string name)
        {
            Name = name;
            Parent = parent;
            RelativePath = Path.Join(Parent.RelativePath, name);
            Directory.CreateDirectory(AbsolutePath);
        }
        
        protected FolderAsset()
        {
            Name = Guid.NewGuid().ToString();
            RelativePath = Name;
            Directory.CreateDirectory(AbsolutePath);
        }

        public FolderAsset CreateFolder(string name)
        {
            return new(this, name);
        }
        internal static FolderAsset Create()
        {
            return new();
        }
        public FileAsset GetFile(string path)
        {
            return FileAsset.FromPath(this, path);
        }
        public FileAsset CreateFile(string path)
        {
            return FileAsset.Create(this, path);
        }
        void IAsset.Release()
        {
            // Do nothing for now
            // Async delete here ? See Github Actions
        }
    }
}