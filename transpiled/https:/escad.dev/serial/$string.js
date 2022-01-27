import { $buffer } from "/transpiled/https://escad.dev/serial/$buffer.js";
import { Serializer } from "/transpiled/https://escad.dev/serial/Serializer.js";
const textEncoder = new TextEncoder();
const textDecoder = new TextDecoder();
export const $string = new Serializer({
    *s(string) {
        const buffer = textEncoder.encode(string);
        yield* $buffer.s(buffer);
    },
    *d() {
        const buffer = yield* $buffer.d();
        return textDecoder.decode(buffer);
    },
});
