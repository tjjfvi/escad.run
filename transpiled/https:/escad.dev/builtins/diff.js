import { Component, conversionRegistry, Element, Id, MarkedProduct, Operation, Product, TupleProduct, TupleProductType, } from "/transpiled/https://escad.dev/core/mod.js";
import { Bsp, ClipOptions } from "/transpiled/https://escad.dev/builtins/Bsp.js";
import { Union } from "/transpiled/https://escad.dev/builtins/union.js";
const diffId = Id.create(import.meta.url, "@escad/builtins", "Marker", "Diff");
export const Diff = MarkedProduct.for(diffId);
conversionRegistry.register({
    fromType: Diff.createProductType(TupleProductType.create([Bsp, Bsp])),
    toType: Bsp,
    convert: async ({ child: { children: [a, b] } }) => {
        b = Bsp.invert(b);
        a = Bsp.clipTo(a, b, ClipOptions.DropFront | ClipOptions.DropCoplanar);
        b = Bsp.clipTo(b, a, ClipOptions.DropFront | ClipOptions.DropCoplanarBack);
        return Bsp.build(a, Bsp.allFaces(b)) ?? Bsp.null();
    },
    weight: 1,
    id: Id.create(import.meta.url, "@escad/builtins", "Conversion", "Diff"),
});
export const diff = Operation.create("diff", async (el) => {
    let originalArgs = await Element.toArrayDeep(el);
    if (!(originalArgs instanceof Array)) {
        return originalArgs;
    }
    if (originalArgs.length === 0) {
        return [];
    }
    if (originalArgs.length === 1) {
        [originalArgs] = originalArgs;
    }
    const args = await Element.toArrayDeep(Element.create(originalArgs));
    if (Product.isProduct(args)) {
        return args;
    }
    const positive = Union.create(TupleProduct.create(await Element.toArrayFlat(args[0])));
    const negative = Union.create(TupleProduct.create(await Element.toArrayFlat(args.slice(1))));
    return Diff.create(TupleProduct.create([positive, negative]));
}, { showOutput: false });
export const sub = Component.create("sub", (...el) => Operation.create("sub", (el2) => diff(el2, el), {
    overrideHierarchy: false,
}), { showOutput: false });
