import { checkTypeProperty } from "/transpiled/https://escad.dev/core/utils/mod.js";
import { conversionRegistry } from "/transpiled/https://escad.dev/core/conversions/mod.js";
import { Product } from "/transpiled/https://escad.dev/core/product/Product.js";
export const LeafProduct = {
    isLeafProduct: checkTypeProperty.idScope("LeafProduct"),
    getLeafProductType: (product) => LeafProductType.create(product.type),
};
export const createLeafProductUtils = (id, name) => ({
    productType: LeafProductType.create(id),
    ...{
        [`is${name}`]: (q) => Product.isProduct(q, LeafProductType.create(id)),
    },
    convert(q) {
        return conversionRegistry.convertProduct(LeafProductType.create(id), q);
    },
});
export const LeafProductType = {
    create: (id) => ({
        type: "LeafProductType",
        id,
    }),
    isLeafProductType: checkTypeProperty.string("LeafProductType"),
};
