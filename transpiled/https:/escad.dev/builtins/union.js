import { ArrayProductType, Component, conversionRegistry, Element, Id, MarkedProduct, Operation, TupleProduct, } from "/transpiled/https://escad.dev/core/mod.js";
import { Bsp, ClipOptions } from "/transpiled/https://escad.dev/builtins/Bsp.js";
const unionId = Id.create(import.meta.url, "@escad/builtins", "Marker", "Union");
export const Union = MarkedProduct.for(unionId);
conversionRegistry.register({
    fromType: Union.createProductType(ArrayProductType.create(Bsp)),
    toType: Bsp,
    convert: async ({ child: { children } }) => children.reduce((a, b) => {
        a = Bsp.clipTo(a, b, ClipOptions.DropBack | ClipOptions.DropCoplanarBack);
        b = Bsp.clipTo(b, a, ClipOptions.DropBack | ClipOptions.DropCoplanar);
        return Bsp.build(a, Bsp.allFaces(b)) ?? Bsp.null();
    }),
    weight: 1,
    id: Id.create(import.meta.url, "@escad/builtins", "Conversion", "Union"),
});
export const union = Operation.create("union", async (el) => Union.create(TupleProduct.create(await Element.toArrayFlat(el))), { showOutput: false });
export const add = Component.create("add", (...el) => Operation.create("add", (el2) => union(el2, el), {
    overrideHierarchy: false,
}), { showOutput: false });
