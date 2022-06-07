import { ExtensibleFunction } from "/transpiled/https://escad.dev/core/chaining/ExtensibleFunction.js";
import { RealmThing } from "/transpiled/https://escad.dev/core/chaining/RealmThing.js";
export const RealmComponent = {
  create: (realm, component) => {
    const that = Object.assign(new ExtensibleFunction((...args) => RealmThing.create(realm, component(...args)), {}, component.name), {
      type: "Component",
      func: component.func,
      overrideHierarchy: component.overrideHierarchy,
      hierarchy: component.hierarchy,
      info: component.info
    });
    return that;
  }
};