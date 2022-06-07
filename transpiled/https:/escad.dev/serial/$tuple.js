import { Serializer } from "/transpiled/https://escad.dev/serial/Serializer.js";
export const $tuple = (...serializers) => new Serializer({
  *s(value) {
    if (value.length !== serializers.length) {
      throw new Error("Incorrect tuple length passed to tuple.s");
    }

    for (let i = 0; i < serializers.length; i++) {
      yield* serializers[i].s(value[i]);
    }
  },

  *d() {
    const tuple = Array(serializers.length);

    for (let i = 0; i < serializers.length; i++) {
      tuple[i] = yield* serializers[i].d();
    }

    return tuple;
  }

});