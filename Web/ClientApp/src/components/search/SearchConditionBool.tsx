import React from "react";
import { Button } from "antd";
import SearchConditionContainer from "./SearchConditionContainer";
import { SearchConditionChangeCallback } from "./state";
import { SearchConditionAddButton } from "./SearchConditionAddButton";
import SearchConditionBoolList from "./SearchConditionBoolList";
import { PlusOutlined } from "@ant-design/icons";
import { api } from "state/grpc";

function SearchConditionBool({
    rootCondition,
    condition,
    onChange,
}: {
    rootCondition: api.IStrainCondition;
    condition: api.IStrainCondition;
    onChange: SearchConditionChangeCallback;
}) {
    let boolCondition = condition.bool;
    if (!boolCondition) return null;
    const isOr = boolCondition.operator === api.BoolOperator.OR;
    return (
        <React.Fragment>
            <SearchConditionContainer
                title="Boolean"
                condition={condition}
                extra={
                    <React.Fragment>
                        <SearchConditionAddButton
                            rootCondition={rootCondition}
                            condition={condition}
                            onChange={onChange}
                        >
                            <Button shape="circle" size="small" icon={<PlusOutlined />} />
                        </SearchConditionAddButton>
                        <Button type={isOr ? "primary" : "default"} size="small">
                            OR
                        </Button>
                    </React.Fragment>
                }
            >
                <SearchConditionBoolList
                    rootCondition={rootCondition}
                    condition={condition}
                    onChange={onChange}
                />
            </SearchConditionContainer>
        </React.Fragment>
    );
}

SearchConditionBool.propTypes = {};

SearchConditionBool.defaultProps = {};
export default SearchConditionBool;
