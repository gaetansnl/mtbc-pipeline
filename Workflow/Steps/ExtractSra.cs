using System.Threading.Tasks;
using Core.Asset;
using Core.Asset.FileSystem;
using Core.Ncbi;
using WorkflowCore.Interface;
using WorkflowCore.Models;

namespace Workflow.Steps
{
    public class ExtractSra: StepBodyAsync
    {
        public FileAsset SraFile { get; set; }
        public Session Session { get; set; }
        public FastqDumpClient FastqDump { get; set; }
        public FileAsset Output { get; set; }

        public override async Task<ExecutionResult> RunAsync(IStepExecutionContext context)
        {
            var folder = Session.CreateFolder();
            await FastqDump.execute(new FastqDumpClient.FastqDumpOptions(SraFile.AbsolutePath, folder.AbsolutePath){Fasta = true});
            Output = folder.GetFile(SraFile.Name + ".fasta");
            return ExecutionResult.Next();
        }
    }
}