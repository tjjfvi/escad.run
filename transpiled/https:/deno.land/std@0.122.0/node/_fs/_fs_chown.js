// Copyright 2018-2021 the Deno authors. All rights reserved. MIT license.
import { makeCallback } from "/transpiled/https://deno.land/std@0.122.0/node/_fs/_fs_common.js";
import { getValidatedPath, kMaxUserId } from "/transpiled/https://deno.land/std@0.122.0/node/internal/fs/utils.js";
import * as pathModule from "/transpiled/https://deno.land/std@0.122.0/path/mod.js";
import { validateInteger } from "/transpiled/https://deno.land/std@0.122.0/node/internal/validators.js";
/**
 * Asynchronously changes the owner and group
 * of a file.
 */
export function chown(path, uid, gid, callback) {
    callback = makeCallback(callback);
    path = getValidatedPath(path).toString();
    validateInteger(uid, "uid", -1, kMaxUserId);
    validateInteger(gid, "gid", -1, kMaxUserId);
    Deno.chown(pathModule.toNamespacedPath(path), uid, gid).then(() => callback(null), callback);
}
/**
 * Synchronously changes the owner and group
 * of a file.
 */
export function chownSync(path, uid, gid) {
    path = getValidatedPath(path).toString();
    validateInteger(uid, "uid", -1, kMaxUserId);
    validateInteger(gid, "gid", -1, kMaxUserId);
    Deno.chownSync(pathModule.toNamespacedPath(path), uid, gid);
}
