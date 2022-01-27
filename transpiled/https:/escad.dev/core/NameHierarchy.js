import { checkTypeProperty } from "/transpiled/https://escad.dev/core/checkTypeProperty.js";
export const NameHierarchy = {
    create: ({ name: text, linkedProducts, }) => ({
        type: "NameHierarchy",
        name: text,
        linkedProducts,
    }),
    isNameHierarchy: checkTypeProperty.string("NameHierarchy"),
};
