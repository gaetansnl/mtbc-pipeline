import { Tooltip, Typography } from "antd";

function SpoligotypingDisplay({ spoligotyping }: { spoligotyping: boolean[] }) {
    const copyText = spoligotyping.map((v) => (v ? "■" : "□")).join("");
    return (
        <div>
            <Typography.Text
                copyable={{ text: copyText }}
                style={{ cursor: "default", wordBreak: "break-word" }}
            >
                {spoligotyping.map((v, index) => {
                    return <Tooltip title={index + 1}>{v ? "■" : "□"}</Tooltip>;
                })}
            </Typography.Text>
        </div>
    );
}

export default SpoligotypingDisplay;
