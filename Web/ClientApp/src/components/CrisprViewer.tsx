import { api } from "state/grpc";
import { Popover, Tag } from "antd";
import React from "react";

function CrisprViewer({ crisprParts }: { crisprParts: api.ICrisprPart[] }) {
    const rangeSmall = (v: api.IRange | null | undefined) => v && `[${v.from || ""}:${v.to || ""}]`;
    const rangeFull = (v: api.IRange | null | undefined) =>
        v &&
        `Subsequence from 0-based position ${v.from || 0} (incl.) to ${`${v.to} (excl.)` || "end"}`;
    return (
        <div style={{ lineHeight: 2 }}>
            {crisprParts.map((v) => {
                if (v.directRepeat) {
                    return (
                        <React.Fragment>
                            <Popover
                                content={
                                    <div>
                                        <b>{v.directRepeat.name}</b>
                                        <br />
                                        Version {v.directRepeat.version}
                                        <br />
                                        {rangeFull(v.directRepeat.range)}
                                    </div>
                                }
                            >
                                <Tag color="blue">
                                    {v.directRepeat.name}{" "}
                                    {!!v.directRepeat.version && `(${v.directRepeat.version})`}
                                    {rangeSmall(v.directRepeat.range)}
                                </Tag>
                            </Popover>
                            <br />
                        </React.Fragment>
                    );
                } else if (v.insertionSequence) {
                    return (
                        <Popover
                            content={
                                <div>
                                    <b>{v.insertionSequence.name}</b>
                                    <br />
                                    {v.insertionSequence.isReverse && (
                                        <>
                                            Inserted in reverse order
                                            <br />
                                        </>
                                    )}
                                    {rangeFull(v.insertionSequence.range)}
                                </div>
                            }
                        >
                            <Tag color="magenta">
                                {v.insertionSequence.name}{" "}
                                {v.insertionSequence.isReverse && "(reversed)"}
                                {rangeSmall(v.insertionSequence.range)}
                            </Tag>
                        </Popover>
                    );
                } else if (v.gene) {
                    return (
                        <Popover
                            content={
                                <div>
                                    <b>{v.gene.name}</b> {v.gene.gene?.id && `(${v.gene.gene?.id})`}
                                    <br />
                                    {v.gene.gene?.description?.value}
                                </div>
                            }
                        >
                            <Tag color="orange">{v.gene.name}</Tag>
                        </Popover>
                    );
                } else if (v.namedSequence) {
                    return <Tag>{v.namedSequence.name}</Tag>;
                } else if (v.spacer) {
                    return (
                        <Popover
                            content={
                                <div>
                                    <b>Spacer {v.spacer.id}</b>
                                    <br />
                                    Version {v.spacer.version}
                                    <br />
                                    {rangeFull(v.spacer.range)}
                                </div>
                            }
                        >
                            <Tag color="green">
                                Spacer {v.spacer.id} {!!v.spacer.version && `(${v.spacer.version})`}{" "}
                                {rangeSmall(v.spacer.range)}
                            </Tag>
                        </Popover>
                    );
                } else if (v.sequence) {
                    return <Tag color="volcano">{v.sequence.value}</Tag>;
                }
            })}
        </div>
    );
}

export default CrisprViewer;
