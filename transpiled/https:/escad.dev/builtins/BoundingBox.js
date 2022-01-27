import { conversionRegistry, createLeafProductUtils, Id, } from "/transpiled/https://escad.dev/core/mod.js";
import { Cube } from "/transpiled/https://escad.dev/builtins/cube.js";
import { Vector3 } from "/transpiled/https://escad.dev/builtins/Vector3.js";
const boundingBoxId = Id.create(import.meta.url, "@escad/builtins", "LeafProduct", "BoundingBox");
export const BoundingBox = {
    id: boundingBoxId,
    create: (min, max) => ({
        type: boundingBoxId,
        min,
        max,
        center: Vector3.multiplyScalar(Vector3.add(min, max), .5),
        size: Vector3.subtract(max, min),
    }),
    fromVector3: (vector) => BoundingBox.create(vector, vector),
    ...createLeafProductUtils(boundingBoxId, "BoundingBox"),
};
conversionRegistry.register({
    id: Id.create(import.meta.url, "@escad/builtins", "Conversion", "BoundingBoxToCube"),
    fromType: BoundingBox,
    toType: Cube,
    convert: async (boundingBox) => Cube.create(boundingBox.size, boundingBox.center),
    weight: 1,
});
