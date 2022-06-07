import { Operation } from "/transpiled/https://escad.dev/core/chaining/Operation.js";
import { Element } from "/transpiled/https://escad.dev/core/chaining/Element.js";
export const mapOperation = (name, func, opts = {}) => Operation.create(name, async arg => {
  const argArr = await Element.toArray(arg);
  const flattenedArg = argArr.length === 1 ? argArr[0] : arg;
  const output = Element.map(flattenedArg, value => func(value, arg));
  return output;
}, opts);