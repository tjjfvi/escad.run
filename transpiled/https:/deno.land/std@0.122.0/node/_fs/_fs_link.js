import { fromFileUrl } from "/transpiled/https://deno.land/std@0.122.0/node/path.js";
/**
 * TODO: Also accept 'path' parameter as a Node polyfill Buffer type once these
 * are implemented. See https://github.com/denoland/deno/issues/3403
 */
export function link(existingPath, newPath, callback) {
    existingPath = existingPath instanceof URL
        ? fromFileUrl(existingPath)
        : existingPath;
    newPath = newPath instanceof URL ? fromFileUrl(newPath) : newPath;
    Deno.link(existingPath, newPath).then(() => callback(null), callback);
}
/**
 * TODO: Also accept 'path' parameter as a Node polyfill Buffer type once these
 * are implemented. See https://github.com/denoland/deno/issues/3403
 */
export function linkSync(existingPath, newPath) {
    existingPath = existingPath instanceof URL
        ? fromFileUrl(existingPath)
        : existingPath;
    newPath = newPath instanceof URL ? fromFileUrl(newPath) : newPath;
    Deno.linkSync(existingPath, newPath);
}
