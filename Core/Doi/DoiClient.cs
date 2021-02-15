using System;
using System.Net.Http;
using System.Net.Http.Headers;
using System.Text.Json;
using System.Threading.Tasks;
using EasyCaching.Core;

namespace Core.Doi
{
    public class DoiClient
    {
        protected readonly HttpClient HttpClient = new()
        {
            DefaultRequestHeaders =
                {Accept = {new MediaTypeWithQualityHeaderValue("application/vnd.citationstyles.csl+json")}}
        };

        protected readonly IEasyCachingProvider Cache;
        protected string CacheKey(string doiUrl) => $"doi_cache/{doiUrl}";

        public DoiClient(IEasyCachingProvider cache)
        {
            Cache = cache;
        }

        protected async Task<DoiCitation?> QueryCitation(string doiUrl)
        {
            var cacheKey = CacheKey(doiUrl);
            var cached = await Cache.GetAsync<DoiCitation>(cacheKey);
            if (cached.HasValue) return cached.Value;
            var request = new HttpRequestMessage(HttpMethod.Get, new UriBuilder(doiUrl).Uri);
            var response = await HttpClient.SendAsync(request);
            var deserialized = await JsonSerializer.DeserializeAsync<DoiCitation>(response.Content.ReadAsStream(),
                new JsonSerializerOptions {PropertyNameCaseInsensitive = true});
            await Cache.SetAsync(cacheKey, deserialized, TimeSpan.FromDays(30));
            return deserialized;
        }

        public async Task<DoiCitation?> GetCitation(string doiUrl)
        {
            return await QueryCitation(doiUrl);
        }
    }
}