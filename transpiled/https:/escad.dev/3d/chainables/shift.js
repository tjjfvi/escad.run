import { Component, Operation } from "/transpiled/https://escad.dev/core/mod.js";
import { interpretTriplet } from "/transpiled/https://escad.dev/3d/helpers.js";
import { moveTo } from "/transpiled/https://escad.dev/3d/chainables/moveTo.js";
export const shift = Component.create("shift", triplet => {
  const shift = interpretTriplet(triplet, 0);
  return Operation.create("shift", arg => moveTo(arg, {
    x: [0, shift.x],
    y: [0, shift.y],
    z: [0, shift.z]
  })(arg), {
    showOutput: false
  });
}, {
  showOutput: false
});
export const shiftX = Component.create("shiftX", x => shift({
  x
}), {
  showOutput: false
});
export const shiftY = Component.create("shiftY", y => shift({
  y
}), {
  showOutput: false
});
export const shiftZ = Component.create("shiftZ", z => shift({
  z
}), {
  showOutput: false
});