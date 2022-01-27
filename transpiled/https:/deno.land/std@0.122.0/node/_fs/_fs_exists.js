// Copyright 2018-2021 the Deno authors. All rights reserved. MIT license.
import { fromFileUrl } from "/transpiled/https://deno.land/std@0.122.0/node/path.js";
/**
 * TODO: Also accept 'path' parameter as a Node polyfill Buffer type once these
 * are implemented. See https://github.com/denoland/deno/issues/3403
 * Deprecated in node api
 */
export function exists(path, callback) {
    path = path instanceof URL ? fromFileUrl(path) : path;
    Deno.lstat(path).then(() => callback(true), () => callback(false));
}
/**
 * TODO: Also accept 'path' parameter as a Node polyfill Buffer or URL type once these
 * are implemented. See https://github.com/denoland/deno/issues/3403
 */
export function existsSync(path) {
    path = path instanceof URL ? fromFileUrl(path) : path;
    try {
        Deno.lstatSync(path);
        return true;
    }
    catch (err) {
        if (err instanceof Deno.errors.NotFound) {
            return false;
        }
        throw err;
    }
}
