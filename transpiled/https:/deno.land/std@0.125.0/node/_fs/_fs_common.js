// Copyright 2018-2022 the Deno authors. All rights reserved. MIT license.
import { validateCallback } from "/transpiled/https://deno.land/std@0.125.0/node/internal/validators.js";
import { notImplemented, } from "/transpiled/https://deno.land/std@0.125.0/node/_utils.js";
export function isFileOptions(fileOptions) {
    if (!fileOptions)
        return false;
    return (fileOptions.encoding != undefined ||
        fileOptions.flag != undefined ||
        fileOptions.signal != undefined ||
        fileOptions.mode != undefined);
}
export function getEncoding(optOrCallback) {
    if (!optOrCallback || typeof optOrCallback === "function") {
        return null;
    }
    const encoding = typeof optOrCallback === "string"
        ? optOrCallback
        : optOrCallback.encoding;
    if (!encoding)
        return null;
    return encoding;
}
export function checkEncoding(encoding) {
    if (!encoding)
        return null;
    encoding = encoding.toLowerCase();
    if (["utf8", "hex", "base64"].includes(encoding))
        return encoding;
    if (encoding === "utf-8") {
        return "utf8";
    }
    if (encoding === "binary") {
        return "binary";
        // before this was buffer, however buffer is not used in Node
        // node -e "require('fs').readFile('../world.txt', 'buffer', console.log)"
    }
    const notImplementedEncodings = ["utf16le", "latin1", "ascii", "ucs2"];
    if (notImplementedEncodings.includes(encoding)) {
        notImplemented(`"${encoding}" encoding`);
    }
    throw new Error(`The value "${encoding}" is invalid for option "encoding"`);
}
export function getOpenOptions(flag) {
    if (!flag) {
        return { create: true, append: true };
    }
    let openOptions;
    switch (flag) {
        case "a": {
            // 'a': Open file for appending. The file is created if it does not exist.
            openOptions = { create: true, append: true };
            break;
        }
        case "ax": {
            // 'ax': Like 'a' but fails if the path exists.
            openOptions = { createNew: true, write: true, append: true };
            break;
        }
        case "a+": {
            // 'a+': Open file for reading and appending. The file is created if it does not exist.
            openOptions = { read: true, create: true, append: true };
            break;
        }
        case "ax+": {
            // 'ax+': Like 'a+' but fails if the path exists.
            openOptions = { read: true, createNew: true, append: true };
            break;
        }
        case "r": {
            // 'r': Open file for reading. An exception occurs if the file does not exist.
            openOptions = { read: true };
            break;
        }
        case "r+": {
            // 'r+': Open file for reading and writing. An exception occurs if the file does not exist.
            openOptions = { read: true, write: true };
            break;
        }
        case "w": {
            // 'w': Open file for writing. The file is created (if it does not exist) or truncated (if it exists).
            openOptions = { create: true, write: true, truncate: true };
            break;
        }
        case "wx": {
            // 'wx': Like 'w' but fails if the path exists.
            openOptions = { createNew: true, write: true };
            break;
        }
        case "w+": {
            // 'w+': Open file for reading and writing. The file is created (if it does not exist) or truncated (if it exists).
            openOptions = { create: true, write: true, truncate: true, read: true };
            break;
        }
        case "wx+": {
            // 'wx+': Like 'w+' but fails if the path exists.
            openOptions = { createNew: true, write: true, read: true };
            break;
        }
        case "as": {
            // 'as': Open file for appending in synchronous mode. The file is created if it does not exist.
            openOptions = { create: true, append: true };
            break;
        }
        case "as+": {
            // 'as+': Open file for reading and appending in synchronous mode. The file is created if it does not exist.
            openOptions = { create: true, read: true, append: true };
            break;
        }
        case "rs+": {
            // 'rs+': Open file for reading and writing in synchronous mode. Instructs the operating system to bypass the local file system cache.
            openOptions = { create: true, read: true, write: true };
            break;
        }
        default: {
            throw new Error(`Unrecognized file system flag: ${flag}`);
        }
    }
    return openOptions;
}
export { isUint32 as isFd } from "/transpiled/https://deno.land/std@0.125.0/node/internal/validators.js";
export function maybeCallback(cb) {
    validateCallback(cb);
    return cb;
}
// Ensure that callbacks run in the global context. Only use this function
// for callbacks that are passed to the binding layer, callbacks that are
// invoked from JS already run in the proper scope.
export function makeCallback(cb) {
    validateCallback(cb);
    return (...args) => Reflect.apply(cb, this, args);
}
