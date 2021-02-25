import React, { useCallback } from "react";
import { api } from "../state/grpc";
import { Typography } from "antd";
import StaticVirtualizedList from "ui/StaticVirtualizedList";

function GeneRow({ gene }: { gene: api.IGene }) {
    return (
        <div style={{ height: 50, overflow: "hidden" }}>
            <b>{gene.locusTag}</b>{' '}
            <Typography.Text type="secondary">({gene.id})</Typography.Text>
            <div>
                <Typography.Text>{gene.description?.value}</Typography.Text>
            </div>
        </div>
    );
}

function GeneList({ genes }: { genes: api.IGene[] }) {
    const renderRow = useCallback((v: api.IGene) => <GeneRow gene={v} />, []);
    return <StaticVirtualizedList items={genes} renderRow={renderRow} rowHeight={50} />;
}

export default GeneList;
