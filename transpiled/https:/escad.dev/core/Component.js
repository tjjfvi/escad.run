import { CallHierarchy } from "/transpiled/https://escad.dev/core/CallHierarchy.js";
import { checkTypeProperty } from "/transpiled/https://escad.dev/core/checkTypeProperty.js";
import { contextStack } from "/transpiled/https://escad.dev/core/ContextStack.js";
import { ExtensibleFunction } from "/transpiled/https://escad.dev/core/ExtensibleFunction.js";
import { Hierarchy } from "/transpiled/https://escad.dev/core/Hierarchy.js";
import { NameHierarchy } from "/transpiled/https://escad.dev/core/NameHierarchy.js";
import { Thing } from "/transpiled/https://escad.dev/core/Thing.js";
export const Component = {
    isComponent: checkTypeProperty.string("Component"),
    create: (name, func, { hierarchy, overrideHierarchy = true, showOutput = true, info = {} } = {}) => {
        const that = Object.assign(new ExtensibleFunction((...args) => {
            const result = contextStack.wrap(() => func(...args));
            return Thing.applyHierarchy(result, createHierarchy(result, args));
        }, {}, name), {
            type: "Component",
            func,
            overrideHierarchy,
            hierarchy,
            showOutput,
            info,
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
                composable: false,
                linkedProducts: (await Hierarchy.from(result)).linkedProducts,
            });
        }
    },
    applyHierarchy: (component, hierarchy) => Component.create(component.name, component.func, {
        ...component,
        hierarchy,
    }),
};
export const GenericComponent = {
    create: (name, func, opts) => Component.create(name, func, opts),
    applyHierarchy: (component, hierarchy) => GenericComponent.create(component.name, component.func, {
        ...component,
        hierarchy,
    }),
};
