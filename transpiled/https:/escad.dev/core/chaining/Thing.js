import { Component } from "/transpiled/https://escad.dev/core/chaining/Component.js";
import { Operation } from "/transpiled/https://escad.dev/core/chaining/Operation.js";
import { Element } from "/transpiled/https://escad.dev/core/chaining/Element.js";
export const Thing = {
  isThing: value => Element.isElement(value) || Component.isComponent(value) || Operation.isOperation(value),
  applyHierarchy: (thing, hierarchy) => {
    if (Element.isElement(thing)) {
      return Element.applyHierarchy(thing, hierarchy);
    }

    if (Operation.isOperation(thing)) {
      return Operation.applyHierarchy(thing, hierarchy);
    }

    if (Component.isComponent(thing)) {
      return Component.applyHierarchy(thing, hierarchy);
    }

    throw new Error("Invalid thing passed to RealmThing.create");
  },
  stripRealm: thing => Thing.applyHierarchy(thing, thing.hierarchy)
};