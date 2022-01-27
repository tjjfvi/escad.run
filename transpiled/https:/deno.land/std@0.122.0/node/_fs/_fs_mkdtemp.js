// Copyright Node.js contributors. All rights reserved. MIT License.
import { existsSync } from "/transpiled/https://deno.land/std@0.122.0/node/_fs/_fs_exists.js";
import { mkdir, mkdirSync } from "/transpiled/https://deno.land/std@0.122.0/node/_fs/_fs_mkdir.js";
import { ERR_INVALID_CALLBACK, ERR_INVALID_OPT_VALUE_ENCODING, } from "/transpiled/https://deno.land/std@0.122.0/node/_errors.js";
export function mkdtemp(prefix, optionsOrCallback, maybeCallback) {
    const callback = typeof optionsOrCallback == "function" ? optionsOrCallback : maybeCallback;
    if (!callback)
        throw new ERR_INVALID_CALLBACK(callback);
    const encoding = parseEncoding(optionsOrCallback);
    const path = tempDirPath(prefix);
    mkdir(path, { recursive: false, mode: 0o700 }, (err) => {
        if (err)
            callback(err);
        else
            callback(null, decode(path, encoding));
    });
}
// https://nodejs.org/dist/latest-v15.x/docs/api/fs.html#fs_fs_mkdtempsync_prefix_options
export function mkdtempSync(prefix, options) {
    const encoding = parseEncoding(options);
    const path = tempDirPath(prefix);
    mkdirSync(path, { recursive: false, mode: 0o700 });
    return decode(path, encoding);
}
function parseEncoding(optionsOrCallback) {
    let encoding;
    if (typeof optionsOrCallback == "function")
        encoding = undefined;
    else if (optionsOrCallback instanceof Object) {
        encoding = optionsOrCallback?.encoding;
    }
    else
        encoding = optionsOrCallback;
    if (encoding) {
        try {
            new TextDecoder(encoding);
        }
        catch {
            throw new ERR_INVALID_OPT_VALUE_ENCODING(encoding);
        }
    }
    return encoding;
}
function decode(str, encoding) {
    if (!encoding)
        return str;
    else {
        const decoder = new TextDecoder(encoding);
        const encoder = new TextEncoder();
        return decoder.decode(encoder.encode(str));
    }
}
const CHARS = "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
function randomName() {
    return [...Array(6)].map(() => CHARS[Math.floor(Math.random() * CHARS.length)]).join("");
}
function tempDirPath(prefix) {
    let path;
    do {
        path = prefix + randomName();
    } while (existsSync(path));
    return path;
}
