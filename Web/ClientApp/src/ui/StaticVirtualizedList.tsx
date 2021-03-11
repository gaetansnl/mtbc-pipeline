import React, { ReactElement } from "react";
import { useVirtual } from "react-virtual";

function StaticVirtualizedList<T>({
    items,
    renderRow,
    rowHeight,
}: {
    items: T[];
    renderRow: (item: T) => ReactElement;
    rowHeight: number;
}) {
    const parentRef = React.useRef<HTMLDivElement>(null);
    const rowVirtualizer = useVirtual({
        size: items.length,
        parentRef,
        estimateSize: React.useCallback(() => rowHeight, [rowHeight]),
    });

    return (
        <div
            ref={parentRef}
            className="List"
            style={{
                height: `150px`,
                width: `100%`,
                overflowY: "scroll",
                overflowX: "hidden",
            }}
        >
            <div
                className="ListInner"
                style={{
                    height: `${rowVirtualizer.totalSize}px`,
                    width: "100%",
                    position: "relative",
                }}
            >
                {rowVirtualizer.virtualItems.map((virtualRow) => (
                    <div
                        key={virtualRow.index}
                        className={virtualRow.index % 2 ? "ListItemOdd" : "ListItemEven"}
                        style={{
                            position: "absolute",
                            top: 0,
                            left: 0,
                            width: "100%",
                            height: `${virtualRow.size}px`,
                            transform: `translateY(${virtualRow.start}px)`,
                        }}
                    >
                        {renderRow(items[virtualRow.index])}
                    </div>
                ))}
            </div>
        </div>
    );
}
export default StaticVirtualizedList;
