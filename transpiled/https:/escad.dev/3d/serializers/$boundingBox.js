import { registerType, Serializer } from "/transpiled/https://escad.dev/serial/mod.js";
import { BoundingBox } from "/transpiled/https://escad.dev/3d/BoundingBox.js";
import { $vector3 } from "/transpiled/https://escad.dev/3d/serializers/$vector3.js";
export const $boundingBox = new Serializer({
    *s(box) {
        yield* $vector3.s(box.min);
        yield* $vector3.s(box.max);
    },
    *d() {
        const min = yield* $vector3.d();
        const max = yield* $vector3.d();
        return BoundingBox.create(min, max);
    },
});
registerType(BoundingBox.id, $boundingBox);
