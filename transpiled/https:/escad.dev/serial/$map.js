import { $uint32le } from "/transpiled/https://escad.dev/serial/$number.js";
import { Serializer } from "/transpiled/https://escad.dev/serial/Serializer.js";
export const $map = ($key, $value) => new Serializer({
    *s(map) {
        yield* $uint32le.s(map.size);
        for (const [key, value] of map.entries()) {
            yield* $key.s(key);
            yield* $value.s(value);
        }
    },
    *d() {
        const size = yield* $uint32le.d();
        const map = new Map();
        for (let i = 0; i < size; i++) {
            map.set(yield* $key.d(), yield* $value.d());
        }
        return map;
    },
});
