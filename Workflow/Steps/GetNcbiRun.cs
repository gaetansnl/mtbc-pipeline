using System;
using System.Threading.Tasks;
using Core.Ncbi;
using WorkflowCore.Interface;
using WorkflowCore.Models;

namespace Workflow.Steps
{
    public class GetNcbiRun : StepBodyAsync
    {
        public string RunAccession { get; set; }
        public NcbiClient Client { get; set; }
        public NcbiRun Output { get; set; }

        public override async Task<ExecutionResult> RunAsync(IStepExecutionContext context)
        {
            var result = await Client.FindRunByAccession(RunAccession);
            Output = result ?? throw new Exception();
            return ExecutionResult.Next();
        }
    }
}