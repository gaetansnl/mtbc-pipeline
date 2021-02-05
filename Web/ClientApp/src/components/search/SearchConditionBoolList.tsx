import React from "react";
import {  StrainCondition } from "../../state/grpc/search_pb";
import { SearchConditionChangeCallback } from "./state";
import SearchConditionAccession from "./SearchConditionAccession";

function SearchConditionBoolList({
    rootCondition,
    condition,
    onChange,
}: {
    rootCondition: StrainCondition.AsObject;
    condition: StrainCondition.AsObject;
    onChange: SearchConditionChangeCallback;
}) {
    const boolCondition = condition?.bool;
    if (!boolCondition) return null;
    return (
        <React.Fragment>
            {boolCondition.conditionsList.map((condition) => {
                if (condition.accession)
                    return (
                        <SearchConditionAccession
                            rootCondition={rootCondition}
                            condition={condition}
                            onChange={onChange}
                        />
                    );
            })}
        </React.Fragment>
    );
}

SearchConditionBoolList.propTypes = {};

SearchConditionBoolList.defaultProps = {};
export default SearchConditionBoolList;
