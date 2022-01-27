import { Element } from "/transpiled/https://escad.dev/core/Element.js";
import { Hierarchy } from "/transpiled/https://escad.dev/core/Hierarchy.js";
import { checkTypeProperty } from "/transpiled/https://escad.dev/core/checkTypeProperty.js";
import { contextStack } from "/transpiled/https://escad.dev/core/ContextStack.js";
import { ExtensibleFunction } from "/transpiled/https://escad.dev/core/ExtensibleFunction.js";
import { CallHierarchy } from "/transpiled/https://escad.dev/core/CallHierarchy.js";
import { NameHierarchy } from "/transpiled/https://escad.dev/core/NameHierarchy.js";
export const Operation = {
    create: (name, func, { hierarchy, overrideHierarchy = true, showOutput = true } = {}) => {
        const that = Object.assign(new ExtensibleFunction((...args) => {
            const result = Element.create(contextStack.wrap(() => func(Element.create(args))));
            return Element.applyHierarchy(result, createHierarchy(result, args));
        }, {}, name), {
            type: "Operation",
            func,
            hierarchy,
            overrideHierarchy,
            showOutput,
        });
        return that;
        async function createHierarchy(result, args) {
            if (!overrideHierarchy) {
                return result.hierarchy;
            }
            return CallHierarchy.create({
                operator: await hierarchy ?? NameHierarchy.create({ name }),
                operands: await Promise.all(args.map((x) => Hierarchy.from(x))),
                result: showOutput ? await result.hierarchy : undefined,
                composable: true,
                linkedProducts: (await Hierarchy.from(result)).linkedProducts,
            });
        }
    },
    applyHierarchy: (operation, hierarchy) => Operation.create(operation.name, operation.func, {
        ...operation,
        hierarchy,
    }),
    isOperation: checkTypeProperty.string("Operation"),
};
export const GenericOperation = {
    create: (name, func, opts) => Operation.create(name, func, opts),
    applyHierarchy: (operation, hierarchy) => GenericOperation.create(operation.name, operation.func, {
        ...operation,
        hierarchy,
    }),
};
