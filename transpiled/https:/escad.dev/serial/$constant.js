/* eslint-disable require-yield */
import { Serializer } from "/transpiled/https://escad.dev/serial/Serializer.js";
export const $constant = (value) => new Serializer({
    *s(v) {
        if (v !== value) {
            throw new Error("Expected to be passed a constant");
        }
    },
    *d() {
        return value;
    },
});
