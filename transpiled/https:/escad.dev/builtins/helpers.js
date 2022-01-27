import { Vector3 } from "/transpiled/https://escad.dev/builtins/Vector3.js";
export const interpretTriplet = (trip, def) => typeof trip === "object"
    ? Vector3.create(trip.x ?? trip[0] ?? def, trip.y ?? trip[1] ?? def, trip.z ?? trip[2] ?? def)
    : Vector3.create(trip ?? def, trip ?? def, trip ?? def);
