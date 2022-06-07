import { ExtensibleFunction } from "/transpiled/https://escad.dev/core/chaining/ExtensibleFunction.js";
import { Operation } from "/transpiled/https://escad.dev/core/chaining/Operation.js";
import { Component } from "/transpiled/https://escad.dev/core/chaining/Component.js";
import { Realm } from "/transpiled/https://escad.dev/core/chaining/Realm.js";
import { RealmThing } from "/transpiled/https://escad.dev/core/chaining/RealmThing.js";
import { RealmComponent } from "/transpiled/https://escad.dev/core/chaining/RealmComponent.js";
export const RealmOperation = {
  create: (realm, operation) => {
    const {
      chainables
    } = realm;
    const that = Object.assign(new ExtensibleFunction((...args) => {
      if (Realm.isRealm(args[0])) {
        return that;
      }

      if (Operation.isOperation(args[0])) {
        return RealmOperation.create(realm, Operation.create(operation.name + "+" + args[0].name, a => that(args[0](...a.val)), {
          overrideHierarchy: false
        }));
      }

      if (Component.isComponent(args[0])) {
        return RealmComponent.create(realm, Component.create(args[0].name + "+" + operation.name, (...a) => that(args[0](...a)), {
          overrideHierarchy: false
        }));
      }

      return RealmThing.create(realm, operation(...args));
    }, {
      get: (target, prop) => {
        if (prop === "_") return that;

        if (prop in target) {
          return target[prop];
        }

        if (!(prop in chainables) || typeof prop === "symbol") {
          return;
        }

        const val = chainables[prop];
        return that(val);
      }
    }, operation.name), {
      type: "Operation",
      func: operation.func,
      hierarchy: operation.hierarchy,
      overrideHierarchy: operation.overrideHierarchy
    });
    return that;
  }
};