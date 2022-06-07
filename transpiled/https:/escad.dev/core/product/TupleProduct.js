import { checkTypeProperty } from "/transpiled/https://escad.dev/core/utils/mod.js";
import { Product, ProductType } from "/transpiled/https://escad.dev/core/product/Product.js";
export const TupleProduct = {
  create: children => ({
    type: "TupleProduct",
    children
  }),
  isTupleProduct: checkTypeProperty.string("TupleProduct"),
  getTupleProductType: product => TupleProductType.create(product.children.map(Product.getProductType))
};
export const TupleProductType = {
  create: elementTypes => ({
    type: "TupleProductType",
    elementTypes: elementTypes.map(productTypeish => ProductType.fromProductTypeish(productTypeish))
  }),
  isTupleProductType: checkTypeProperty.string("TupleProductType")
};