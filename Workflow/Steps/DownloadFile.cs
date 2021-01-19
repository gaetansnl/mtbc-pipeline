using System;
using System.Net;
using System.Threading.Tasks;
using Core.Asset;
using Core.Asset.FileSystem;
using WorkflowCore.Interface;
using WorkflowCore.Models;

namespace Workflow.Steps
{
    public class DownloadFile : StepBodyAsync
    {
        public Session Session { get; set; }
        public string? DownloadUrl{ get; set; }
        public FileAsset Output { get; set; }

        public override async Task<ExecutionResult> RunAsync(IStepExecutionContext context)
        {
            if (DownloadUrl == null) throw new Exception("Can't download, url missing");
            Output = Session.CreateFolder().CreateFile("content");
            using (var client = new WebClient())
            {
                await client.DownloadFileTaskAsync(DownloadUrl, Output.AbsolutePath);
            }

            return ExecutionResult.Next();
        }
    }
}