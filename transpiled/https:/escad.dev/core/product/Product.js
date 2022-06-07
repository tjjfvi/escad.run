import { Hash, Timer } from "/transpiled/https://escad.dev/core/utils/mod.js";
import { LeafProduct, LeafProductType } from "/transpiled/https://escad.dev/core/product/LeafProduct.js";
import { TupleProduct, TupleProductType } from "/transpiled/https://escad.dev/core/product/TupleProduct.js";
import { ArrayProduct, ArrayProductType } from "/transpiled/https://escad.dev/core/product/ArrayProduct.js";
import { UnknownProduct, UnknownProductType } from "/transpiled/https://escad.dev/core/product/UnknownProduct.js";
import { MarkedProduct, MarkedProductType } from "/transpiled/https://escad.dev/core/product/MarkedProduct.js";
import { HashProduct, HashProductType } from "/transpiled/https://escad.dev/core/product/HashProduct.js";
export const Product = {
  isProduct,
  getProductType: Timer.create().timeFn(product => {
    if (LeafProduct.isLeafProduct(product)) {
      return LeafProduct.getLeafProductType(product);
    }

    if (MarkedProduct.isMarkedProduct(product)) {
      return MarkedProduct.getMarkedProductType(product);
    }

    if (TupleProduct.isTupleProduct(product)) {
      return TupleProduct.getTupleProductType(product);
    }

    if (ArrayProduct.isArrayProduct(product)) {
      return ArrayProduct.getArrayProductType(product);
    }

    if (HashProduct.isHashProduct(product)) {
      return HashProduct.getHashProductType(product);
    }

    if (UnknownProduct.isUnknownProduct(product)) {
      return UnknownProductType.create();
    }

    throw new Error("Invalid product passed to Product.getProductType");
  })
};

function isProduct(arg, productType) {
  return (LeafProduct.isLeafProduct(arg) || MarkedProduct.isMarkedProduct(arg) || TupleProduct.isTupleProduct(arg) || ArrayProduct.isArrayProduct(arg) || HashProduct.isHashProduct(arg) || UnknownProduct.isUnknownProduct(arg)) && (!productType || Hash.equal(Product.getProductType(arg), productType));
}

export const ProductType = {
  isProductType: value => LeafProductType.isLeafProductType(value) || MarkedProductType.isMarkedProductType(value) || TupleProductType.isTupleProductType(value) || ArrayProductType.isArrayProductType(value) || HashProductType.isHashProductType(value) || UnknownProductType.isUnknownProductType(value),
  fromProductTypeish: productTypeish => ProductType.isProductType(productTypeish) ? productTypeish : productTypeish?.productType
};