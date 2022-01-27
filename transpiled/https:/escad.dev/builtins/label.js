import { Component, Element, NameHierarchy, Operation, } from "/transpiled/https://escad.dev/core/mod.js";
export const label = Component.create("label", 
// eslint-disable-next-line @typescript-eslint/no-unused-vars
(name, _show = true) => Operation.create("label", async (value) => Element.applyHierarchy(value, NameHierarchy.create({
    name,
    linkedProducts: (await value.hierarchy)?.linkedProducts,
})), { overrideHierarchy: false }), { showOutput: false });
