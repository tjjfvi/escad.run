import { $unknown, Serializer } from "/transpiled/https://escad.dev/serial/mod.js";
import { WrappedValue } from "/transpiled/https://escad.dev/core/WrappedValue.js";
export const $wrappedValue = new Serializer({
    s: ({ value }) => $unknown.s(value),
    *d() {
        const value = yield* $unknown.d();
        return WrappedValue.create(value);
    },
});
