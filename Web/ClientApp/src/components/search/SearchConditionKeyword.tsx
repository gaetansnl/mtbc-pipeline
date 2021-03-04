import React from "react";
import { Button, Select } from "antd";
import SearchConditionContainer from "./SearchConditionContainer";
import { getDefaultHandlers, SearchConditionChangeCallback, updateCondition } from "./state";
import { api } from "state/grpc";

const keywordConditionInfo: {
    [key: number]: {
        title: string;
        valuesPlaceholder?: string;
        separators?: string[];
        enableAllOf?: boolean;
    };
} = {
    [api.KeywordStrainField.ACCESSION]: {
        title: "Accession number",
        separators: [",", "\n"],
    },
    [api.KeywordStrainField.COUNTRY_CODE]: {
        title: "Country",
    },
    [api.KeywordStrainField.SNP_SPDI]: {
        title: "SPDI",
        separators: [","],
        enableAllOf: true,
    },
};

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
