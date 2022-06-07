import { ArrayProductType, conversionRegistry, Element, Id, MarkedProduct, Operation, TupleProduct } from "/transpiled/https://escad.dev/core/mod.js";
import { Mesh } from "/transpiled/https://escad.dev/3d/Mesh.js";
const meldId = Id.create(import.meta.url, "@escad/3d", "Marker", "Meld");
export const Meld = MarkedProduct.for(meldId);
conversionRegistry.register({
  fromType: Meld.createProductType(ArrayProductType.create(Mesh)),
  toType: Mesh,
  convert: async ({
    child: {
      children
    }
  }) => Mesh.create(children.flatMap(x => x.faces)),
  weight: 1,
  id: Id.create(import.meta.url, "@escad/3d", "Conversion", "Meld")
});
export const meld = Operation.create("meld", async el => Meld.create(TupleProduct.create(await Element.toArrayFlat(el))), {
  showOutput: false
});