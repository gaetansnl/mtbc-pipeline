import {Collapse, Descriptions, Spin, Tag, Typography} from "antd";
import React from "react";
import { useQuery } from "react-query";
import { client } from "../state/state";
import { GenericErrorMessage } from "../ui/GenericErrorMessage";
import SnpList from "./SnpList";
import GeneList from "./GeneList";
import InsertionSequencesFoundList from "./InsertionSequencesFoundList";
import SpoligotypingDisplay from "./SpoligotypingDisplay";
import CrisprViewer from "./CrisprViewer";

function StrainInfo({ id }: { id: string }) {
    const { isLoading, isError, data } = useQuery(["strain", id], () => client.getStrain({ id }), {staleTime: Number.POSITIVE_INFINITY});
    if (isError) return <GenericErrorMessage />;
    if (isLoading)
        return (
            <Spin tip="Loading strain informations...">
                <div style={{ width: "100%", height: 200 }} />
            </Spin>
        );
    const strain = data?.result;
    if (!strain) return null;
    return (
        <Collapse defaultActiveKey={["1"]}>
            <Collapse.Panel header="Strain infos" key="1">
                <Descriptions column={1}>
                    <Descriptions.Item label="Id">{strain.strainId}</Descriptions.Item>
                </Descriptions>
            </Collapse.Panel>
            <Collapse.Panel header={`SNP (${strain.snp?.length || 0})`} key="2">
                {strain.snp && <SnpList snp={strain.snp} />}
            </Collapse.Panel>
            <Collapse.Panel header={`Missing genes (${strain.missingGenes?.length || 0})`} key="3">
                {strain.missingGenes && <GeneList genes={strain.missingGenes} />}
            </Collapse.Panel>
            <Collapse.Panel header="Insertion sequences" key="4">
                {strain.insertionSequences && (
                    <InsertionSequencesFoundList insertionSequences={strain.insertionSequences} />
                )}
            </Collapse.Panel>
            <Collapse.Panel header="CRISPR" key="5">
                {strain.crispr && <CrisprViewer crisprParts={strain.crispr} />}
            </Collapse.Panel>
            <Collapse.Panel header="Spoligotyping in silico (CRISPR reconstruction)" key="6">
                <Typography.Text>
                    <b>Spoligotyping 43 (CRISPR build)</b>
                </Typography.Text>
                {strain.spoligotype43Crispr && (
                    <SpoligotypingDisplay spoligotyping={strain.spoligotype43Crispr} />
                )}
                <Typography.Text>
                    <b>Spoligotyping 98 (CRISPR build)</b>
                </Typography.Text>
                {strain.spoligotype98Crispr && (
                    <SpoligotypingDisplay spoligotyping={strain.spoligotype98Crispr} />
                )}
            </Collapse.Panel>
            <Collapse.Panel header="Spoligotyping in silico (Blast)" key="7">
                <Typography.Text>
                    <b>Spoligotyping 43 (Blast)</b> {!strain.spoligotype43MatchBlast && <Tag color="error">Different from reconstruction</Tag>}
                </Typography.Text>
                {strain.spoligotype43Blast && (
                    <SpoligotypingDisplay spoligotyping={strain.spoligotype43Blast} />
                )}
                <Typography.Text>
                    <b>Spoligotyping 98 (Blast)</b> {!strain.spoligotype98MatchBlast && <Tag color="error">Different from reconstruction</Tag>}
                </Typography.Text>
                {strain.spoligotype98Blast && (
                    <SpoligotypingDisplay spoligotyping={strain.spoligotype98Blast} />
                )}
                <Typography.Text>
                    <b>Spoligotyping Bloin (Blast)</b>
                </Typography.Text>
                {strain.spoligotypeBloinBlast && (
                    <SpoligotypingDisplay spoligotyping={strain.spoligotypeBloinBlast} />
                )}
            </Collapse.Panel>
        </Collapse>
    );
}
export default React.memo(StrainInfo);
