import { $number, $tuple, registerType, Serializer } from "/transpiled/https://escad.dev/serial/mod.js";
import { Vector3 } from "/transpiled/https://escad.dev/builtins/Vector3.js";
const $xyz = $tuple($number, $number, $number);
export const $vector3 = new Serializer({
    s: (vector) => $xyz.s([vector.x, vector.y, vector.z]),
    *d() {
        const [x, y, z] = yield* $xyz.d();
        return Vector3.create(x, y, z);
    },
});
registerType(Vector3.id, $vector3);
