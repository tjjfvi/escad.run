import { Mesh } from "/transpiled/https://escad.dev/3d/Mesh.js";
import { Component, conversionRegistry, createLeafProductUtils, Element, Id } from "/transpiled/https://escad.dev/core/mod.js";
import { interpretTriplet } from "/transpiled/https://escad.dev/3d/helpers.js";
import { smoothContext } from "/transpiled/https://escad.dev/3d/smoothContext.js";
import { Face } from "/transpiled/https://escad.dev/3d/Face.js";
import { Vector3 } from "/transpiled/https://escad.dev/3d/Vector3.js";
const tau = Math.PI * 2;
const sphereId = Id.create(import.meta.url, "@escad/3d", "LeafProduct", "Sphere");
export const Sphere = {
  create: (radius, smooth, center) => ({
    type: sphereId,
    radius,
    smooth,
    center
  }),
  ...createLeafProductUtils(sphereId, "Sphere"),
  id: sphereId
};
conversionRegistry.register({
  fromType: Sphere,
  toType: Mesh,
  convert: async sphere => {
    const {
      radius,
      smooth,
      center
    } = sphere;
    const sides = Math.max(2, smooth.sides ?? 0, Math.ceil(radius * tau / 2 / (smooth.size ?? Infinity)), 360 / 2 / (smooth.angle ?? Infinity));
    const slices = 2 * sides;
    const stacks = sides;

    const vertex = (i, j) => {
      const theta = i * tau / slices;
      const phi = j * tau / 2 / stacks;
      return Vector3.create(center.x + Math.sin(theta) * Math.sin(phi) * radius, center.y + Math.cos(theta) * Math.sin(phi) * radius, center.z + Math.cos(phi) * radius);
    };

    return Mesh.create([...Array(slices)].flatMap((_, i) => [...Array(stacks)].flatMap((_, j) => {
      let vertices = [];
      vertices.push(vertex(i, j));

      if (j > 0) {
        vertices.push(vertex(i + 1, j));
      }

      if (j < stacks - 1) {
        vertices.push(vertex(i + 1, j + 1));
      }

      vertices.push(vertex(i, j + 1));
      return Face.create(vertices);
    })));
  },
  weight: 1,
  id: Id.create(import.meta.url, "@escad/3d", "Conversion", "SphereMesh")
});
export const sphere = Component.create("sphere", args => {
  if (typeof args === "number") {
    args = {
      radius: args
    };
  }

  const {
    radius,
    smooth = smoothContext.get()
  } = args;
  const shift = interpretTriplet(args.shift, 0);
  const center = Vector3.multiplyScalar(shift, radius);
  return Element.create(Sphere.create(radius, smooth, center));
}, {
  showOutput: false
});