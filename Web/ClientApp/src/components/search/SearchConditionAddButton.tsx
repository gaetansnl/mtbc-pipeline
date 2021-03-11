import { Dropdown, Menu } from "antd";
import React, { ReactChild } from "react";
import { api } from "state/grpc";
import { addCondition, keywordDefault, SearchConditionChangeCallback } from "./state";

const items: { title: string; subtitle?: string; default: () => api.IStrainCondition }[] = [
    {
        title: "Boolean",
        subtitle: "Combine other filters",
        default: () => ({
            negate: false,
            bool: {
                operator: api.BoolOperator.OR,
                conditions: [],
            },
        }),
    },
    ...keywordDefault,
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
                        {v.subtitle && (
                            <small>
                                <br />
                                {v.subtitle}
                            </small>
                        )}
                    </Menu.Item>
                );
            })}
        </Menu>
    );
    return (
        <Dropdown overlay={menu} placement="bottomCenter" arrow trigger={["click"]}>
            {children}
        </Dropdown>
    );
};
