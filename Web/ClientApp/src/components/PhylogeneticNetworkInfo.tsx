import React from "react";
import { Text } from "@inlet/react-pixi";
import { TextStyle } from "pixi.js";

function PhylogeneticNetworkInfo({ graph, zoomLevel }: any) {
    return (
        <Text
            text={`Total strains ${graph.visibleCount} - Total nodes ${
                graph.visibleCount + graph.hiddenCount
            } - Total edges ${graph.edges.length} - Zoom ${Math.round(zoomLevel * 10) / 10}`}
            x={10}
            y={10}
            style={
                new TextStyle({
                    fontSize: 10,
                    fontWeight: "400",
                    fill: "#ffffff",
                })
            }
        />
    );
}

PhylogeneticNetworkInfo.propTypes = {};

PhylogeneticNetworkInfo.defaultProps = {};
export default PhylogeneticNetworkInfo;
