import React, { useState } from "react";
import { Button, Space } from "antd";
import SearchConditionBoolList from "./SearchConditionBoolList";
import { SearchConditionAddButton } from "./SearchConditionAddButton";
import { api } from "state/grpc";

function SearchPanel(props: any) {
    const [state, setState] = useState({
        negate: false,
        bool: {
            operator: api.BoolOperator.AND,
            conditions: [
                {
                    negate: false,
                    accession: {
                        accessionNumbers: ["fdsdf"],
                    },
                },
            ],
        },
    } as api.IStrainCondition);
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
