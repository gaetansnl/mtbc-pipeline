import { api } from "../../state/grpc";

export type SearchConditionChangeCallback = (condition: api.IStrainCondition) => any;

export function updateCondition(
    rootCondition: api.IStrainCondition,
    condition: api.IStrainCondition,
    newCondition: api.IStrainCondition
): api.IStrainCondition {
    if (rootCondition === condition) return { ...condition, ...newCondition };
    if (rootCondition.bool) {
        return {
            ...rootCondition,
            bool: {
                ...rootCondition.bool,
                conditions: rootCondition.bool.conditions?.map((v) => {
                    return updateCondition(v, condition, newCondition);
                }),
            },
        };
    }
    throw new Error("Not found");
}

export function removeCondition(
    rootCondition: api.IStrainCondition,
    condition: api.IStrainCondition
): api.IStrainCondition {
    if (rootCondition === condition) throw new Error("Can't remove root");
    if (rootCondition.bool) {
        return {
            ...rootCondition,
            bool: {
                ...rootCondition.bool,
                conditions: rootCondition.bool.conditions
                    ?.filter((v) => v !== condition)
                    .map((v) => removeCondition(v, condition)),
            },
        };
    }
    throw new Error("Not found");
}

export function addCondition(
    rootCondition: api.IStrainCondition,
    condition: api.IStrainCondition,
    newCondition: api.IStrainCondition
): api.IStrainCondition {
    if (rootCondition.bool && rootCondition === condition) {
        return {
            ...rootCondition,
            bool: {
                ...rootCondition.bool,
                conditions: [...(rootCondition.bool.conditions || []), newCondition],
            },
        };
    }
    if (rootCondition.bool) {
        return {
            ...rootCondition,
            bool: {
                ...rootCondition.bool,
                conditions: rootCondition.bool.conditions?.map((v) =>
                    addCondition(v, condition, newCondition)
                ),
            },
        };
    }
    throw new Error("Not found");
}

export function getDefaultHandlers(
    rootCondition: api.IStrainCondition,
    condition: api.IStrainCondition,
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

export function createDate(value: Date) {
    return {
        seconds: Math.floor(value.getTime() / 1000),
        nanos: value.getMilliseconds() * 1000000,
    };
}

export function toDate(date: { seconds: number; nanos: number }) {
    return new Date(date.seconds * 1000 + date.nanos / 1000000);
}
