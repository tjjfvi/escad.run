// Copyright 2018-2022 the Deno authors. All rights reserved. MIT license.
import * as DenoUnstable from "/transpiled/https://deno.land/std@0.125.0/_deno_unstable.js";
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
export function futimes(fd, atime, mtime, callback) {
    if (!callback) {
        throw new Deno.errors.InvalidData("No callback function supplied");
    }
    atime = getValidTime(atime, "atime");
    mtime = getValidTime(mtime, "mtime");
    DenoUnstable.futime(fd, atime, mtime).then(() => callback(null), callback);
}
export function futimesSync(fd, atime, mtime) {
    atime = getValidTime(atime, "atime");
    mtime = getValidTime(mtime, "mtime");
    DenoUnstable.futimeSync(fd, atime, mtime);
}
