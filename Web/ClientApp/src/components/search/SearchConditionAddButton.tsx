import {Dropdown, Menu} from "antd";
import React, {ReactChild} from "react";
import {api} from "state/grpc";
import {addCondition, SearchConditionChangeCallback} from "./state";

const items: { title: string; default: () => api.IStrainCondition }[] = [
    {
        title: "Accession",
        default: () => ({
            negate: false,
            keyword: {
                field: api.KeywordStrainField.ACCESSION,
                values: []
            },
        }),
    },
    {
        title: "Country",
        default: () => ({
            negate: false,
            keyword: {
                field: api.KeywordStrainField.COUNTRY_CODE,
                values: []
            },
        }),
    },
    {
        title: "Boolean",
        default: () => ({
            negate: false,
            bool: {
                operator: api.BoolOperator.OR,
                conditions: [],
            },
        }),
    },
    {
        title: "Gene Tag",
        default: () => ({
            negate: false,
            keyword: {
                field: api.KeywordStrainField.GENE_LOCUS_TAG,
                values: []
            },
        }),
    }
];

export const SearchConditionAddButton = ({
    children,
    rootCondition,
    condition,
    onChange,
}: {
    children: ReactChild;
    rootCondition: api.IStrainCondition;
    condition: api.IStrainCondition;
    onChange: SearchConditionChangeCallback;
}) => {
    const menu = (
        <Menu>
            {items.map((v) => {
                return (
                    <Menu.Item
                        onClick={() =>
                            onChange(addCondition(rootCondition, condition, v.default()))
                        }
                    >
                        {v.title}
                    </Menu.Item>
                );
            })}
        </Menu>
    );
    return (
        <Dropdown overlay={menu} placement="bottomCenter" arrow>
            {children}
        </Dropdown>
    );
};
