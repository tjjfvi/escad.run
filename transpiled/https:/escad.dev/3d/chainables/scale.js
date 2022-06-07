import { Matrix4 } from "/transpiled/https://escad.dev/3d/Matrix4.js";
import { Component, mapOperation, TupleProduct } from "/transpiled/https://escad.dev/core/mod.js";
import { Transform } from "/transpiled/https://escad.dev/3d/Transformation.js";
import { FlipFaces } from "/transpiled/https://escad.dev/3d/chainables/flip.js";
export const scale = Component.create("scale", (...args) => {
  let triple = args.length === 3 ? args : typeof args[0] === "number" ? [args[0], args[0], args[0]] : args[0];
  let arr = triple instanceof Array ? triple : [triple.x ?? 1, triple.y ?? 1, triple.z ?? 1];
  let matrix = Matrix4.scale(...arr);
  let sign = Math.sign(arr[0] * arr[1] * arr[2]);
  let shouldFlip = sign === -1;
  return mapOperation("scale", leaf => {
    let transformed = Transform.create(TupleProduct.create([matrix, leaf]));
    return shouldFlip ? FlipFaces.create(transformed) : transformed;
  }, {
    showOutput: false
  });
}, {
  showOutput: false
});
export const sX = Component.create("sX", n => scale({
  x: n
}), {
  showOutput: false
});
export const sY = Component.create("sY", n => scale({
  y: n
}), {
  showOutput: false
});
export const sZ = Component.create("sZ", n => scale({
  z: n
}), {
  showOutput: false
});
export const scaleX = sX;
export const scaleY = sY;
export const scaleZ = sZ;