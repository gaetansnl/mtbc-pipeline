import React from "react";
import { Slider, Typography } from "antd";

function PhylogeneticNetworkSettings({ disabled }: any) {
    return (
        <div>
            <Typography.Text>Network precision</Typography.Text>
            <Slider max={10} min={1} defaultValue={2} disabled={disabled} />
        </div>
    );
}

PhylogeneticNetworkSettings.propTypes = {};
PhylogeneticNetworkSettings.defaultProps = {};
export default PhylogeneticNetworkSettings;
