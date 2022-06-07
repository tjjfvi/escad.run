import { conversionRegistry } from "/transpiled/https://escad.dev/core/conversions/mod.js";
import { Id } from "/transpiled/https://escad.dev/core/utils/mod.js";
import { GenericComponent, mapOperation } from "/transpiled/https://escad.dev/core/chaining/mod.js";
import { createLeafProductUtils, Product, ProductType } from "/transpiled/https://escad.dev/core/product/mod.js";
export const attribute = GenericComponent.create("attribute", (productType, path) => mapOperation("attribute", async rawProduct => {
  const product = await conversionRegistry.convertProduct(ProductType.fromProductTypeish(productType), rawProduct);
  const value = path.split(".").reduce((obj, part) => obj[part], product);
  const wrappedValue = Product.isProduct(value) ? value : ValueWrapperProduct.create(rawProduct);
  return wrappedValue;
}, {
  showOutput: false
}), {
  showOutput: false
});
const valueWrapperProductId = Id.create(import.meta.url, "@escad/core", "LeafProduct", "ValueWrapperProduct");
export const ValueWrapperProduct = {
  create: value => ({
    type: valueWrapperProductId,
    value
  }),
  ...createLeafProductUtils(valueWrapperProductId, "ValueWrapperProduct"),
  id: valueWrapperProductId
};