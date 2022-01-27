import { ArrayProductType, Component, conversionRegistry, Element, Id, MarkedProduct, Operation, TupleProduct, } from "/transpiled/https://escad.dev/core/mod.js";
import { Bsp, ClipOptions } from "/transpiled/https://escad.dev/builtins/Bsp.js";
const intersectionId = Id.create(import.meta.url, "@escad/builtins", "Marker", "Intersection");
export const Intersection = MarkedProduct.for(intersectionId);
conversionRegistry.register({
    fromType: Intersection.createProductType(ArrayProductType.create(Bsp)),
    toType: Bsp,
    convert: async ({ child: { children } }) => children.reduce((a, b) => {
        a = Bsp.clipTo(a, b, ClipOptions.DropFront | ClipOptions.DropCoplanarBack);
        b = Bsp.clipTo(b, a, ClipOptions.DropFront | ClipOptions.DropCoplanar);
        return Bsp.build(a, Bsp.allFaces(b)) ?? Bsp.null();
    }),
    weight: 1,
    id: Id.create(import.meta.url, "@escad/builtins", "Conversion", "Intersection"),
});
export const intersection = Operation.create("intersection", async (el) => Intersection.create(TupleProduct.create(await Element.toArrayFlat(el))), { showOutput: false });
export const intersect = Component.create("intersect", (...el) => Operation.create("intersect", (el2) => intersection(el2, el), {
    overrideHierarchy: false,
}), { showOutput: false });
