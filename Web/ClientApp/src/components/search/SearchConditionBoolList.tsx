import React from "react";
import { SearchConditionChangeCallback } from "./state";
import SearchConditionKeyword from "./SearchConditionKeyword";
import { api } from "state/grpc";
import { Space } from "antd";
import SearchConditionBool from "./SearchConditionBool";

function SearchConditionBoolList({
    rootCondition,
    condition,
    onChange,
}: {
    rootCondition: api.IStrainCondition;
    condition: api.IStrainCondition;
    onChange: SearchConditionChangeCallback;
}) {
    const boolCondition = condition?.bool;
    if (!boolCondition) return null;
    return (
        <React.Fragment>
            <Space direction="vertical" style={{ width: "100%" }}>
                {boolCondition.conditions?.map((condition) => {
                    if (condition.keyword)
                        return (
                            <SearchConditionKeyword
                                rootCondition={rootCondition}
                                condition={condition}
                                onChange={onChange}
                            />
                        );
                    if (condition.bool)
                        return (
                            <SearchConditionBool
                                rootCondition={rootCondition}
                                condition={condition}
                                onChange={onChange}
                            />
                        );
                    return null;
                })}
            </Space>
        </React.Fragment>
    );
}

SearchConditionBoolList.propTypes = {};

SearchConditionBoolList.defaultProps = {};
export default SearchConditionBoolList;
