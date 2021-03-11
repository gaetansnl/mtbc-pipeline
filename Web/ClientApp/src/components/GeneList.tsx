import React, { useCallback } from "react";
import { api } from "../state/grpc";
import { Typography } from "antd";
import StaticVirtualizedList from "ui/StaticVirtualizedList";
import ExclusivityLabel from "./ExclusivityLabel";

interface GeneRowExtra {
    exclusivity: number;
}

function GeneRow({ gene, extra }: { gene: api.IGene; extra?: GeneRowExtra | null }) {
    return (
        <div style={{ height: 50, overflow: "hidden" }}>
            <Typography.Text
                copyable={{ text: gene.locusTag || undefined, tooltips: "Copy locus tag" }}
            >
                <b>{gene.locusTag}</b>
            </Typography.Text>{" "}
            <Typography.Text type="secondary"  copyable={{ text: gene.id || undefined, tooltips: "Copy accession" }}>({gene.id})</Typography.Text>
            {extra?.exclusivity && <ExclusivityLabel value={extra?.exclusivity} />}
            <div>
                <Typography.Text>{gene.description?.value}</Typography.Text>
            </div>
        </div>
    );
}

function GeneList({
    genes,
    extra,
}: {
    genes: api.IGene[];
    extra?: (v: api.IGene) => GeneRowExtra | null | undefined;
}) {
    const renderRow = useCallback(
        (v: api.IGene) => <GeneRow gene={v} extra={extra && extra(v)} />,
        []
    );
    return <StaticVirtualizedList items={genes} renderRow={renderRow} rowHeight={50} />;
}

export default GeneList;
