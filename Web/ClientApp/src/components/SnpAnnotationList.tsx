import { Tag, Tooltip } from "antd";
import React from "react";
import { api } from "state/grpc";

function SnpAnnotationList({ snp }: { snp: api.ISnp }) {
    return (
        <React.Fragment>
            {snp.annotations?.map(
                (v) =>
                    v.study && (
                        <Tooltip title={v.study.title}>
                            <a target="_blank" rel="noreferrer" href={v.study.url || undefined}>
                                <Tag>
                                    {v.study.mainAuthor?.fullName} et al.{" "}
                                    {v.lineage && `(Lineage ${v.lineage?.value})`}
                                </Tag>
                            </a>
                        </Tooltip>
                    )
            )}
        </React.Fragment>
    );
}

export default SnpAnnotationList;
