import { conversionRegistry, Element, GenericComponent, Operation, ProductType } from "/transpiled/https://escad.dev/core/mod.js";
export const convert = GenericComponent.create("convert", productTypeish => {
  const productType = ProductType.fromProductTypeish(productTypeish);
  return Operation.create("convert", element => Element.map(element, product => Element.create(conversionRegistry.convertProduct(productType, product))), {
    showOutput: false
  });
}, {
  showOutput: false
});