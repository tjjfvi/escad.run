import { Product } from "/transpiled/https://escad.dev/core/Product.js";
import { Component } from "/transpiled/https://escad.dev/core/Component.js";
import { Element } from "/transpiled/https://escad.dev/core/Element.js";
import { Operation } from "/transpiled/https://escad.dev/core/Operation.js";
import { ArrayHierarchy } from "/transpiled/https://escad.dev/core/ArrayHierarchy.js";
import { CallHierarchy } from "/transpiled/https://escad.dev/core/CallHierarchy.js";
import { ObjectHierarchy } from "/transpiled/https://escad.dev/core/ObjectHierarchy.js";
import { NameHierarchy } from "/transpiled/https://escad.dev/core/NameHierarchy.js";
import { ValueHierarchy } from "/transpiled/https://escad.dev/core/ValueHierarchy.js";
import { HashProduct } from "/transpiled/https://escad.dev/core/HashProduct.js";
import { artifactManager } from "/transpiled/https://escad.dev/core/ArtifactManager.js";
export const Hierarchy = {
    isHierarchy: (value) => ObjectHierarchy.isObjectHierarchy(value) ||
        ArrayHierarchy.isArrayHierarchy(value) ||
        CallHierarchy.isCallHierarchy(value) ||
        NameHierarchy.isNameHierarchy(value) ||
        ValueHierarchy.isValueHierarchy(value),
    from: async (value, raw = false) => {
        value = await value;
        if (typeof value === "string" ||
            typeof value === "number" ||
            typeof value === "boolean" ||
            typeof value === "symbol" ||
            value === undefined ||
            value === null) {
            return ValueHierarchy.from(value);
        }
        if (!raw) {
            if (Hierarchy.isHierarchy(value)) {
                return value;
            }
            if (Element.isElement(value)) {
                return await value.hierarchy ?? Hierarchy.from(value.value);
            }
            if (Component.isComponent(value) || Operation.isOperation(value)) {
                return await value.hierarchy ??
                    NameHierarchy.create({ name: value.name });
            }
            if (Product.isProduct(value)) {
                let product = HashProduct.fromProduct(value);
                let hash = await artifactManager.storeRaw(product);
                return NameHierarchy.create({
                    name: `<${value.type}>`,
                    linkedProducts: [hash],
                });
            }
        }
        if (value instanceof Array) {
            return ArrayHierarchy.from(value, raw);
        }
        return ObjectHierarchy.from(value, raw);
    },
    flattenLinkedProducts: (hierarchies) => hierarchies.flatMap((h) => h.linkedProducts ?? []),
};
