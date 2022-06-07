import { Component, Element, GenericOperation } from "/transpiled/https://escad.dev/core/chaining/mod.js";
import { NameHierarchy } from "/transpiled/https://escad.dev/core/hierarchy/mod.js";
export const label = Component.create("label", // eslint-disable-next-line @typescript-eslint/no-unused-vars
(name, _show = true) => GenericOperation.create("label", async value => Element.applyHierarchy(value, NameHierarchy.create({
  name,
  linkedProducts: (await value.hierarchy)?.linkedProducts
})), {
  overrideHierarchy: false
}), {
  showOutput: false
});