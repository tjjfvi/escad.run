import { Element, Operation } from "/transpiled/https://escad.dev/core/mod.js";
import { diff } from "/transpiled/https://escad.dev/3d/chainables/diff.js";
export const udMeld = Operation.create("udMeld", async el => {
  let args = await Element.toArrayDeep(el);

  if (!(args instanceof Array)) {
    return [[args], []];
  }

  let dargs = [[], []];

  for (let arg of args) {
    if (arg instanceof Array) {
      dargs[0].push(arg[0]);
      dargs[1].push(...arg.slice(1));
    } else dargs[0].push(arg);
  }

  return dargs;
});
export const unionDiff = Operation.create("unionDiff", async el => diff(udMeld(...(await Element.toArray(el)))));
export const unionDiffMeld = udMeld;