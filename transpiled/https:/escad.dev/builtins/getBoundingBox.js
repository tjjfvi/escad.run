import { ArrayProductType, conversionRegistry, Element, HashProduct, Id, MarkedProduct, Operation, TupleProduct, } from "/transpiled/https://escad.dev/core/mod.js";
import { BoundingBox } from "/transpiled/https://escad.dev/builtins/BoundingBox.js";
import { Mesh } from "/transpiled/https://escad.dev/builtins/Mesh.js";
import { Vector3 } from "/transpiled/https://escad.dev/builtins/Vector3.js";
const getBoundingBoxId = Id.create(import.meta.url, "@escad/builtins", "Marker", "GetBoundingBox");
export const GetBoundingBox = MarkedProduct.for(getBoundingBoxId);
conversionRegistry.register({
    id: Id.create(import.meta.url, "@escad/builtins", "Conversion", "GetBoundingBoxMesh"),
    fromType: GetBoundingBox.createProductType(ArrayProductType.create(Mesh)),
    toType: BoundingBox,
    convert: async ({ child: { children: meshes } }) => {
        let min, max;
        for (const mesh of meshes) {
            for (const face of mesh.faces) {
                for (const vertex of face.points) {
                    min = Vector3.min(min ?? vertex, vertex);
                    max = Vector3.max(max ?? vertex, vertex);
                }
            }
        }
        if (!min || !max) {
            throw new Error("Cannot convert empty meshes to BoundingBox");
        }
        return BoundingBox.create(min, max);
    },
    weight: 1,
});
export const _boundingBox = async (args) => GetBoundingBox.create(TupleProduct.create(await Element.toArrayFlat(Element.map(args, (x) => HashProduct.fromProduct(x)))));
export const boundingBox = Operation.create("boundingBox", _boundingBox, {
    showOutput: false,
});
export const getBoundingBox = async (...args) => await conversionRegistry.convertProduct(BoundingBox.productType, await _boundingBox(Element.create(args)));
