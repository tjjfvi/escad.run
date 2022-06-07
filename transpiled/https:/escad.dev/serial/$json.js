import { $string } from "/transpiled/https://escad.dev/serial/$string.js";
import { Serializer } from "/transpiled/https://escad.dev/serial/Serializer.js";
export const $json = new Serializer({
  s: value => $string.s(JSON.stringify(value)),

  *d() {
    return JSON.parse(yield* $string.d());
  }

});