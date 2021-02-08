import React from "react";
import { Select } from "antd";
import SearchConditionContainer from "./SearchConditionContainer";
import { getDefaultHandlers, SearchConditionChangeCallback, updateCondition } from "./state";
import { api } from "state/grpc";

function SearchConditionAccession({
    rootCondition,
    condition,
    onChange,
}: {
    rootCondition: api.IStrainCondition;
    condition: api.IStrainCondition;
    onChange: SearchConditionChangeCallback;
}) {
    const accessionCondition = condition.accession;
    const handleChange = (accessionNumbers: string[]) => {
        onChange(
            updateCondition(rootCondition, condition, {
                ...condition,
                accession: {
                    accessionNumbers,
                },
            })
        );
    };
    return (
        <React.Fragment>
            <SearchConditionContainer
                title="Accession"
                condition={condition}
                {...getDefaultHandlers(rootCondition, condition, onChange)}
            >
                <Select
                    mode="tags"
                    style={{ width: "100%" }}
                    value={accessionCondition?.accessionNumbers || []}
                    onChange={handleChange}
                    placeholder="Accession number"
                />
            </SearchConditionContainer>
        </React.Fragment>
    );
}

SearchConditionAccession.propTypes = {};

SearchConditionAccession.defaultProps = {};
export default SearchConditionAccession;
