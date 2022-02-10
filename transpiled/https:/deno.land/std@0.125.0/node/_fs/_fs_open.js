// Copyright 2018-2022 the Deno authors. All rights reserved. MIT license.
import { existsSync } from "/transpiled/https://deno.land/std@0.125.0/fs/exists.js";
import { fromFileUrl } from "/transpiled/https://deno.land/std@0.125.0/node/path.js";
import { getOpenOptions } from "/transpiled/https://deno.land/std@0.125.0/node/_fs/_fs_common.js";
function convertFlagAndModeToOptions(flag, mode) {
    if (!flag && !mode)
        return undefined;
    if (!flag && mode)
        return { mode };
    return { ...getOpenOptions(flag), mode };
}
export function open(path, flagsOrCallback, callbackOrMode, maybeCallback) {
    const flags = typeof flagsOrCallback === "string"
        ? flagsOrCallback
        : undefined;
    const callback = typeof flagsOrCallback === "function"
        ? flagsOrCallback
        : typeof callbackOrMode === "function"
            ? callbackOrMode
            : maybeCallback;
    const mode = typeof callbackOrMode === "number" ? callbackOrMode : undefined;
    path = path instanceof URL ? fromFileUrl(path) : path;
    if (!callback)
        throw new Error("No callback function supplied");
    if (["ax", "ax+", "wx", "wx+"].includes(flags || "") && existsSync(path)) {
        const err = new Error(`EEXIST: file already exists, open '${path}'`);
        callback(err);
    }
    else {
        if (flags === "as" || flags === "as+") {
            let err = null, res;
            try {
                res = openSync(path, flags, mode);
            }
            catch (error) {
                err = error instanceof Error ? error : new Error("[non-error thrown]");
            }
            if (err) {
                callback(err);
            }
            else {
                callback(null, res);
            }
            return;
        }
        Deno.open(path, convertFlagAndModeToOptions(flags, mode)).then((file) => callback(null, file.rid), (err) => callback(err));
    }
}
export function openSync(path, flagsOrMode, maybeMode) {
    const flags = typeof flagsOrMode === "string" ? flagsOrMode : undefined;
    const mode = typeof flagsOrMode === "number" ? flagsOrMode : maybeMode;
    path = path instanceof URL ? fromFileUrl(path) : path;
    if (["ax", "ax+", "wx", "wx+"].includes(flags || "") && existsSync(path)) {
        throw new Error(`EEXIST: file already exists, open '${path}'`);
    }
    return Deno.openSync(path, convertFlagAndModeToOptions(flags, mode)).rid;
}
