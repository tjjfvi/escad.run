import { fromFileUrl } from "/transpiled/https://deno.land/std@0.122.0/node/path.js";
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
    Deno.utime(path, atime, mtime).then(() => callback(null), callback);
}
export function utimesSync(path, atime, mtime) {
    path = path instanceof URL ? fromFileUrl(path) : path;
    atime = getValidTime(atime, "atime");
    mtime = getValidTime(mtime, "mtime");
    Deno.utimeSync(path, atime, mtime);
}
