import { api } from "../../state/grpc";
import { map } from "lodash-es";

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
    return rootCondition;
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
    return rootCondition;
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
    return rootCondition;
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

export const keywordConditionInfo: {
    [key: string]: {
        title: string;
        valuesPlaceholder?: string;
        separators?: string[];
        enableAllOf?: boolean;
    };
} = {
    [api.KeywordStrainField.ACCESSION]: {
        title: "Accession",
        separators: [",", "\n"],
    },
    [api.KeywordStrainField.COUNTRY_CODE]: {
        title: "Country",
    },
    [api.KeywordStrainField.SNP_SPDI]: {
        title: "SPDI",
        separators: [","],
        enableAllOf: true,
    },
    [api.KeywordStrainField.GENE_ID]: {
        title: "Gene accession",
        separators: [","],
        enableAllOf: true,
    },
    [api.KeywordStrainField.GENE_LOCUS_TAG]: {
        title: "Gene locus tag",
        separators: [","],
        enableAllOf: true,
    },
    [api.KeywordStrainField.SNP_POSITION]: {
        title: "Snp position",
        separators: [","],
        enableAllOf: true,
    },
    [api.KeywordStrainField.INSERTION_SEQUENCE_NAME]: {
        title: "Insertion sequence name",
        separators: [","],
        enableAllOf: true,
    },
};

export const keywordDefault = map(keywordConditionInfo, (value, key) => ({
    title: keywordConditionInfo[key].title,
    default: () => ({
        negate: false,
        keyword: {
            field: Number(key),
            values: [],
        },
    }),
}));
console.log(keywordDefault);
