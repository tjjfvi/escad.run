import { Component, conversionRegistry, createLeafProductUtils, Element, Id } from "/transpiled/https://escad.dev/core/mod.js";
import { Face } from "/transpiled/https://escad.dev/3d/Face.js";
import { interpretTriplet } from "/transpiled/https://escad.dev/3d/helpers.js";
import { Mesh } from "/transpiled/https://escad.dev/3d/Mesh.js";
import { smoothContext } from "/transpiled/https://escad.dev/3d/smoothContext.js";
import { Vector3 } from "/transpiled/https://escad.dev/3d/Vector3.js";
const tau = Math.PI * 2;
const cylinderId = Id.create(import.meta.url, "@escad/3d", "LeafProduct", "Cylinder");
export const Cylinder = {
  create: (radius, height, smooth, center) => ({
    type: cylinderId,
    radius,
    height,
    smooth,
    center
  }),
  ...createLeafProductUtils(cylinderId, "Cylinder"),
  id: cylinderId
};
conversionRegistry.register({
  fromType: Cylinder,
  toType: Mesh,
  convert: async cyl => {
    const {
      radius,
      height,
      smooth,
      center
    } = cyl;
    const sides = Math.max(2, smooth.sides ?? 0, Math.ceil(radius * tau / 2 / (smooth.size ?? Infinity)), 360 / 2 / (smooth.angle ?? Infinity));
    const h1 = center.z - height / 2;
    const h2 = center.z + height / 2;
    const c1 = Vector3.create(0, 0, h1);
    const c2 = Vector3.create(0, 0, h2);
    return Mesh.create([...Array(sides)].flatMap((_, i) => {
      let p1 = [Math.cos(i / sides * tau) * radius, Math.sin(i / sides * tau) * radius];
      let p2 = [Math.cos((i + 1) / sides * tau) * radius, Math.sin((i + 1) / sides * tau) * radius];
      let p11 = Vector3.create(p1[0], p1[1], h1);
      let p12 = Vector3.create(p1[0], p1[1], h2);
      let p21 = Vector3.create(p2[0], p2[1], h1);
      let p22 = Vector3.create(p2[0], p2[1], h2);
      return [Face.create([p21, p11, c1]), Face.create([c2, p12, p22]), Face.create([p12, p11, p22]), Face.create([p22, p11, p21])];
    }));
  },
  weight: 1,
  id: Id.create(import.meta.url, "@escad/3d", "Conversion", "CylMesh")
});
export const cylinder = Component.create("cyl", args => {
  const {
    radius,
    height,
    smooth = smoothContext.get()
  } = args;
  const shift = interpretTriplet(args.shift, 0);
  const center = Vector3.multiplyComponents(shift, Vector3.create(radius, radius, height / 2));
  return Element.create(Cylinder.create(radius, height, smooth, center));
}, {
  showOutput: false
});
export const cyl = cylinder;