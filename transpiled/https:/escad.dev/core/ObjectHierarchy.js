import { checkTypeProperty } from "/transpiled/https://escad.dev/core/checkTypeProperty.js";
import { Hierarchy } from "/transpiled/https://escad.dev/core/Hierarchy.js";
export const ObjectHierarchy = {
    create: ({ children, linkedProducts = Hierarchy.flattenLinkedProducts(Object.values(children)), }) => ({
        type: "ObjectHierarchy",
        children,
        linkedProducts,
    }),
    from: async (object, raw = false) => ObjectHierarchy.create({
        children: Object.fromEntries(await Promise.all(Object.entries(object).map(async ([key, value]) => [key, await Hierarchy.from(value, raw)]))),
    }),
    isObjectHierarchy: checkTypeProperty.string("ObjectHierarchy"),
};
