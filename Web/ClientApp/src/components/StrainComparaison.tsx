import { Button, Collapse, Descriptions, Spin, Tag, Tooltip, Typography } from "antd";
import React from "react";
import { useQuery } from "react-query";
import { client } from "../state/state";
import { GenericErrorMessage } from "../ui/GenericErrorMessage";
import SnpList from "./SnpList";
import GeneList from "./GeneList";
import InsertionSequencesFoundList from "./InsertionSequencesFoundList";
import { api } from "state/grpc";
import StrainAccessionList from "./StrainAccessionList";

function StrainComparaison({ ids }: { ids: string[] }) {
    const { isLoading, isError, data } = useQuery(["comparaison", ids], () =>
        client.compareStrains({ ids })
    );
    if (isError) return <GenericErrorMessage />;
    if (isLoading)
        return (
            <Spin tip={`Comparing ${ids.length} strains...`}>
                <div style={{ width: "100%", height: 200 }} />
            </Spin>
        );
    if (!data) return null;
    const computeExclusivity = (key: string | undefined | null, map: api.IMapFieldEntry[]) => {
        const otherCount = map.find((v) => v.key === key)?.value || 0;
        return {
            exclusivity:
                Math.round((data.TotalSelected / (data.TotalSelected + otherCount)) * 10000) / 100,
        };
    };
    return (
        <Collapse defaultActiveKey={["2"]}>
            <Collapse.Panel
                header={
                    <Typography.Text
                        copyable={{ text: ids.join("\n"), tooltips: "Copy accession list" }}
                    >
                        Selected strains ({ids.length || 0})
                    </Typography.Text>
                }
                key="1"
            >
                <StrainAccessionList accession={ids} />
            </Collapse.Panel>
            <Collapse.Panel header={`Shared SNP (${data.sharedSnp.length || 0})`} key="2">
                {data.sharedSnp && (
                    <SnpList
                        snp={data.sharedSnp}
                        extra={(v) => computeExclusivity(v.id, data?.sharedSnpExclusivity)}
                    />
                )}
            </Collapse.Panel>
            <Collapse.Panel
                header={`Shared missing genes (${data.sharedMissingGenes.length || 0})`}
                key="3"
            >
                {data.sharedMissingGenes && (
                    <GeneList
                        genes={data.sharedMissingGenes}
                        extra={(v) =>
                            computeExclusivity(v.locusTag, data?.sharedMissingGenesExclusivity)
                        }
                    />
                )}
            </Collapse.Panel>
            <Collapse.Panel
                header={`Shared insertion sequences (${data.sharedInsertionSequences.length || 0})`}
                key="4"
            >
                {data.sharedInsertionSequences && (
                    <InsertionSequencesFoundList
                        insertionSequences={data.sharedInsertionSequences}
                    />
                )}
            </Collapse.Panel>
        </Collapse>
    );
}

export default React.memo(StrainComparaison);
