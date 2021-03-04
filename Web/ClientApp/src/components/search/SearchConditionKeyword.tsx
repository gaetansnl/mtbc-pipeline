import React from "react";
import { Select } from "antd";
import SearchConditionContainer from "./SearchConditionContainer";
import { getDefaultHandlers, SearchConditionChangeCallback, updateCondition } from "./state";
import { api } from "state/grpc";

const keywordConditionInfo : {[key: number]: {title: string, valuesPlaceholder?: string}}={
    [api.KeywordStrainField.ACCESSION]:{
        title: "Accession number",
    },
    [api.KeywordStrainField.COUNTRY_CODE]:{
        title: "Country",
    },
    [api.KeywordStrainField.GENE_LOCUS_TAG]:{
        title: "Gene locus tag",
    }
}

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
    const fieldInfo = keywordCondition?.field != null && keywordConditionInfo[keywordCondition?.field];
    if(!fieldInfo) return null;
    return (
        <React.Fragment>
            <SearchConditionContainer
                title={fieldInfo.title}
                condition={condition}
                {...getDefaultHandlers(rootCondition, condition, onChange)}
            >
                <Select
                    mode="tags"
                    style={{ width: "100%" }}
                    value={keywordCondition?.values || []}
                    onChange={handleChange}
                    placeholder={fieldInfo.valuesPlaceholder || fieldInfo.title}
                />
            </SearchConditionContainer>
        </React.Fragment>
    );
}

SearchConditionKeyword.propTypes = {};

SearchConditionKeyword.defaultProps = {};
export default SearchConditionKeyword;
