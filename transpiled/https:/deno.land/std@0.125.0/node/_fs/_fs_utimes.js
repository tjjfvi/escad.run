// Copyright 2018-2022 the Deno authors. All rights reserved. MIT license.
import * as DenoUnstable from "/transpiled/https://deno.land/std@0.125.0/_deno_unstable.js";
import { fromFileUrl } from "/transpiled/https://deno.land/std@0.125.0/node/path.js";
function getValidTime(time, name) {
    if (typeof time === "string") {
        time = Number(time);
    }
    if (typeof time === "number" &&
        (Number.isNaN(time) || !Number.isFinite(time))) {
        throw new Deno.errors.InvalidData(`invalid ${name}, must not be infinity or NaN`);
    }
    return time;
}
export function utimes(path, atime, mtime, callback) {
    path = path instanceof URL ? fromFileUrl(path) : path;
    if (!callback) {
        throw new Deno.errors.InvalidData("No callback function supplied");
    }
    atime = getValidTime(atime, "atime");
    mtime = getValidTime(mtime, "mtime");
    DenoUnstable.utime(path, atime, mtime).then(() => callback(null), callback);
}
export function utimesSync(path, atime, mtime) {
    path = path instanceof URL ? fromFileUrl(path) : path;
    atime = getValidTime(atime, "atime");
    mtime = getValidTime(mtime, "mtime");
    DenoUnstable.utimeSync(path, atime, mtime);
}
