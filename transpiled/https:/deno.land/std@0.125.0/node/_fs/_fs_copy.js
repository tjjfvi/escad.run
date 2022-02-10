import { makeCallback } from "/transpiled/https://deno.land/std@0.125.0/node/_fs/_fs_common.js";
import { getValidatedPath, getValidMode } from "/transpiled/https://deno.land/std@0.125.0/node/internal/fs/utils.js";
import { fs, os } from "/transpiled/https://deno.land/std@0.125.0/node/internal_binding/constants.js";
export function copyFile(src, dest, mode, callback) {
    if (typeof mode === "function") {
        callback = mode;
        mode = 0;
    }
    const srcStr = getValidatedPath(src, "src").toString();
    const destStr = getValidatedPath(dest, "dest").toString();
    const modeNum = getValidMode(mode, "copyFile");
    const cb = makeCallback(callback);
    if ((modeNum & fs.COPYFILE_EXCL) === fs.COPYFILE_EXCL) {
        Deno.lstat(destStr).then(() => {
            // deno-lint-ignore no-explicit-any
            const e = new Error(`EEXIST: file already exists, copyfile '${srcStr}' -> '${destStr}'`);
            e.syscall = "copyfile";
            e.errno = os.errno.EEXIST;
            e.code = "EEXIST";
            cb(e);
        }, (e) => {
            if (e instanceof Deno.errors.NotFound) {
                Deno.copyFile(srcStr, destStr).then(() => cb(null), cb);
            }
            cb(e);
        });
    }
    else {
        Deno.copyFile(srcStr, destStr).then(() => cb(null), cb);
    }
}
export function copyFileSync(src, dest, mode) {
    const srcStr = getValidatedPath(src, "src").toString();
    const destStr = getValidatedPath(dest, "dest").toString();
    const modeNum = getValidMode(mode, "copyFile");
    if ((modeNum & fs.COPYFILE_EXCL) === fs.COPYFILE_EXCL) {
        try {
            Deno.lstatSync(destStr);
            throw new Error(`A file exists at the destination: ${destStr}`);
        }
        catch (e) {
            if (e instanceof Deno.errors.NotFound) {
                Deno.copyFileSync(srcStr, destStr);
            }
            throw e;
        }
    }
    else {
        Deno.copyFileSync(srcStr, destStr);
    }
}
