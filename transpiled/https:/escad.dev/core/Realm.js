import { checkTypeProperty } from "/transpiled/https://escad.dev/core/checkTypeProperty.js";
import { Element } from "/transpiled/https://escad.dev/core/Element.js";
import { ExtensibleFunction } from "/transpiled/https://escad.dev/core/ExtensibleFunction.js";
import { RealmElement } from "/transpiled/https://escad.dev/core/RealmElement.js";
import { RealmThing } from "/transpiled/https://escad.dev/core/RealmThing.js";
import { Thing } from "/transpiled/https://escad.dev/core/Thing.js";
export const Realm = {
    create: (chainablesFn) => {
        let chainables;
        const that = Object.assign(new ExtensibleFunction((...args) => {
            if (args.length !== 1) {
                return RealmElement.create(that, Element.create(args));
            }
            if (Thing.isThing(args[0])) {
                return RealmThing.create(that, args[0]);
            }
            return RealmElement.create(that, Element.create(args[0]));
        }, {
            get: (target, prop) => {
                if (prop === "_")
                    return that;
                if (prop in target) {
                    return target[prop];
                }
                chainables ??= chainablesFn();
                if (prop === "chainables") {
                    return chainables;
                }
                if (!(prop in chainables) || typeof prop === "symbol") {
                    return;
                }
                const val = chainables[prop];
                return that(val);
            },
        }), {
            type: "Realm",
        });
        return that;
    },
    isRealm: checkTypeProperty.string("Realm"),
};
