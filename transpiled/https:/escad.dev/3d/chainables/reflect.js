import { Component, mapOperation, TupleProduct, } from "/transpiled/https://escad.dev/core/mod.js";
import { Transform } from "/transpiled/https://escad.dev/3d/Transformation.js";
import { FlipFaces } from "/transpiled/https://escad.dev/3d/chainables/flip.js";
import { Matrix4 } from "/transpiled/https://escad.dev/3d/Matrix4.js";
export const reflect = Component.create("reflect", (axis, center = 0) => {
    const scale = { x: 1, y: 1, z: 1, [axis]: -1 };
    const translate = { x: 0, y: 0, z: 0, [axis]: center };
    const matrix = Matrix4.multiply(Matrix4.multiply(Matrix4.translate(translate.x, translate.y, translate.z), Matrix4.scale(scale.x, scale.y, scale.z)), Matrix4.translate(-translate.x, -translate.y, translate.z));
    return mapOperation("reflect", (leaf) => FlipFaces.create(Transform.create(TupleProduct.create([matrix, leaf]))), { showOutput: false });
}, { showOutput: false });
export const reflectX = Component.create("reflectX", (center = 0) => reflect("x", center), { showOutput: false });
export const reflectY = Component.create("reflectY", (center = 0) => reflect("y", center), { showOutput: false });
export const reflectZ = Component.create("reflectZ", (center = 0) => reflect("z", center), { showOutput: false });
