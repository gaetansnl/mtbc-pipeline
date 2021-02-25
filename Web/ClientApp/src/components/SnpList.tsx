import React, { useCallback } from "react";
import { api } from "../state/grpc";
import { Typography } from "antd";
import { CaretRightOutlined } from "@ant-design/icons";
import SnpDetailsButton from "./SnpDetailsButton";
import StaticVirtualizedList from "ui/StaticVirtualizedList";

function SnpRow({ snp }: { snp: api.ISnp }) {
    return (
        <div style={{ height: 50, overflow: "hidden" }}>
            <SnpDetailsButton snp={snp}>
                <div style={{ cursor: "pointer" }}>
                    <Typography.Text><b>{snp.position}</b></Typography.Text>{" "}
                    <Typography.Text type="secondary">({snp.sequenceId})</Typography.Text>
                    <div>
                        <Typography.Text type="danger">
                            <b>{snp.reference}</b>
                        </Typography.Text>
                        <CaretRightOutlined />
                        <Typography.Text type="success">
                            <b>{snp.insertion}</b>
                        </Typography.Text>
                    </div>
                </div>
            </SnpDetailsButton>
        </div>
    );
}

function SnpList({ snp }: { snp: api.ISnp[] }) {
    const renderRow = useCallback((v: api.ISnp) => <SnpRow snp={v} />, []);
    return <StaticVirtualizedList items={snp} renderRow={renderRow} rowHeight={50} />;
}

export default SnpList;
