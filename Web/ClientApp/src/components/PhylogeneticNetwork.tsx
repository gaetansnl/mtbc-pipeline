// @ts-nocheck
import React, { useEffect, useState } from "react";
import { client } from "state/state";
import { Stage, Container } from "@inlet/react-pixi";
import PixiGraph from "components/rendering/PixiGraph";
import PixiViewport from "components/rendering/PixiViewport";
import PhylogeneticNetworkInfo from "components/PhylogeneticNetworkInfo";
import useResizeObserver from "use-resize-observer";
import { api } from "../state/grpc";
const gg = []
const preventDefault = (e) => e.preventDefault();
function PhylogeneticNetwork({ edgePrecision = 0.0002, onNodesSelected, selectedNodeIds }) {
    let [values, setValues] = useState<api.IHelloReply>(null);
    let [graph, setGraph] = useState(null);
    let [zoomLevel, setZoomLevel] = useState(null);
    useEffect(() => {
        client
            .sayHello({
                clusteringLevel: edgePrecision,
            })
            .then((v) => {
                setValues(v);
            });
    }, [edgePrecision]);
    const { ref, width = 0, height = 0 } = useResizeObserver();

    useEffect(() => {
        let nodes = {};
        let edges = [];
        let hiddenCount = 0;
        let visibleCount = 0;
        if (values) {
            values.graph?.nodes.forEach((v) => {
                const hidden = v.id > 1600;
                nodes[v.id] = {
                    id: v.id,
                    name: v.name,
                    x: v.positionX,
                    y: v.positionY,
                    hidden: v.id > 1600,
                };
                hidden ? hiddenCount++ : visibleCount++;
            });
            values.graph?.edges.forEach((v) => {
                edges.push([v.firstNode, v.secondNode]);
            });
            setGraph({ nodes, edges, hiddenCount, visibleCount });
        }
    }, [values]);
    return (
        <React.Fragment>
            <div
                ref={ref}
                onContextMenu={preventDefault}
                style={{
                    width: "100%",
                    height: "100%",
                    overflow: "hidden",
                    position: "relative",
                }}
            >
                {width && height && (
                    <Stage
                        width={width}
                        height={height}
                        options={{ antialias: true, backgroundColor: 0x000000 }}
                    >
                        <PixiViewport
                            width={width}
                            height={height}
                            onZoomChange={(v) => setZoomLevel(v)}
                        >
                            <Container scale={0.1} position={{ x: 1000, y: 250 }}>
                                {graph && (
                                    <PixiGraph
                                        graph={graph}
                                        nodeSize={zoomLevel < 4 ? 12 : 5}
                                        selectedNodeSize={zoomLevel < 4 ? 20 : 5}
                                        selectedNodesIds={selectedNodeIds}
                                        onNodesSelected={(v) => {
                                            onNodesSelected(v);
                                        }}
                                        onNodeClick={(v) => {
                                            onNodesSelected([v]);
                                        }}
                                    />
                                )}
                            </Container>
                        </PixiViewport>
                        {graph && <PhylogeneticNetworkInfo graph={graph} zoomLevel={zoomLevel} />}
                    </Stage>
                )}
            </div>
        </React.Fragment>
    );
}

PhylogeneticNetwork.propTypes = {};

PhylogeneticNetwork.defaultProps = {};
export default PhylogeneticNetwork;
