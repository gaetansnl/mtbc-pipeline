namespace Core.Asset.FileSystem
{
    public static class Extensions
    {
        public static FolderAsset CreateFolder(this Session session)
        {
            var folder = FolderAsset.Create();
            session.AddAsset(folder);
            return folder;
        }
    }
}