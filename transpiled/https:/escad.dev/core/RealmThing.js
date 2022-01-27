import { Component } from "/transpiled/https://escad.dev/core/Component.js";
import { Operation } from "/transpiled/https://escad.dev/core/Operation.js";
import { Element } from "/transpiled/https://escad.dev/core/Element.js";
import { RealmElement } from "/transpiled/https://escad.dev/core/RealmElement.js";
import { RealmOperation } from "/transpiled/https://escad.dev/core/RealmOperation.js";
import { RealmComponent } from "/transpiled/https://escad.dev/core/RealmComponent.js";
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
    },
};
