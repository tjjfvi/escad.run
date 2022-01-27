import { conversionRegistry, Id, MarkedProduct, TupleProductType, } from "/transpiled/https://escad.dev/core/mod.js";
import { Mesh } from "/transpiled/https://escad.dev/builtins/Mesh.js";
import { Matrix4 } from "/transpiled/https://escad.dev/builtins/Matrix4.js";
import { Face } from "/transpiled/https://escad.dev/builtins/Face.js";
const transformId = Id.create(import.meta.url, "@escad/builtins", "Marker", "Transform");
export const Transform = MarkedProduct.for(transformId);
conversionRegistry.register({
    fromType: Transform.createProductType(TupleProductType.create([Matrix4, Mesh])),
    toType: Mesh,
    convert: async ({ child: { children: [matrix, mesh] } }) => Mesh.create(mesh.faces.map((face) => Face.create(face.points.map((vector) => Matrix4.multiplyVector(matrix, vector))))),
    weight: 1,
    id: Id.create(import.meta.url, "@escad/builtins", "Conversion", "Transformation"),
});
