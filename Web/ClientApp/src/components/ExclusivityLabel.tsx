import { Tag } from "antd";
import React from "react";

export default function ExclusivityLabel({ value: percentExclusive }: { value: number }) {
    if (percentExclusive === 100) return <Tag color="green">Exclusive</Tag>;
    return percentExclusive > 95 ? (
        <Tag color="orange">Exclusive at {percentExclusive}%</Tag>
    ) : <Tag>Exclusive at {percentExclusive}%</Tag>;
}
