import { checkTypeProperty, contextStack } from "/transpiled/https://escad.dev/core/utils/mod.js";
import { CallHierarchy, Hierarchy, NameHierarchy } from "/transpiled/https://escad.dev/core/hierarchy/mod.js";
import { ExtensibleFunction } from "/transpiled/https://escad.dev/core/chaining/ExtensibleFunction.js";
import { Thing } from "/transpiled/https://escad.dev/core/chaining/Thing.js";
export const Component = {
  isComponent: checkTypeProperty.string("Component"),
  create: (name, func, {
    hierarchy,
    overrideHierarchy = true,
    showOutput = true,
    info = {}
  } = {}) => {
    const that = Object.assign(new ExtensibleFunction((...args) => {
      const result = contextStack.wrap(() => func(...args));
      return Thing.applyHierarchy(result, createHierarchy(result, args));
    }, {}, name), {
      type: "Component",
      func,
      overrideHierarchy,
      hierarchy,
      showOutput,
      info
    });
    return that;

    async function createHierarchy(result, args) {
      if (!overrideHierarchy) {
        return result.hierarchy;
      }

      return CallHierarchy.create({
        operator: (await hierarchy) ?? NameHierarchy.create({
          name
        }),
        operands: await Promise.all(args.map(x => Hierarchy.from(x))),
        result: showOutput ? await result.hierarchy : undefined,
        composable: false,
        linkedProducts: (await Hierarchy.from(result)).linkedProducts
      });
    }
  },
  applyHierarchy: (component, hierarchy) => Component.create(component.name, component.func, { ...component,
    hierarchy
  })
};
export const GenericComponent = {
  create: (name, func, opts) => Component.create(name, func, opts),
  applyHierarchy: (component, hierarchy) => GenericComponent.create(component.name, component.func, { ...component,
    hierarchy
  })
};