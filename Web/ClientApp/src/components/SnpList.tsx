import React, { useCallback } from "react";
import { api } from "../state/grpc";
import { Typography } from "antd";
import { CaretRightOutlined } from "@ant-design/icons";
import SnpDetailsButton from "./SnpDetailsButton";
import StaticVirtualizedList from "ui/StaticVirtualizedList";
import ExclusivityLabel from "./ExclusivityLabel";

interface SnpRowExtra{
    exclusivity: number;
}

function SnpRow({ snp, extra }: { snp: api.ISnp, extra?: SnpRowExtra | null}) {

    return (
        <div style={{ height: 50, overflow: "hidden" }}>
            <SnpDetailsButton snp={snp}>
                <div style={{ cursor: "pointer" }}>
                    <Typography.Text><b>{snp.position}</b></Typography.Text>{" "}
                    <Typography.Text type="secondary">({snp.sequenceId})</Typography.Text>
                    {extra?.exclusivity && <ExclusivityLabel value={extra?.exclusivity}/>}
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

function SnpList({ snp, extra }: { snp: api.ISnp[], extra?:(v:api.ISnp) => SnpRowExtra | null | undefined }) {
    const renderRow = useCallback((v: api.ISnp) => <SnpRow snp={v} extra={extra && extra(v)}/>, []);
    return <StaticVirtualizedList items={snp} renderRow={renderRow} rowHeight={50} />;
}

export default SnpList;
