import { Element } from "/transpiled/https://escad.dev/core/chaining/Element.js";
import { Component } from "/transpiled/https://escad.dev/core/chaining/Component.js";
import { Operation } from "/transpiled/https://escad.dev/core/chaining/Operation.js";
import { Realm } from "/transpiled/https://escad.dev/core/chaining/Realm.js";
import { ExtensibleFunction } from "/transpiled/https://escad.dev/core/chaining/ExtensibleFunction.js";
import { RealmComponent } from "/transpiled/https://escad.dev/core/chaining/RealmComponent.js";
export const RealmElement = {
    create: (realm, element) => {
        const chainables = realm.chainables;
        const that = Object.assign(new ExtensibleFunction((arg) => {
            if (!arg || Realm.isRealm(arg)) {
                return that;
            }
            if (Operation.isOperation(arg)) {
                return RealmElement.create(realm, arg(that));
            }
            if (Component.isComponent(arg)) {
                return RealmComponent.create(realm, Component.create(arg.name + "'", (...args) => that(arg(...args)), { overrideHierarchy: false }));
            }
            if (Element.isElement(arg)) {
                return RealmElement.create(realm, Element.concat(that, arg));
            }
            throw new Error("Invalid argument to RealmElement");
        }, {
            get: (target, prop) => {
                if (prop === "_")
                    return that;
                if (prop in target) {
                    return target[prop];
                }
                if (!(prop in chainables) || typeof prop === "symbol") {
                    return;
                }
                const val = chainables[prop];
                return that(val);
            },
        }), element);
        return that;
    },
};
