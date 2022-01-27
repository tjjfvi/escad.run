import { $array, registerType, Serializer } from "/transpiled/https://escad.dev/serial/mod.js";
import { Face } from "/transpiled/https://escad.dev/builtins/Face.js";
import { $vector3 } from "/transpiled/https://escad.dev/builtins/serializers/$vector3.js";
const $points = $array($vector3);
export const $face = new Serializer({
    s: (face) => $points.s(face.points),
    *d() {
        const points = yield* $points.d();
        return Face.create(points);
    },
});
registerType(Face.id, $face);
