import React, { useState } from "react";
import { Button, Space } from "antd";
import {BoolOperator, StrainCondition} from "../../state/grpc/search_pb";
import SearchConditionBoolList from "./SearchConditionBoolList";
import { SearchConditionAddButton } from "./SearchConditionAddButton";

function SearchPanel(props: any) {
    const [state, setState] = useState({
        negate: false,
        bool: {
            operator: BoolOperator.AND,
            conditionsList: [
                {
                    negate: false,
                    accession: {
                        accessionNumberList: ["fdsdf"],
                    },
                },
            ],
        },
    } as StrainCondition.AsObject);
    return (
        <React.Fragment>
            <Space direction="vertical" style={{ width: "100%" }}>
                <SearchConditionBoolList
                    rootCondition={state}
                    condition={state}
                    onChange={(v) => setState(v)}
                />
                <SearchConditionAddButton>
                    <Button style={{ width: "100%" }}>Add filter</Button>
                </SearchConditionAddButton>
                <Button style={{ width: "100%" }} type="primary">
                    Search
                </Button>
            </Space>
        </React.Fragment>
    );
}

SearchPanel.propTypes = {};

SearchPanel.defaultProps = {};
export default SearchPanel;
