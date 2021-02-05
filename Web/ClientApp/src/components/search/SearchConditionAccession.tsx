import React from "react";
import { Input, Select } from "antd";
import SearchConditionContainer from "./SearchConditionContainer";
import { StrainCondition } from "../../state/grpc/search_pb";
import {
    getDefaultHandlers,
    SearchConditionChangeCallback,
    updateCondition,
} from "./state";

function SearchConditionAccession({
    rootCondition,
    condition,
    onChange,
}: {
    rootCondition: StrainCondition.AsObject;
    condition: StrainCondition.AsObject;
    onChange: SearchConditionChangeCallback;
}) {
    const accessionCondition = condition.accession;
    const handleChange = (accessionNumberList: string[]) => {
        onChange(
            updateCondition(rootCondition, condition, {
                ...condition,
                accession: {
                    accessionNumberList,
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
                    value={accessionCondition?.accessionNumberList || []}
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
