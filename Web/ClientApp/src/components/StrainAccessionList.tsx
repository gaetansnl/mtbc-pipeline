import React, { useCallback } from "react";
import StaticVirtualizedList from "ui/StaticVirtualizedList";

function StrainRow({ result }: { result: string }) {
    return (
        <div style={{ height: 20, overflow: "hidden" }}>
            <b>{result}</b>
        </div>
    );
}

function StrainAccessionList({
    accession,
}: {
    accession: string[];
}) {
    const renderRow = useCallback((v: string) => <StrainRow result={v} />, []);
    return (
        <StaticVirtualizedList items={accession} renderRow={renderRow} rowHeight={20} />
    );
}

export default StrainAccessionList;
