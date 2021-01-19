using System.Collections.Generic;

namespace Core.Asset
{
    public class Session
    {
        protected readonly List<IAsset> Assets = new();

        internal void AddAsset(IAsset asset)
        {
            Assets.Add(asset);
        }
    }
}