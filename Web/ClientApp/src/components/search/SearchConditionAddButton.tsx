import { Menu, Dropdown } from "antd";
import React, { ReactChild } from "react";
import { StrainCondition } from "../../state/grpc/search_pb";
export const SearchConditionAddButton = ({ children }: { children: ReactChild }) => {
    const menu = (
        <Menu>
            {Object.values(StrainCondition.ConditionCase).map((v) => {
                if (v === StrainCondition.ConditionCase.ACCESSION)
                    return <Menu.Item>Accession</Menu.Item>;
                if (v === StrainCondition.ConditionCase.BIOSAMPLE)
                    return <Menu.Item>Biosample</Menu.Item>;
                if (v === StrainCondition.ConditionCase.COUNTRY)
                    return <Menu.Item>Country</Menu.Item>;
                if (v === StrainCondition.ConditionCase.DATE) return <Menu.Item>Date</Menu.Item>;
                if (v === StrainCondition.ConditionCase.BOOL) return <Menu.Item>Boolean</Menu.Item>;
                if (v === StrainCondition.ConditionCase.GENE) return <Menu.Item>Gene</Menu.Item>;
                if (v === StrainCondition.ConditionCase.LINEAGE)
                    return <Menu.Item>Lineage</Menu.Item>;
                return null;
            })}
        </Menu>
    );
    return (
        <Dropdown overlay={menu} placement="bottomCenter" arrow>
            {children}
        </Dropdown>
    );
};
