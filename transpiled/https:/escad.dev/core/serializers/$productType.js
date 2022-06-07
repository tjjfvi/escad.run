/* eslint-disable @typescript-eslint/no-non-null-assertion */
import { $string, $uint8, registerType, Serializer } from "/transpiled/https://escad.dev/serial/mod.js";
import { ArrayProductType, HashProductType, LeafProductType, MarkedProductType, TupleProductType, UnknownProductType } from "/transpiled/https://escad.dev/core/product/mod.js";
import { assertNever } from "/transpiled/https://escad.dev/core/utils/mod.js";
import { $hash } from "/transpiled/https://escad.dev/core/serializers/$hash.js";
import { $id } from "/transpiled/https://escad.dev/core/serializers/$id.js";
export const $productType = new Serializer({
  *s(rootProductType) {
    const stack = [rootProductType];

    while (stack.length) {
      const productType = stack.shift();
      yield* $string.s(productType.type);

      if (productType.type === "LeafProductType") {
        yield* $string.s(productType.id);
      } else if (productType.type === "HashProductType") {
        yield* $hash.s(productType.productType);
      } else if (productType.type === "MarkedProductType") {
        yield* $id.s(productType.marker);
        stack.push(productType.child);
      } else if (productType.type === "UnknownProductType") {
        /* empty */
      } else if (productType.type === "TupleProductType") {
        yield* $uint8.s(productType.elementTypes.length);

        for (let i = productType.elementTypes.length - 1; i >= 0; i--) {
          stack.push(productType.elementTypes[i]);
        }

        continue;
      } else if (productType.type === "ArrayProductType") {
        stack.push(productType.elementType);
      } else {
        assertNever(productType);
      }
    }
  },

  *d() {
    let result;
    const stack = [productType => result = productType];

    while (stack.length) {
      const resolve = stack.shift();
      const type = yield* $string.d();

      if (type === "LeafProductType") {
        const id = yield* $string.d();
        resolve(LeafProductType.create(id));
      } else if (type === "HashProductType") {
        const productType = yield* $hash.d();
        resolve(HashProductType.create(productType));
      } else if (type === "MarkedProductType") {
        const marker = yield* $id.d();
        const productType = MarkedProductType.create(marker, undefined);
        stack.push(child => productType.child = child);
        resolve(productType);
      } else if (type === "UnknownProductType") {
        resolve(UnknownProductType.create());
      } else if (type === "TupleProductType") {
        const length = yield* $uint8.d();
        const productType = TupleProductType.create(Array(length));

        for (let i = length - 1; i >= 0; i--) {
          stack.push(child => productType.elementTypes[i] = child);
        }

        resolve(productType);
      } else if (type === "ArrayProductType") {
        const productType = ArrayProductType.create(undefined);
        stack.push(child => productType.elementType = child);
        resolve(productType);
      } else {
        assertNever(type);
      }
    }

    return result;
  }

});
registerType("LeafProductType", $productType);
registerType("MarkedProductType", $productType);
registerType("TupleProductType", $productType);
registerType("ArrayProductType", $productType);
registerType("HashProductType", $productType);
registerType("UnknownProductType", $productType);