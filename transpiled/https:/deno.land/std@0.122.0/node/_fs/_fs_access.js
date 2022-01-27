// Copyright 2018-2021 the Deno authors. All rights reserved. MIT license.
import { makeCallback } from "/transpiled/https://deno.land/std@0.122.0/node/_fs/_fs_common.js";
import { fs } from "/transpiled/https://deno.land/std@0.122.0/node/internal_binding/constants.js";
import { getValidatedPath, getValidMode } from "/transpiled/https://deno.land/std@0.122.0/node/internal/fs/utils.js";
export function access(path, mode, callback) {
    if (typeof mode === "function") {
        callback = mode;
        mode = fs.F_OK;
    }
    path = getValidatedPath(path).toString();
    mode = getValidMode(mode, "access");
    const cb = makeCallback(callback);
    Deno.lstat(path).then((info) => {
        const m = +mode || 0;
        const fileMode = +info.mode || 0;
        // FIXME(kt3k): use the last digit of file mode as its mode for now
        // This is not correct if the user is the owner of the file
        // or is a member of the owner group
        if ((m & fileMode) === m) {
            // all required flags exist
            cb(null);
        }
        else {
            // some required flags don't
            const e = new Error(`EACCES: permission denied, access '${path}'`);
            // deno-lint-ignore no-explicit-any
            e.code = "EACCES";
            // deno-lint-ignore no-explicit-any
            e.path = path;
            // deno-lint-ignore no-explicit-any
            e.syscall = "access";
            cb(e);
        }
    }, (err) => {
        if (err instanceof Deno.errors.NotFound) {
            const e = new Error(`ENOENT: no such file or directory, access '${path}'`);
            // deno-lint-ignore no-explicit-any
            e.code = "ENOENT";
            // deno-lint-ignore no-explicit-any
            e.path = path;
            // deno-lint-ignore no-explicit-any
            e.syscall = "access";
            cb(e);
        }
        else {
            cb(err);
        }
    });
}
export function accessSync(path, mode) {
    path = getValidatedPath(path).toString();
    mode = getValidMode(mode, "access");
    try {
        const info = Deno.lstatSync(path.toString());
        const m = +mode || 0;
        const fileMode = +info.mode || 0;
        // FIXME(kt3k): use the last digit of file mode as its mode for now
        // This is not correct if the user is the owner of the file
        // or is a member of the owner group
        if ((m & fileMode) === m) {
            // all required flags exist
        }
        else {
            // some required flags don't
            const e = new Error(`EACCES: permission denied, access '${path}'`);
            // deno-lint-ignore no-explicit-any
            e.code = "EACCES";
            // deno-lint-ignore no-explicit-any
            e.path = path;
            // deno-lint-ignore no-explicit-any
            e.syscall = "access";
            throw e;
        }
    }
    catch (err) {
        if (err instanceof Deno.errors.NotFound) {
            const e = new Error(`ENOENT: no such file or directory, access '${path}'`);
            // deno-lint-ignore no-explicit-any
            e.code = "ENOENT";
            // deno-lint-ignore no-explicit-any
            e.path = path;
            // deno-lint-ignore no-explicit-any
            e.syscall = "access";
            throw e;
        }
        else {
            throw err;
        }
    }
}
