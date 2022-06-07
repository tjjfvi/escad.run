import { Serializer } from "/transpiled/https://escad.dev/serial/Serializer.js";
export const $boolean = new Serializer({
  s: value => Serializer.write(1, ({
    buffer,
    offset
  }) => buffer[offset] = +value),
  d: () => Serializer.read(1, ({
    buffer,
    offset
  }) => !!buffer[offset])
});