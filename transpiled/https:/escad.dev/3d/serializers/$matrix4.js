import { $number, $tuple, Serializer } from "/transpiled/https://escad.dev/serial/mod.js";
import { Matrix4 } from "/transpiled/https://escad.dev/3d/Matrix4.js";
const $sixteen = $tuple($number, $number, $number, $number, $number, $number, $number, $number, $number, $number, $number, $number, $number, $number, $number, $number);
export const $matrix4 = new Serializer({
    s: (matrix4) => $sixteen.s(matrix4.vs),
    *d() {
        const vs = yield* $sixteen.d();
        return Matrix4.create(vs);
    },
});
