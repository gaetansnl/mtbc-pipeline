import { Button, Collapse, Descriptions, Spin, Tag, Typography } from "antd";
import React from "react";
import { useQuery } from "react-query";
import { client } from "../state/state";
import { GenericErrorMessage } from "../ui/GenericErrorMessage";
import SnpList from "./SnpList";
import GeneList from "./GeneList";
import InsertionSequencesFoundList from "./InsertionSequencesFoundList";
import SpoligotypingDisplay from "./SpoligotypingDisplay";
import CrisprViewer from "./CrisprViewer";
import ProtobufTimestampDisplay from "ui/ProtobufTimestampDisplay";

function StrainInfo({ id }: { id: string }) {
    const { isLoading, isError, data } = useQuery(["strain", id], () => client.getStrain({ id }), {
        staleTime: Number.POSITIVE_INFINITY,
    });
    if (isError) return <GenericErrorMessage />;
    if (isLoading)
        return (
            <Spin tip="Loading strain informations...">
                <div style={{ width: "100%", height: 200 }} />
            </Spin>
        );
    const strain = data?.result;
    const run = strain?.run;
    if (!strain) return null;
    return (
        <Collapse defaultActiveKey={["1"]}>
            <Collapse.Panel header="Run info" key="1">
                <Descriptions column={1}>
                    <Descriptions.Item label="Run accession">
                        {run?.link?.value && run?.accession && (
                            <Button
                                target="_blank"
                                rel="noreferrer"
                                size="small"
                                href={run?.link.value}
                                type="link"
                            >
                                {run?.accession || "-"}
                            </Button>
                        )}
                    </Descriptions.Item>
                    <Descriptions.Item label="Title">{run?.title?.value || "-"}</Descriptions.Item>
                    <Descriptions.Item label="Total bases">
                        {run?.totalBases || "-"}
                    </Descriptions.Item>
                    <Descriptions.Item label="Total spots">
                        {run?.totalSpots || "-"}
                    </Descriptions.Item>
                    <Descriptions.Item label="Total reads">
                        {run?.totalReads || "-"}
                    </Descriptions.Item>
                    <Descriptions.Item label="Reads per spot">
                        {run?.readsPerSpot || "-"}
                    </Descriptions.Item>
                    <Descriptions.Item label="Average read length">
                        {run?.averageReadLength || "-"}
                    </Descriptions.Item>
                    <Descriptions.Item label="Coverage">
                        {run?.averageReadLength && run?.totalReads
                            ? Math.round(
                                  ((run?.averageReadLength * run?.totalReads) / 4411532) * 100
                              ) / 100
                            : "-"}
                    </Descriptions.Item>
                    <Descriptions.Item label="Published at">
                        {run?.publishedAt && (
                            <ProtobufTimestampDisplay timestamp={run?.publishedAt} />
                        )}
                    </Descriptions.Item>
                </Descriptions>
            </Collapse.Panel>
            <Collapse.Panel header="Study" key="2">
                <Descriptions column={1}>
                    <Descriptions.Item label="Accession">
                        {run?.experiment?.Study?.accession || "-"}
                    </Descriptions.Item>
                    <Descriptions.Item label="Center">
                        {run?.experiment?.Study?.centerName?.value || "-"}
                    </Descriptions.Item>
                    <Descriptions.Item label="Title">
                        {run?.experiment?.Study?.title?.value || "-"}
                    </Descriptions.Item>
                </Descriptions>
            </Collapse.Panel>
            <Collapse.Panel header="Sample" key="3">
                {(run?.samples || []).map((v) => (
                    <Descriptions column={1} title={v.accession}>
                        <Descriptions.Item label="Name">
                            {v.scientificName?.value}
                        </Descriptions.Item>
                        <Descriptions.Item label="Strain">{v.strain?.value}</Descriptions.Item>
                        <Descriptions.Item label="Title">{v.title?.value}</Descriptions.Item>
                        <Descriptions.Item label="Location">{v.location?.value}</Descriptions.Item>
                        <Descriptions.Item label="Collected at">
                            {v.collectedAt ? (
                                <ProtobufTimestampDisplay timestamp={v.collectedAt} />
                            ) : (
                                "-"
                            )}
                        </Descriptions.Item>
                    </Descriptions>
                ))}
            </Collapse.Panel>
            <Collapse.Panel header={`SNP (${strain.snp?.length || 0})`} key="4">
                {strain.snp && <SnpList snp={strain.snp} />}
            </Collapse.Panel>
            <Collapse.Panel header={`Missing genes (${strain.missingGenes?.length || 0})`} key="5">
                {strain.missingGenes && <GeneList genes={strain.missingGenes} />}
            </Collapse.Panel>
            <Collapse.Panel header="Insertion sequences" key="6">
                {strain.insertionSequences && (
                    <InsertionSequencesFoundList insertionSequences={strain.insertionSequences} />
                )}
            </Collapse.Panel>
            <Collapse.Panel header="CRISPR" key="7">
                {strain.crispr && <CrisprViewer crisprParts={strain.crispr} />}
            </Collapse.Panel>
            <Collapse.Panel header="Spoligotyping in silico (CRISPR reconstruction)" key="8">
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
            <Collapse.Panel header="Spoligotyping in silico (Blast)" key="9">
                <Typography.Text>
                    <b>Spoligotyping 43 (Blast)</b>{" "}
                    {!strain.spoligotype43MatchBlast && (
                        <Tag color="error">Different from reconstruction</Tag>
                    )}
                </Typography.Text>
                {strain.spoligotype43Blast && (
                    <SpoligotypingDisplay spoligotyping={strain.spoligotype43Blast} />
                )}
                <Typography.Text>
                    <b>Spoligotyping 98 (Blast)</b>{" "}
                    {!strain.spoligotype98MatchBlast && (
                        <Tag color="error">Different from reconstruction</Tag>
                    )}
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
