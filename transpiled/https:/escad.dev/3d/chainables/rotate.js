import { Matrix4 } from "/transpiled/https://escad.dev/3d/Matrix4.js";
import { Component, mapOperation, TupleProduct, } from "/transpiled/https://escad.dev/core/mod.js";
import { Transform } from "/transpiled/https://escad.dev/3d/Transformation.js";
const tau = Math.PI * 2;
export const rotate = Component.create("rotate", (...args) => {
    let [first] = args;
    let triple = args.length === 3
        ? args
        : args.length === 4
            ? args
            : typeof first === "object"
                ? first
                : [0, 0, 0];
    let opts = args.length === 4
        ? args[3]
        : args.length === 2
            ? args[1]
            : typeof first === "object" && "unit" in first
                ? first
                : undefined;
    let arr = triple instanceof Array
        ? triple
        : [triple.x ?? 0, triple.y ?? 0, triple.z ?? 0];
    let [x, y, z] = arr;
    let { unit = "deg" } = opts ?? {};
    let radians = unit === "rad" || unit === "radians";
    let multiplier = radians ? 1 : tau / 360;
    x *= multiplier;
    y *= multiplier;
    z *= multiplier;
    let m = Matrix4.multiply(Matrix4.multiply(Matrix4.rotateX(x), Matrix4.rotateY(y)), Matrix4.rotateZ(z));
    return mapOperation("rotate", (leaf) => Transform.create(TupleProduct.create([m, leaf])), { showOutput: false });
}, { showOutput: false });
export const rX = Component.create("rX", (n) => rotate({ x: n }), {
    showOutput: false,
});
export const rY = Component.create("rY", (n) => rotate({ y: n }), {
    showOutput: false,
});
export const rZ = Component.create("rZ", (n) => rotate({ z: n }), {
    showOutput: false,
});
export const rotateX = rX;
export const rotateY = rY;
export const rotateZ = rZ;
