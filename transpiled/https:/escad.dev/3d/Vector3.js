import { createLeafProductUtils, Id } from "/transpiled/https://escad.dev/core/mod.js";
const vector3Id = Id.create(import.meta.url, "@escad/3d", "LeafProduct", "Vector3");
export const Vector3 = {
  id: vector3Id,
  create: _createVector3,
  ...createLeafProductUtils(vector3Id, "Vector3"),
  add: (a, b) => Vector3.create(a.x + b.x, a.y + b.y, a.z + b.z),
  subtract: (a, b) => Vector3.create(a.x - b.x, a.y - b.y, a.z - b.z),
  negate: v => Vector3.create(-v.x, -v.y, -v.z),
  multiplyComponents: (a, b) => Vector3.create(a.x * b.x, a.y * b.y, a.z * b.z),
  multiplyScalar: (v, n) => Vector3.create(v.x * n, v.y * n, v.z * n),
  divideScalar: (v, n) => Vector3.multiplyScalar(v, 1 / n),
  dot: (a, b) => a.x * b.x + a.y * b.y + a.z * b.z,
  lerp: (a, b, t) => Vector3.add(a, Vector3.multiplyScalar(Vector3.subtract(b, a), t)),
  length: v => Math.sqrt(Vector3.dot(v, v)),
  unit: v => Vector3.divideScalar(v, Vector3.length(v)),
  cross: (a, b) => Vector3.create(a.y * b.z - a.z * b.y, a.z * b.x - a.x * b.z, a.x * b.y - a.y * b.x),
  min: (a, b) => Vector3.create(Math.min(a.x, b.x), Math.min(a.y, b.y), Math.min(a.z, b.z)),
  max: (a, b) => Vector3.create(Math.max(a.x, b.x), Math.max(a.y, b.y), Math.max(a.z, b.z))
};

function _createVector3(x = 0, y = 0, z = 0) {
  if (typeof x === "object") {
    if (x instanceof Array) {
      [x, y, z] = x;
    } else {
      ({
        x,
        y,
        z
      } = x);
    }
  }

  return {
    type: vector3Id,
    x,
    y,
    z
  };
}