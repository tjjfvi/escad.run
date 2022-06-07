import { Id } from "/transpiled/https://escad.dev/core/utils/mod.js";
const numberParamId = Id.create(import.meta.url, "@escad/core", "Parameter", "NumberParam");
export const NumberParam = {
  create: args => ({ ...args,
    type: numberParamId
  }),
  id: numberParamId
};
export const numberParam = NumberParam.create;