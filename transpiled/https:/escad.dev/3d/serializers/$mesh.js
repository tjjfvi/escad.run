import { $array, registerType, Serializer } from "/transpiled/https://escad.dev/serial/mod.js";
import { Mesh } from "/transpiled/https://escad.dev/3d/Mesh.js";
import { $face } from "/transpiled/https://escad.dev/3d/serializers/$face.js";
const $faces = $array($face);
export const $mesh = new Serializer({
  s: mesh => $faces.s(mesh.faces),

  *d() {
    const faces = yield* $faces.d();
    return Mesh.create(faces);
  }

});
registerType(Mesh.id, $mesh);