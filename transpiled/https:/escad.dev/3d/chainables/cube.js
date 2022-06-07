import { Component, conversionRegistry, createLeafProductUtils, Element, Id } from "/transpiled/https://escad.dev/core/mod.js";
import { interpretTriplet } from "/transpiled/https://escad.dev/3d/helpers.js";
import { Mesh } from "/transpiled/https://escad.dev/3d/Mesh.js";
import { Vector3 } from "/transpiled/https://escad.dev/3d/Vector3.js";
const cubeId = Id.create(import.meta.url, "@escad/3d", "LeafProduct", "Cube");
export const Cube = {
  create: (size, center) => ({
    type: cubeId,
    size,
    center
  }),
  ...createLeafProductUtils(cubeId, "Cube"),
  id: cubeId
};
conversionRegistry.register({
  fromType: Cube,
  toType: Mesh,
  convert: async cube => {
    const {
      center,
      size
    } = cube;
    const nx = center.x - size.x / 2;
    const ny = center.y - size.y / 2;
    const nz = center.z - size.z / 2;
    const px = center.x + size.x / 2;
    const py = center.y + size.y / 2;
    const pz = center.z + size.z / 2;
    const points = [Vector3.create(px, py, pz), Vector3.create(nx, py, pz), Vector3.create(px, ny, pz), Vector3.create(nx, ny, pz), Vector3.create(px, py, nz), Vector3.create(nx, py, nz), Vector3.create(px, ny, nz), Vector3.create(nx, ny, nz)];
    return Mesh.fromVertsFaces(points, [[0, 1, 2], [3, 2, 1], [6, 5, 4], [5, 6, 7], [4, 1, 0], [5, 1, 4], [6, 2, 3], [6, 3, 7], [1, 7, 3], [5, 7, 1], [4, 0, 2], [6, 4, 2]]);
  },
  weight: 1,
  id: Id.create(import.meta.url, "@escad/3d", "Conversion", "CubeMesh")
});
export const cube = Component.create("cube", args => {
  const size = interpretTriplet(args.size ?? args, 1);
  const shift = interpretTriplet(args.shift, 0);
  const center = Vector3.multiplyComponents(shift, Vector3.multiplyScalar(size, .5));
  return Element.create(Cube.create(size, center));
}, {
  showOutput: false
});