import { conversionRegistry, GenericComponent, mapOperation, Product, ProductType, } from "/transpiled/https://escad.dev/core/mod.js";
import { ValueWrapperProduct } from "/transpiled/https://escad.dev/builtins/ValueWrapperProduct.js";
export const attribute = GenericComponent.create("attribute", (productType, path) => mapOperation("attribute", async (rawProduct) => {
    const product = await conversionRegistry.convertProduct(ProductType.fromProductTypeish(productType), rawProduct);
    const value = path.split(".").reduce((obj, part) => obj[part], product);
    const wrappedValue = Product.isProduct(value)
        ? value
        : ValueWrapperProduct.create(rawProduct);
    return wrappedValue;
}, { showOutput: false }), { showOutput: false });
