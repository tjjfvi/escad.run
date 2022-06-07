import { Id } from "/transpiled/https://escad.dev/core/utils/mod.js";
const booleanParamId = Id.create(import.meta.url, "@escad/core", "Parameter", "BooleanParam");
export const BooleanParam = {
  create: args => ({ ...args,
    type: booleanParamId
  }),
  id: booleanParamId
};
export const booleanParam = BooleanParam.create;