import { fromFileUrl } from "/transpiled/https://deno.land/std@0.125.0/node/path.js";
export function truncate(path, lenOrCallback, maybeCallback) {
    path = path instanceof URL ? fromFileUrl(path) : path;
    const len = typeof lenOrCallback === "number"
        ? lenOrCallback
        : undefined;
    const callback = typeof lenOrCallback === "function"
        ? lenOrCallback
        : maybeCallback;
    if (!callback)
        throw new Error("No callback function supplied");
    Deno.truncate(path, len).then(() => callback(null), callback);
}
export function truncateSync(path, len) {
    path = path instanceof URL ? fromFileUrl(path) : path;
    Deno.truncateSync(path, len);
}
