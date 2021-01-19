using Core.Asset;
using Core.Asset.FileSystem;
using Core.Blast;
using Core.Ncbi;
using Workflow.Steps;
using WorkflowCore.Interface;

namespace Workflow.Workflow
{
    public class Data
    {
        public FileAsset SraFile { get; set; }
        public FileAsset FastaFile { get; set; }
        public NcbiRun RunInfo { get; set; }
        public BlastMakeClient BlastClient { get; set; }
        public FastqDumpClient FastqDumpClient { get; set; }
        public NcbiClient Ncbi { get; set; }
    }

    public class Test : IWorkflow<Data>
    {
        public void Build(IWorkflowBuilder<Data> builder)
        {
            var session = new Session();
            builder
                .StartWith<GetNcbiRun>()
                .Input(step => step.RunAccession, data => "")
                .Input(step => step.Client, data => data.Ncbi)
                .Input(step => step.RunAccession, data => "SRR1173284")
                .Output(data => data.RunInfo, step => step.Output)
                .Then<DownloadFile>()
                .Input(step => step.DownloadUrl, data => data.RunInfo.DownloadUrl)
                .Input(step => step.Session, data => session)
                .Output(data => data.SraFile, step => step.Output)
                .Then<ExtractSra>()
                .Input(step => step.SraFile, data => data.SraFile)
                .Input(step => step.Session, data => session)
                .Input(step => step.FastqDump, data => data.FastqDumpClient)
                .Output(data => data.FastaFile, step => step.Output)
                .Then<MakeBlastDb>()
                .Input(step => step.FastaFile, data => data.FastaFile)
                .Input(step => step.BlastClient, data => data.BlastClient)
                .Input(step => step.Session, data => session);
        }

        public string Id => "test";
        public int Version => 1;
    }
}