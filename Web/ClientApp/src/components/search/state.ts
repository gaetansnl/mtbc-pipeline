import { StrainCondition } from "../../state/grpc/search_pb";

export type SearchConditionChangeCallback = (condition: StrainCondition.AsObject) => any;

export function updateCondition(
    rootCondition: StrainCondition.AsObject,
    condition: StrainCondition.AsObject,
    newCondition: StrainCondition.AsObject
): StrainCondition.AsObject {
    if (rootCondition === condition) return { ...condition, ...newCondition };
    if (rootCondition.bool) {
        return {
            ...rootCondition,
            bool: {
                ...rootCondition.bool,
                conditionsList: rootCondition.bool.conditionsList.map((v) => {
                    return updateCondition(v, condition, newCondition);
                }),
            },
        };
    }
    throw new Error("Not found");
}

export function removeCondition(
    rootCondition: StrainCondition.AsObject,
    condition: StrainCondition.AsObject
): StrainCondition.AsObject {
    if (rootCondition === condition) throw new Error("Can't remove root");
    if (rootCondition.bool) {
        return {
            ...rootCondition,
            bool: {
                ...rootCondition.bool,
                conditionsList: rootCondition.bool.conditionsList
                    .filter((v) => v !== condition)
                    .map((v) => removeCondition(v, condition)),
            },
        };
    }
    throw new Error("Not found");
}

export function getDefaultHandlers(
    rootCondition: StrainCondition.AsObject,
    condition: StrainCondition.AsObject,
    callback: SearchConditionChangeCallback
) {
    return {
        onRemove: () => {
            callback(removeCondition(rootCondition, condition));
        },
        onNegateChange: (negate: boolean) => {
            callback(updateCondition(rootCondition, condition, { ...condition, negate }));
        },
    };
}
