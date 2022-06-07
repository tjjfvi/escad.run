import { Component } from "/transpiled/https://escad.dev/core/chaining/Component.js";
import { Operation } from "/transpiled/https://escad.dev/core/chaining/Operation.js";
import { Element } from "/transpiled/https://escad.dev/core/chaining/Element.js";
import { RealmElement } from "/transpiled/https://escad.dev/core/chaining/RealmElement.js";
import { RealmOperation } from "/transpiled/https://escad.dev/core/chaining/RealmOperation.js";
import { RealmComponent } from "/transpiled/https://escad.dev/core/chaining/RealmComponent.js";
export const RealmThing = {
  create: (realm, thing) => {
    if (Element.isElement(thing)) {
      return RealmElement.create(realm, thing);
    }

    if (Operation.isOperation(thing)) {
      return RealmOperation.create(realm, thing);
    }

    if (Component.isComponent(thing)) {
      return RealmComponent.create(realm, thing);
    }

    throw new Error("Invalid thing passed to RealmThing.create");
  }
};