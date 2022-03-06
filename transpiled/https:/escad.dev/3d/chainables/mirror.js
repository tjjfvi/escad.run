import { Component, mapOperation, } from "/transpiled/https://escad.dev/core/mod.js";
import { reflect } from "/transpiled/https://escad.dev/3d/chainables/reflect.js";
export const mirror = Component.create("mirror", (axis, center = 0) => mapOperation("mirror", (value) => [
    value,
    reflect(axis, center)(value),
], { showOutput: false }), { showOutput: false });
export const mirrorX = Component.create("mirrorX", (center = 0) => mirror("x", center), { showOutput: false });
export const mirrorY = Component.create("mirrorY", (center = 0) => mirror("y", center), { showOutput: false });
export const mirrorZ = Component.create("mirrorZ", (center = 0) => mirror("z", center), { showOutput: false });
