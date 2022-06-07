import { $array } from "/transpiled/https://escad.dev/serial/$array.js";
import { Serializer } from "/transpiled/https://escad.dev/serial/Serializer.js";
import { $string } from "/transpiled/https://escad.dev/serial/$string.js";
import { $tuple } from "/transpiled/https://escad.dev/serial/$tuple.js";
export const $record = $value => {
  const $entries = $array($tuple($string, $value));
  return new Serializer({
    *s(value) {
      const entries = Object.entries(value);
      yield* $entries.s(entries);
    },

    *d() {
      const entries = yield* $entries.d();
      return Object.fromEntries(entries);
    }

  });
};