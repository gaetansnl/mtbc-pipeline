import React from "react";
import { Button, Select } from "antd";
import SearchConditionContainer from "./SearchConditionContainer";
import { getDefaultHandlers, keywordConditionInfo, SearchConditionChangeCallback, updateCondition } from "./state";
import { api } from "state/grpc";

function SearchConditionKeyword({
    rootCondition,
    condition,
    onChange,
}: {
    rootCondition: api.IStrainCondition;
    condition: api.IStrainCondition;
    onChange: SearchConditionChangeCallback;
}) {
    const keywordCondition = condition.keyword;
    const handleChange = (values: string[]) => {
        onChange(
            updateCondition(rootCondition, condition, {
                ...condition,
                keyword: {
                    ...condition?.keyword,
                    values,
                },
            })
        );
    };
    const toggleAllOf = () => {
        onChange(
            updateCondition(rootCondition, condition, {
                ...condition,
                keyword: {
                    ...condition?.keyword,
                    allOf: !condition?.keyword?.allOf,
                },
            })
        );
    };
    const fieldInfo =
        keywordCondition?.field != null && keywordConditionInfo[keywordCondition?.field];
    if (!fieldInfo) return null;
    return (
        <React.Fragment>
            <SearchConditionContainer
                title={fieldInfo.title}
                condition={condition}
                extra={
                    fieldInfo.enableAllOf && (
                        <Button
                            size="small"
                            type={keywordCondition?.allOf ? "primary" : "default"}
                            onClick={toggleAllOf}
                        >
                            ALL OF
                        </Button>
                    )
                }
                {...getDefaultHandlers(rootCondition, condition, onChange)}
            >
                <Select
                    maxTagCount="responsive"
                    mode="tags"
                    style={{ width: "100%" }}
                    value={keywordCondition?.values || []}
                    onChange={handleChange}
                    tokenSeparators={fieldInfo.separators}
                    placeholder={fieldInfo.valuesPlaceholder || fieldInfo.title}
                />
            </SearchConditionContainer>
        </React.Fragment>
    );
}

SearchConditionKeyword.propTypes = {};

SearchConditionKeyword.defaultProps = {};
export default SearchConditionKeyword;
