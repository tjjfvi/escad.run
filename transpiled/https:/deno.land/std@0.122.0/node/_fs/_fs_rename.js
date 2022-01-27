import { fromFileUrl } from "/transpiled/https://deno.land/std@0.122.0/node/path.js";
export function rename(oldPath, newPath, callback) {
    oldPath = oldPath instanceof URL ? fromFileUrl(oldPath) : oldPath;
    newPath = newPath instanceof URL ? fromFileUrl(newPath) : newPath;
    if (!callback)
        throw new Error("No callback function supplied");
    Deno.rename(oldPath, newPath).then((_) => callback(), callback);
}
export function renameSync(oldPath, newPath) {
    oldPath = oldPath instanceof URL ? fromFileUrl(oldPath) : oldPath;
    newPath = newPath instanceof URL ? fromFileUrl(newPath) : newPath;
    Deno.renameSync(oldPath, newPath);
}
