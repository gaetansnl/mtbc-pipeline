import React, {useState} from "react";
import {Button, Space} from "antd";
import SearchConditionBoolList from "./SearchConditionBoolList";
import {SearchConditionAddButton} from "./SearchConditionAddButton";
import {api} from "state/grpc";

function SearchPanel({onSearch}: { onSearch: (value: api.IStrainCondition) => any }) {
    const [state, setState] = useState<api.IStrainCondition>({
        negate: false,
        bool: {
            operator: api.BoolOperator.AND,
            conditions: [
                {
                    negate: false,
                    keyword: {
                        field: api.KeywordStrainField.ACCESSION,
                        values: ['ERR245662']
                    },
                },
            ],
        },
    });

    return (
        <React.Fragment>
            <Space direction="vertical" style={{width: "100%"}}>
                <SearchConditionBoolList
                    rootCondition={state}
                    condition={state}
                    onChange={(v) => setState(v)}
                />
                <SearchConditionAddButton
                    rootCondition={state}
                    condition={state}
                    onChange={(v) => setState(v)}
                >
                    <Button style={{width: "100%"}}>Add filter</Button>
                </SearchConditionAddButton>
                <Button style={{width: "100%"}} type="primary" onClick={() => onSearch && onSearch(state)}>
                    Search
                </Button>
            </Space>
        </React.Fragment>
    );
}

SearchPanel.propTypes = {};

SearchPanel.defaultProps = {};
export default SearchPanel;
