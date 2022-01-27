import { Product, ProductType } from "/transpiled/https://escad.dev/core/Product.js";
import { checkTypeProperty } from "/transpiled/https://escad.dev/core/checkTypeProperty.js";
export const MarkedProduct = {
    create: (marker, child) => ({
        type: "MarkedProduct",
        marker,
        child,
    }),
    isMarkedProduct: checkTypeProperty.string("MarkedProduct"),
    getMarkedProductType: (product) => MarkedProductType.create(product.marker, Product.getProductType(product.child)),
    for: (marker) => ({
        create: (child) => MarkedProduct.create(marker, child),
        createProductType: (child) => MarkedProductType.create(marker, child),
    }),
};
export const MarkedProductType = {
    create: (marker, child) => ({
        type: "MarkedProductType",
        marker,
        child: ProductType.fromProductTypeish(child),
    }),
    isMarkedProductType: checkTypeProperty.string("MarkedProductType"),
};
