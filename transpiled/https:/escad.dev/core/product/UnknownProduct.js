import { checkTypeProperty } from "/transpiled/https://escad.dev/core/utils/mod.js";
export const UnknownProduct = {
  create: product => ({
    type: "UnknownProduct",
    product
  }),
  isUnknownProduct: checkTypeProperty.string("UnknownProduct")
};
export const UnknownProductType = {
  create: () => ({
    type: "UnknownProductType"
  }),
  isUnknownProductType: checkTypeProperty.string("UnknownProductType")
};