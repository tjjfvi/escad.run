import { $uint32le } from "/transpiled/https://escad.dev/serial/$number.js";
import { Serializer } from "/transpiled/https://escad.dev/serial/Serializer.js";
export const $array = ($value) => new Serializer({
    *s(array) {
        yield* $uint32le.s(array.length);
        for (let i = 0; i < array.length; i++) {
            yield* $value.s(array[i]);
        }
    },
    *d() {
        const length = yield* $uint32le.d();
        const array = Array(length);
        for (let i = 0; i < length; i++) {
            array[i] = yield* $value.d();
        }
        return array;
    },
});
