import { HashProduct, Product } from "/transpiled/https://escad.dev/core/product/mod.js";
import { Component, Element, Operation } from "/transpiled/https://escad.dev/core/chaining/mod.js";
import { artifactManager } from "/transpiled/https://escad.dev/core/artifacts/mod.js";
import { ArrayHierarchy } from "/transpiled/https://escad.dev/core/hierarchy/ArrayHierarchy.js";
import { CallHierarchy } from "/transpiled/https://escad.dev/core/hierarchy/CallHierarchy.js";
import { ObjectHierarchy } from "/transpiled/https://escad.dev/core/hierarchy/ObjectHierarchy.js";
import { NameHierarchy } from "/transpiled/https://escad.dev/core/hierarchy/NameHierarchy.js";
import { ValueHierarchy } from "/transpiled/https://escad.dev/core/hierarchy/ValueHierarchy.js";
export const Hierarchy = {
  isHierarchy: value => ObjectHierarchy.isObjectHierarchy(value) || ArrayHierarchy.isArrayHierarchy(value) || CallHierarchy.isCallHierarchy(value) || NameHierarchy.isNameHierarchy(value) || ValueHierarchy.isValueHierarchy(value),
  from: async (value, raw = false) => {
    value = await value;

    if (typeof value === "string" || typeof value === "number" || typeof value === "boolean" || typeof value === "symbol" || value === undefined || value === null) {
      return ValueHierarchy.from(value);
    }

    if (!raw) {
      if (Hierarchy.isHierarchy(value)) {
        return value;
      }

      if (Element.isElement(value)) {
        return (await value.hierarchy) ?? Hierarchy.from(value.value);
      }

      if (Component.isComponent(value) || Operation.isOperation(value)) {
        return (await value.hierarchy) ?? NameHierarchy.create({
          name: value.name
        });
      }

      if (Product.isProduct(value)) {
        let product = HashProduct.fromProduct(value);
        let hash = await artifactManager.storeRaw(product);
        return NameHierarchy.create({
          name: `<${value.type}>`,
          linkedProducts: [hash]
        });
      }
    }

    if (value instanceof Array) {
      return ArrayHierarchy.from(value, raw);
    }

    return ObjectHierarchy.from(value, raw);
  },
  flattenLinkedProducts: hierarchies => hierarchies.flatMap(h => h.linkedProducts ?? [])
};