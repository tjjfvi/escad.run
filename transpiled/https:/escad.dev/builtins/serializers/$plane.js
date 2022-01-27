import { $number, registerType, Serializer } from "/transpiled/https://escad.dev/serial/mod.js";
import { Plane } from "/transpiled/https://escad.dev/builtins/Plane.js";
import { $vector3 } from "/transpiled/https://escad.dev/builtins/serializers/$vector3.js";
export const $plane = new Serializer({
    *s(plane) {
        yield* $vector3.s(plane.normal);
        yield* $number.s(plane.w);
    },
    *d() {
        const normal = yield* $vector3.d();
        const w = yield* $number.d();
        return Plane.create(normal, w);
    },
});
registerType(Plane.id, $plane);
