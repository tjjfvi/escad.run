import { checkTypeProperty } from "/transpiled/https://escad.dev/core/utils/mod.js";
export const ValueHierarchy = {
    create: ({ value, linkedProducts, }) => ({
        type: "ValueHierarchy",
        value,
        linkedProducts,
    }),
    from: (value) => ValueHierarchy.create({
        value: (value === undefined
            ? { undefined: true }
            : typeof value === "symbol"
                ? { symbol: value.description }
                : value),
    }),
    isValueHierarchy: checkTypeProperty.string("ValueHierarchy"),
};
