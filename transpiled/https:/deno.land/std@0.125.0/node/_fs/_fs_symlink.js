import { fromFileUrl } from "/transpiled/https://deno.land/std@0.125.0/node/path.js";
export function symlink(target, path, typeOrCallback, maybeCallback) {
    target = target instanceof URL ? fromFileUrl(target) : target;
    path = path instanceof URL ? fromFileUrl(path) : path;
    const type = typeof typeOrCallback === "string"
        ? typeOrCallback
        : "file";
    const callback = typeof typeOrCallback === "function"
        ? typeOrCallback
        : maybeCallback;
    if (!callback)
        throw new Error("No callback function supplied");
    Deno.symlink(target, path, { type }).then(() => callback(null), callback);
}
export function symlinkSync(target, path, type) {
    target = target instanceof URL ? fromFileUrl(target) : target;
    path = path instanceof URL ? fromFileUrl(path) : path;
    type = type || "file";
    Deno.symlinkSync(target, path, { type });
}
