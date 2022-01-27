import React from "/transpiled/https://escad.dev/deps/react.js";
import { ArrayProductType, LeafProductType, TupleProductType, } from "/transpiled/https://escad.dev/core/mod.js";
import { IdView } from "/transpiled/https://escad.dev/client/IdView.js";
export const ProductTypeView = ({ productType }) => {
    if (LeafProductType.isLeafProductType(productType)) {
        return React.createElement(IdView, { id: productType.id });
    }
    if (TupleProductType.isTupleProductType(productType)) {
        return (React.createElement("span", { className: "ProductType" },
            "[",
            productType.elementTypes.map((x, i) => (React.createElement(React.Fragment, { key: i },
                i === 0 ? null : ", ",
                React.createElement(ProductTypeView, { productType: x })))),
            "]"));
    }
    if (ArrayProductType.isArrayProductType(productType)) {
        return (React.createElement("span", { className: "ProductType" },
            React.createElement(ProductTypeView, { productType: productType.elementType }),
            "[]"));
    }
    throw new Error("Invalid product type passed to ProductTypeView");
};
