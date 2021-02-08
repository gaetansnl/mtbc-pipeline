import React from "react";
import { Button, Card, Space } from "antd";
import { DeleteOutlined } from "@ant-design/icons";
import { api } from "state/grpc";

function SearchConditionContainer({
    title,
    extra,
    children,
    onRemove,
    onNegateChange,
    condition,
}: {
    title: string;
    condition: api.IStrainCondition;
    extra?: any;
    children?: any;
    onRemove?: () => any;
    onNegateChange?: (negate: boolean) => any;
}) {
    return (
        <React.Fragment>
            <Card
                size="small"
                title={title}
                extra={
                    <Space>
                        {extra}
                        <Button
                            onClick={() => onNegateChange && onNegateChange(!condition.negate)}
                            type={condition.negate ? "primary" : "default"}
                            size="small"
                        >
                            NOT
                        </Button>
                        <Button size="small" icon={<DeleteOutlined />} onClick={onRemove} />
                    </Space>
                }
            >
                {children}
            </Card>
        </React.Fragment>
    );
}

SearchConditionContainer.propTypes = {};

SearchConditionContainer.defaultProps = {};
export default SearchConditionContainer;
