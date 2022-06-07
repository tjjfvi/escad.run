/* eslint-disable @typescript-eslint/no-non-null-assertion */
import { $string, $uint8, $unknown, registerType, Serializer } from "/transpiled/https://escad.dev/serial/mod.js";
import { assertNever } from "/transpiled/https://escad.dev/core/utils/mod.js";
import { HashProduct, LeafProduct, MarkedProduct, UnknownProduct } from "/transpiled/https://escad.dev/core/product/mod.js";
import { $hash } from "/transpiled/https://escad.dev/core/serializers/$hash.js";
import { $id } from "/transpiled/https://escad.dev/core/serializers/$id.js";
export const $product = new Serializer({
  *s(rootProduct) {
    const stack = [rootProduct];

    while (stack.length) {
      const product = stack.shift();

      if (LeafProduct.isLeafProduct(product)) {
        yield* $string.s("LeafProduct");
        yield* $unknown.s(product);
        continue;
      }

      yield* $string.s(product.type);

      if (product.type === "HashProduct") {
        yield* $hash.s(product.hash);
        yield* $hash.s(product.productType);
      } else if (product.type === "MarkedProduct") {
        yield* $id.s(product.marker);
        stack.push(product.child);
      } else if (product.type === "UnknownProduct") {
        stack.push(product.product);
      } else if (product.type === "TupleProduct" || product.type === "ArrayProduct") {
        yield* $uint8.s(product.children.length);

        for (let i = product.children.length - 1; i >= 0; i--) {
          stack.push(product.children[i]);
        }
      } else {
        assertNever(product);
      }
    }
  },

  *d() {
    let result;
    const stack = [product => result = product];

    while (stack.length) {
      const resolve = stack.shift();
      const type = yield* $string.d();

      if (type === "LeafProduct") {
        resolve(yield* $unknown.d());
        continue;
      } else if (type === "HashProduct") {
        const hash = yield* $hash.d();
        const productType = yield* $hash.d();
        resolve(HashProduct.create(hash, productType));
      } else if (type === "MarkedProduct") {
        const marker = yield* $id.d();
        const product = MarkedProduct.create(marker, undefined);
        stack.push(child => product.child = child);
        resolve(product);
      } else if (type === "UnknownProduct") {
        const product = UnknownProduct.create(undefined);
        stack.push(child => product.product = child);
        resolve(product);
      } else if (type === "TupleProduct" || type === "ArrayProduct") {
        const length = yield* $uint8.d();
        const children = Array(length);
        const product = {
          type,
          children
        };

        for (let i = product.children.length - 1; i >= 0; i--) {
          stack.push(child => children[i] = child);
        }

        resolve(product);
      } else {
        assertNever(type);
      }
    }

    return result;
  }

});
registerType("MarkedProduct", $product);
registerType("TupleProduct", $product);
registerType("ArrayProduct", $product);
registerType("HashProduct", $product);
registerType("UnknownProduct", $product);