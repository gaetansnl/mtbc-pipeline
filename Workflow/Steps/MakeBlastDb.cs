using System.Threading.Tasks;
using Core.Asset;
using Core.Asset.FileSystem;
using Core.Blast;
using WorkflowCore.Interface;
using WorkflowCore.Models;

namespace Workflow.Steps
{
    public class MakeBlastDb: StepBodyAsync
    {
        public FileAsset FastaFile { get; set; }
        public Session Session { get; set; }
        public BlastMakeClient BlastClient { get; set; }
        public string DbName { get; set; } = "db";
        public string DbType { get; set; } = "nucl";
        public FolderAsset Output { get; set; }

        public override async Task<ExecutionResult> RunAsync(IStepExecutionContext context)
        {
            Output = Session.CreateFolder();
            var options = new BlastMakeClient.BlastMakeOptions(DbName, DbType, FastaFile.AbsolutePath);
            options.DbPath = Output.AbsolutePath;
            await BlastClient.execute(options);
            return ExecutionResult.Next();
        }
    }
}