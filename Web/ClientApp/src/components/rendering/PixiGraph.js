import React, { useMemo, useCallback } from "react";
import { Container, PixiComponent } from "@inlet/react-pixi";
import { Graphics } from "pixi.js";
import PixiDrawableRect from "components/rendering/PixiDrawableRect";
import {
    findNodeAt,
    findNodeIn,
    findNodeMaxPosition,
} from "components/rendering/utils";

const Nodes = React.memo(
    PixiComponent("Nodes", {
        create: () => new Graphics(),
        willUnmount(instance) {
            instance.destroy();
        },
        applyProps: (instance, _, props) => {
            const { nodes, nodeColor, edgeColor, nodeSize, scale } = props;

            if (instance._clickEvent) {
                instance.off("mousedown", instance._clickEvent);
            }
            instance._clickEvent = instance.on("mousedown", (e) => {
                const point = e.data.getLocalPosition(instance);
                props.onClick &&
                    props.onClick({
                        x: point.x,
                        y: point.y,
                        global: e.data.global,
                    });
            });

            instance.interactive = true;
            instance.clear();
            instance.cursor = "pointer";
            instance.beginFill(nodeColor);
            instance.lineStyle(2, edgeColor, 1);
            nodes.forEach((node) => {
                if (!node.hidden) {
                    instance.drawCircle(
                        node.x * scale,
                        node.y * scale,
                        nodeSize
                    );
                }
            });
        },
    })
);

const Edges = React.memo(
    PixiComponent("Edges", {
        create: () => new Graphics(),
        willUnmount(instance) {
            instance.destroy();
        },
        applyProps: (instance, _, props) => {
            const { nodesById, edges, edgeColor, scale } = props;
            instance.clear();
            instance.cacheAsBitmap = false;
            instance.cacheAsBitmap = true;
            instance.lineStyle(2, edgeColor, 0.5);
            edges.forEach(([from, to]) => {
                const fromNode = nodesById[from];
                const toNode = nodesById[to];
                instance.moveTo(fromNode.x * scale, fromNode.y * scale);
                instance.lineTo(toNode.x * scale, toNode.y * scale);
            });
        },
    })
);

export default React.memo(function PixiGraph({
    graph,
    edgeColor = 0x00eaff,
    nodeColor = 0x00ff78,
    selectedNodeColor = 0xff0066,
    nodeSize = 10,
    selectedNodeSize = 10,
    selectedNodesIds = [],
    size = 10000,
    onNodeClick,
    onNodesSelected,
}) {
    const nodes = useMemo(() => Object.values(graph.nodes), [graph]);
    const maxPosition = useMemo(() => findNodeMaxPosition(nodes), [nodes]);
    let scale = size / maxPosition;

    const selectedNodes = useMemo(
        () => selectedNodesIds.map((v) => graph.nodes[v]),
        [selectedNodesIds, graph]
    );
    const onNodesClick = useCallback(
        ({ x, y }) => {
            const node = findNodeAt(nodes, x, y, scale, nodeSize);
            node && onNodeClick && onNodeClick(node);
        },
        [nodeSize, nodes, onNodeClick, scale]
    );
    const handleSelection = useCallback(
        (from, to) => {
            const selectedNodes = findNodeIn(nodes, scale, from, to);
            onNodesSelected && onNodesSelected(selectedNodes);
        },
        [nodes, onNodesSelected, scale]
    );
    /* We can use ParticleContainer to speed up node rendering */
    return (
        <React.Fragment>
            <Container>
                <PixiDrawableRect onEnd={handleSelection} color={edgeColor}>
                    <Edges
                        nodesById={graph.nodes}
                        edges={graph.edges}
                        edgeColor={edgeColor}
                        scale={scale}
                    />
                    <Nodes
                        nodes={nodes}
                        nodeSize={nodeSize}
                        edgeColor={edgeColor}
                        nodeColor={nodeColor}
                        scale={scale}
                        onClick={onNodesClick}
                    />
                    <Nodes
                        nodes={selectedNodes}
                        nodeSize={selectedNodeSize}
                        edgeColor={edgeColor}
                        nodeColor={selectedNodeColor}
                        scale={scale}
                    />
                </PixiDrawableRect>
            </Container>
        </React.Fragment>
    );
});
