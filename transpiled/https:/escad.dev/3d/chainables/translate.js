import { Matrix4 } from "/transpiled/https://escad.dev/3d/Matrix4.js";
import { Component, mapOperation, TupleProduct } from "/transpiled/https://escad.dev/core/mod.js";
import { Transform } from "/transpiled/https://escad.dev/3d/Transformation.js";
export const translate = Component.create("translate", (...args) => {
  let triple = args.length === 3 ? args : args[0];
  let arr = triple instanceof Array ? triple : [triple.x ?? 0, triple.y ?? 0, triple.z ?? 0];
  let matrix = Matrix4.translate(...arr);
  return mapOperation("translate", mesh => Transform.create(TupleProduct.create([matrix, mesh])), {
    showOutput: false
  });
}, {
  showOutput: false
});
export const tX = Component.create("tX", n => translate({
  x: n
}), {
  showOutput: false
});
export const tY = Component.create("tY", n => translate({
  y: n
}), {
  showOutput: false
});
export const tZ = Component.create("tZ", n => translate({
  z: n
}), {
  showOutput: false
});
export const translateX = tX;
export const translateY = tY;
export const translateZ = tZ;