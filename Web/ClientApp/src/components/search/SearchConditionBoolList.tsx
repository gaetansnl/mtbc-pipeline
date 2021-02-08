import React from "react";
import { SearchConditionChangeCallback } from "./state";
import SearchConditionAccession from "./SearchConditionAccession";
import { api } from "state/grpc";

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
            {boolCondition.conditions?.map((condition) => {
                if (condition.accession)
                    return (
                        <SearchConditionAccession
                            rootCondition={rootCondition}
                            condition={condition}
                            onChange={onChange}
                        />
                    );
                return null;
            })}
        </React.Fragment>
    );
}

SearchConditionBoolList.propTypes = {};

SearchConditionBoolList.defaultProps = {};
export default SearchConditionBoolList;
