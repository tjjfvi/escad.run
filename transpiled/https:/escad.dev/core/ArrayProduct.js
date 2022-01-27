import { checkTypeProperty } from "/transpiled/https://escad.dev/core/checkTypeProperty.js";
import { Product, ProductType } from "/transpiled/https://escad.dev/core/Product.js";
export const ArrayProduct = {
    create: (children) => {
        if (children.length === 0) {
            throw new Error("ArrayProducts cannot be empty");
        }
        const childProductType = Product.getProductType(children[0]);
        if (children.slice(1).some((x) => !Product.isProduct(x, childProductType))) {
            throw new Error("ArrayProduct children must all be of the same product type");
        }
        return {
            type: "ArrayProduct",
            children,
        };
    },
    isArrayProduct: checkTypeProperty.string("ArrayProduct"),
    getArrayProductType: (product) => ArrayProductType.create(Product.getProductType(product.children[0])),
};
export const ArrayProductType = {
    create: (elementType) => ({
        type: "ArrayProductType",
        elementType: ProductType.fromProductTypeish(elementType),
    }),
    isArrayProductType: checkTypeProperty.string("ArrayProductType"),
};
