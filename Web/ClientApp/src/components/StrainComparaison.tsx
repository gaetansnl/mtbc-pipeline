import { Button, Collapse, Descriptions, Spin, Tag, Tooltip, Typography } from "antd";
import React from "react";
import { useQuery } from "react-query";
import { client } from "../state/state";
import { GenericErrorMessage } from "../ui/GenericErrorMessage";
import SnpList from "./SnpList";
import GeneList from "./GeneList";
import InsertionSequencesFoundList from "./InsertionSequencesFoundList";

function StrainComparaison({ ids }: { ids: string[] }) {
    const { isLoading, isError, data } = useQuery(["comparaison", ids], () => client.compareStrains({ ids }), {
        staleTime: Number.POSITIVE_INFINITY,
    });
    if (isError) return <GenericErrorMessage />;
    if (isLoading)
        return (
            <Spin tip="Loading strain informations...">
                <div style={{ width: "100%", height: 200 }} />
            </Spin>
        );
    if (!data) return null;
    return (
        <Collapse defaultActiveKey={["2"]}>
            <Collapse.Panel header={`Selected strains (${ids.length || 0})`} key="1">
                {ids.map(v => <div>{v}</div>)}
            </Collapse.Panel>
            <Collapse.Panel header={`Shared SNP (${data.sharedSnp.length || 0})`} key="2">
                {data.sharedSnp && <SnpList snp={data.sharedSnp} />}
            </Collapse.Panel>
            <Collapse.Panel header={`Shared missing genes (${data.sharedMissingGenes.length || 0})`} key="3">
                {data.sharedMissingGenes && <GeneList genes={data.sharedMissingGenes} />}
            </Collapse.Panel>
            <Collapse.Panel header={`Shared insertion sequences (${data.sharedInsertionSequences.length || 0})`} key="4">
                {data.sharedInsertionSequences && <InsertionSequencesFoundList insertionSequences={data.sharedInsertionSequences} />}
            </Collapse.Panel>
        </Collapse>
    );
}
export default React.memo(StrainComparaison);
