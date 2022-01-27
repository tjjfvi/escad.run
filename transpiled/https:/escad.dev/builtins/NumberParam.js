import { Id } from "/transpiled/https://escad.dev/core/mod.js";
const numberParamId = Id.create(import.meta.url, "@escad/builtins", "Parameter", "NumberParam");
export const NumberParam = {
    create: (args) => ({
        ...args,
        type: numberParamId,
    }),
    id: numberParamId,
};
export const numberParam = NumberParam.create;
