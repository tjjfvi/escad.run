import { CallHierarchy, Hierarchy, NameHierarchy } from "/transpiled/https://escad.dev/core/hierarchy/mod.js";
import { checkTypeProperty, contextStack } from "/transpiled/https://escad.dev/core/utils/mod.js";
import { Element } from "/transpiled/https://escad.dev/core/chaining/Element.js";
import { ExtensibleFunction } from "/transpiled/https://escad.dev/core/chaining/ExtensibleFunction.js";
export const Operation = {
  create: (name, func, {
    hierarchy,
    overrideHierarchy = true,
    showOutput = true
  } = {}) => {
    const that = Object.assign(new ExtensibleFunction((...args) => {
      const result = Element.create(contextStack.wrap(() => func(Element.create(args))));
      return Element.applyHierarchy(result, createHierarchy(result, args));
    }, {}, name), {
      type: "Operation",
      func,
      hierarchy,
      overrideHierarchy,
      showOutput
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
        composable: true,
        linkedProducts: (await Hierarchy.from(result)).linkedProducts
      });
    }
  },
  applyHierarchy: (operation, hierarchy) => Operation.create(operation.name, operation.func, { ...operation,
    hierarchy
  }),
  isOperation: checkTypeProperty.string("Operation")
};
export const GenericOperation = {
  create: (name, func, opts) => Operation.create(name, func, opts),
  applyHierarchy: (operation, hierarchy) => GenericOperation.create(operation.name, operation.func, { ...operation,
    hierarchy
  })
};