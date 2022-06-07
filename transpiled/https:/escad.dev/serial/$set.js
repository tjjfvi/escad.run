import { $uint32le } from "/transpiled/https://escad.dev/serial/$number.js";
import { Serializer } from "/transpiled/https://escad.dev/serial/Serializer.js";
export const $set = $value => new Serializer({
  *s(set) {
    yield* $uint32le.s(set.size);

    for (const value of set) {
      yield* $value.s(value);
    }
  },

  *d() {
    const size = yield* $uint32le.d();
    const set = new Set();

    for (let i = 0; i < size; i++) {
      set.add(yield* $value.d());
    }

    return set;
  }

});