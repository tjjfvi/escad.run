import { createLeafProductUtils, Id } from "/transpiled/https://escad.dev/core/mod.js";
const valueWrapperProductId = Id.create(import.meta.url, "@escad/builtins", "LeafProduct", "ValueWrapperProduct");
export const ValueWrapperProduct = {
    create: (value) => ({
        type: valueWrapperProductId,
        value,
    }),
    ...createLeafProductUtils(valueWrapperProductId, "ValueWrapperProduct"),
    id: valueWrapperProductId,
};
