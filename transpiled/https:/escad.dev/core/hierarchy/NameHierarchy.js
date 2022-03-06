import { checkTypeProperty } from "/transpiled/https://escad.dev/core/utils/mod.js";
export const NameHierarchy = {
    create: ({ name: text, linkedProducts, }) => ({
        type: "NameHierarchy",
        name: text,
        linkedProducts,
    }),
    isNameHierarchy: checkTypeProperty.string("NameHierarchy"),
};
