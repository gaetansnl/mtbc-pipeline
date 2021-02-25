import React, { useCallback } from "react";
import { api } from "../state/grpc";
import StaticVirtualizedList from "ui/StaticVirtualizedList";
import { Popover, Typography } from "antd";

function IsRow({ sequence }: { sequence: api.IInsertionSequence }) {
    return (
        <Popover
            placement="topLeft"
            content={
                <div style={{width: 200}}>
                    At positions (NC_000962.3)
                    <ul>
                        {sequence.positions?.map((v) => {
                            return (
                                <li>
                                    <Typography.Text>{v.position}</Typography.Text>
                                </li>
                            );
                        })}
                    </ul>
                </div>
            }
        >
            <div style={{ height: 50, overflow: "hidden" }}>
                <b>{sequence.name}</b> ({sequence.positions?.length})
            </div>
        </Popover>
    );
}

function InsertionSequencesFoundList({
    insertionSequences,
}: {
    insertionSequences: api.IInsertionSequence[];
}) {
    const renderRow = useCallback((v: api.IInsertionSequence) => <IsRow sequence={v} />, []);
    return (
        <StaticVirtualizedList items={insertionSequences} renderRow={renderRow} rowHeight={50} />
    );
}

export default InsertionSequencesFoundList;
