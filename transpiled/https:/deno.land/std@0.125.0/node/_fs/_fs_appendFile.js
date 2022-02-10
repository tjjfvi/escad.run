// Copyright 2018-2022 the Deno authors. All rights reserved. MIT license.
import { isFd, maybeCallback, } from "/transpiled/https://deno.land/std@0.125.0/node/_fs/_fs_common.js";
import { copyObject, getOptions } from "/transpiled/https://deno.land/std@0.125.0/node/internal/fs/utils.js";
import { writeFile, writeFileSync } from "/transpiled/https://deno.land/std@0.125.0/node/_fs/_fs_writeFile.js";
/**
 * TODO: Also accept 'data' parameter as a Node polyfill Buffer type once these
 * are implemented. See https://github.com/denoland/deno/issues/3403
 */
export function appendFile(path, data, options, callback) {
    callback = maybeCallback(callback || options);
    options = getOptions(options, { encoding: "utf8", mode: 0o666, flag: "a" });
    // Don't make changes directly on options object
    options = copyObject(options);
    // Force append behavior when using a supplied file descriptor
    if (!options.flag || isFd(path)) {
        options.flag = "a";
    }
    writeFile(path, data, options, callback);
}
/**
 * TODO: Also accept 'data' parameter as a Node polyfill Buffer type once these
 * are implemented. See https://github.com/denoland/deno/issues/3403
 */
export function appendFileSync(path, data, options) {
    options = getOptions(options, { encoding: "utf8", mode: 0o666, flag: "a" });
    // Don't make changes directly on options object
    options = copyObject(options);
    // Force append behavior when using a supplied file descriptor
    if (!options.flag || isFd(path)) {
        options.flag = "a";
    }
    writeFileSync(path, data, options);
}
