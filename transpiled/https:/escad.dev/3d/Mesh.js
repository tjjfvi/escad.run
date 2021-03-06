import { Face } from "/transpiled/https://escad.dev/3d/Face.js";
import { createLeafProductUtils, Id } from "/transpiled/https://escad.dev/core/mod.js";
const meshId = Id.create(import.meta.url, "@escad/3d", "LeafProduct", "Mesh");
export const Mesh = {
  create: faces => ({
    type: meshId,
    faces
  }),
  fromVertsFaces: (verts, faces) => Mesh.create(faces.map(is => Face.create(is.map(i => verts[i])))),
  id: meshId,
  ...createLeafProductUtils(meshId, "Mesh")
};