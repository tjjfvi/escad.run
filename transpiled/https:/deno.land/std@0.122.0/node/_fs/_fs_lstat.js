import { CFISBIS, } from "/transpiled/https://deno.land/std@0.122.0/node/_fs/_fs_stat.js";
export function lstat(path, optionsOrCallback, maybeCallback) {
    const callback = (typeof optionsOrCallback === "function"
        ? optionsOrCallback
        : maybeCallback);
    const options = typeof optionsOrCallback === "object"
        ? optionsOrCallback
        : { bigint: false };
    if (!callback)
        throw new Error("No callback function supplied");
    Deno.lstat(path).then((stat) => callback(null, CFISBIS(stat, options.bigint)), (err) => callback(err));
}
export function lstatSync(path, options) {
    const origin = Deno.lstatSync(path);
    return CFISBIS(origin, options?.bigint || false);
}
