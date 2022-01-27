import { checkTypeProperty } from "/transpiled/https://escad.dev/core/checkTypeProperty.js";
import { Hierarchy } from "/transpiled/https://escad.dev/core/Hierarchy.js";
export const ArrayHierarchy = {
    create: ({ children, linkedProducts = Hierarchy.flattenLinkedProducts(children), }) => ({
        type: "ArrayHierarchy",
        children,
        linkedProducts,
    }),
    from: async (array, raw = false) => ArrayHierarchy.create({
        children: await Promise.all(array.map((x) => Hierarchy.from(x, raw))),
    }),
    isArrayHierarchy: checkTypeProperty.string("ArrayHierarchy"),
};
