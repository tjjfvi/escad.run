import { conversionRegistry, Id, mapOperation, MarkedProduct, } from "/transpiled/https://escad.dev/core/mod.js";
import { Face } from "/transpiled/https://escad.dev/builtins/Face.js";
import { Mesh } from "/transpiled/https://escad.dev/builtins/Mesh.js";
const flipFacesId = Id.create(import.meta.url, "@escad/builtins", "Marker", "FlipFaces");
export const FlipFaces = MarkedProduct.for(flipFacesId);
conversionRegistry.register({
    convert: async ({ child: mesh }) => Mesh.create(mesh.faces.map((face) => Face.create(face.points.slice().reverse()))),
    fromType: FlipFaces.createProductType(Mesh),
    toType: Mesh,
    weight: 1,
    id: Id.create(import.meta.url, "@escad/builtins", "Conversion", "FlipFaces"),
});
export const flip = mapOperation("flip", FlipFaces.create, { showOutput: false });
