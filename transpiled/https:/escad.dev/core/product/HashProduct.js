import { checkTypeProperty, Hash } from "/transpiled/https://escad.dev/core/utils/mod.js";
import { artifactManager as defaultArtifactManager } from "/transpiled/https://escad.dev/core/artifacts/mod.js";
import { Product } from "/transpiled/https://escad.dev/core/product/Product.js";
export const HashProduct = {
    create: (hash, productType) => ({
        type: "HashProduct",
        hash,
        productType,
    }),
    fromProduct: (product, artifactManager = defaultArtifactManager) => {
        const productType = Product.getProductType(product);
        artifactManager.storeRaw(product), artifactManager.storeRaw(productType);
        return HashProduct.create(Hash.create(product), Hash.create(productType));
    },
    getHashProductType: (product) => HashProductType.create(product.productType),
    isHashProduct: checkTypeProperty.string("HashProduct"),
};
export const HashProductType = {
    create: (productType) => ({
        type: "HashProductType",
        productType,
    }),
    isHashProductType: checkTypeProperty.string("HashProductType"),
};
