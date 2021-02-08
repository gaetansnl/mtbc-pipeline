import { Menu, Dropdown } from "antd";
import React, { ReactChild } from "react";
import { api } from "state/grpc";

const items: { title: string; default: api.IStrainCondition }[] = [
    {
        title: "Accession",
        default: {
            negate: false,
            accession: {
                accessionNumbers: [],
            },
        },
    },
    {
        title: "Biosample",
        default: {
            negate: false,
            biosample: {
                accessionNumbers: [],
            },
        },
    },
    {
        title: "Country",
        default: {
            negate: false,
            country: {
                isoCodes: [],
            },
        },
    },
    {
        title: "Date",
        default: {
            negate: false,
            date: {
                from: null,
                to: null,
            },
        },
    },
    {
        title: "Boolean",
        default: {
            negate: false,
            bool: {
                operator: api.BoolOperator.OR,
                conditions: [],
            },
        },
    },
    {
        title: "Gene",
        default: {
            negate: false,
            gene: {
                accessionNumbers: [],
            },
        },
    },
    {
        title: "Lineage",
        default: {
            negate: false,
            lineage: {
                classificationName: "",
                name: "",
            },
        },
    },
];

export const SearchConditionAddButton = ({ children }: { children: ReactChild }) => {
    const menu = (
        <Menu>
            {items.map((v) => {
                return <Menu.Item>{v.title}</Menu.Item>;
            })}
        </Menu>
    );
    return (
        <Dropdown overlay={menu} placement="bottomCenter" arrow>
            {children}
        </Dropdown>
    );
};
