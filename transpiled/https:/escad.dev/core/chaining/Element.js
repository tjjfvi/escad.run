import { Hierarchy } from "/transpiled/https://escad.dev/core/hierarchy/mod.js";
import { Product } from "/transpiled/https://escad.dev/core/product/mod.js";
import { checkTypeProperty } from "/transpiled/https://escad.dev/core/utils/mod.js";
import { artifactManager } from "/transpiled/https://escad.dev/core/artifacts/mod.js";
const ObjMap = {
  isObjMap: o => !Product.isProduct(o) && typeof o === "object" && !!o && (o.constructor === Object || Object.getPrototypeOf(o) === null)
};
export const Element = {
  create: (elementish, hierarchy) => {
    const elementPromise = Element.createPromise(elementish, hierarchy);
    return {
      type: "Element",
      value: elementPromise.then(el => el.value),
      hierarchy: elementPromise.then(el => el.hierarchy)
    };
  },
  createPromise: async (elementish, hierarchy) => {
    let value;
    elementish = await elementish;
    hierarchy = await hierarchy;

    if (Element.isElement(elementish)) {
      if (!hierarchy) return elementish;
      elementish = await elementish.value;
    }

    if (elementish instanceof Array) {
      value = elementish.map(x => Element.create(x));

      if (value.some(x => x.hierarchy)) {
        hierarchy ??= Hierarchy.from(elementish);
      }
    } else if (ObjMap.isObjMap(elementish)) {
      value = Object.fromEntries(Object.entries(elementish).map(([k, v]) => [k, Element.create(v)]));

      if (Object.values(value).some(x => x.hierarchy)) {
        hierarchy ??= Hierarchy.from(elementish);
      }
    } else if (Product.isProduct(elementish)) {
      value = elementish;
      artifactManager.storeRaw(value);
    } else {
      throw new Error("Invalid elementish passed to Element");
    }

    return {
      type: "Element",
      value,
      hierarchy
    };
  },
  toArray: async element => {
    element = Element.create(element);
    const value = await element.value;

    if (Array.isArray(value)) {
      return value;
    }

    if (ObjMap.isObjMap(value)) {
      return Object.values(value);
    }

    if (Product.isProduct(value)) {
      return [element];
    }

    throw new Error("Invalid Element.val type");
  },
  toArrayDeep: async element => {
    element = Element.create(element);
    const value = await element.value;

    if (Product.isProduct(value)) {
      return value;
    }

    return await Promise.all((await Element.toArray(element)).map(Element.toArrayDeep));
  },
  toArrayFlat: async element => {
    element = Element.create(element);
    const value = await element.value;

    if (Product.isProduct(value)) {
      return [value];
    }

    return (await Promise.all((await Element.toArray(element)).map(Element.toArrayFlat))).flat();
  },
  concat: (a, b) => Element.create(Element.concatPromise(a, b)),
  concatPromise: async (a, b) => Element.create([].concat(await a.value).concat(await b.value)),
  applyHierarchy: (element, hierarchy) => Element.create(element.value, hierarchy),
  isElement: checkTypeProperty.string("Element"),
  map: (element, fn) => Element.create(Element.mapPromise(element, fn)),
  mapPromise: async (element, fn) => {
    const value = await element.value;

    if (value instanceof Array) {
      return Element.create(value.map(v => Element.map(v, fn)));
    }

    if (ObjMap.isObjMap(value)) {
      return Element.create(Object.fromEntries(Object.entries(value).map(([k, v]) => [k, Element.map(v, fn)])));
    }

    if (Product.isProduct(value)) {
      return Element.create(fn(value));
    }

    throw new Error("Invalid Element.val type");
  }
};