import React from "react";
import { Button } from "antd";
import SearchConditionContainer from "./SearchConditionContainer";
import {BoolOperator, StrainCondition} from "../../state/grpc/search_pb";
import { SearchConditionChangeCallback } from "./state";
import { SearchConditionAddButton } from "./SearchConditionAddButton";
import SearchConditionBoolList from "./SearchConditionBoolList";
import { PlusOutlined } from "@ant-design/icons";

function SearchConditionBool({
    rootCondition,
    condition,
    onChange,
}: {
    rootCondition: StrainCondition.AsObject;
    condition: StrainCondition.AsObject;
    onChange: SearchConditionChangeCallback;
}) {
    let boolCondition = condition.bool;
    if(!boolCondition) return null;
    const isOr = boolCondition.operator === BoolOperator.OR;
    return (
        <React.Fragment>
            <SearchConditionContainer
                title="Boolean"
                condition={condition}
                extra={
                    <React.Fragment>
                        <SearchConditionAddButton>
                            <Button shape="circle" size="small" icon={<PlusOutlined />} />
                        </SearchConditionAddButton>
                        <Button type={isOr ? "primary" : "default"} size="small">
                            OR
                        </Button>
                    </React.Fragment>
                }
            >
                <SearchConditionBoolList rootCondition={rootCondition} condition={condition} onChange={onChange} />
            </SearchConditionContainer>
        </React.Fragment>
    );
}

SearchConditionBool.propTypes = {};

SearchConditionBool.defaultProps = {};
export default SearchConditionBool;
