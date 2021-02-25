import React from "react";
import { Slider, Typography } from "antd";

interface PhylogeneticNetworkSettingsValue {
    precision: number;
}

function PhylogeneticNetworkSettings({
    disabled,
    onChange,
    value,
}: {
    value: PhylogeneticNetworkSettingsValue;
    onChange: (v: PhylogeneticNetworkSettingsValue) => any;
    disabled: boolean | undefined;
}) {
    return (
        <div>
            <Typography.Text>Network precision</Typography.Text>
            <Slider
                max={10}
                min={1}
                value={value.precision}
                disabled={disabled}
                onChange={(precision: number) => onChange({ ...value, precision })}
            />
        </div>
    );
}

PhylogeneticNetworkSettings.propTypes = {};
PhylogeneticNetworkSettings.defaultProps = {};
export default PhylogeneticNetworkSettings;
