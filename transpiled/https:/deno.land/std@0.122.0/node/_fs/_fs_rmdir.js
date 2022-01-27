import { emitRecursiveRmdirWarning, getValidatedPath, validateRmdirOptions, validateRmOptions, validateRmOptionsSync, } from "/transpiled/https://deno.land/std@0.122.0/node/internal/fs/utils.js";
import { toNamespacedPath } from "/transpiled/https://deno.land/std@0.122.0/node/path.js";
import { denoErrorToNodeError, ERR_FS_RMDIR_ENOTDIR } from "/transpiled/https://deno.land/std@0.122.0/node/_errors.js";
export function rmdir(path, optionsOrCallback, maybeCallback) {
    path = toNamespacedPath(getValidatedPath(path));
    const callback = typeof optionsOrCallback === "function"
        ? optionsOrCallback
        : maybeCallback;
    const options = typeof optionsOrCallback === "object"
        ? optionsOrCallback
        : undefined;
    if (!callback)
        throw new Error("No callback function supplied");
    if (options?.recursive) {
        emitRecursiveRmdirWarning();
        validateRmOptions(path, { ...options, force: false }, true, (err, options) => {
            if (err === false) {
                return callback(new ERR_FS_RMDIR_ENOTDIR(path.toString()));
            }
            if (err) {
                return callback(err);
            }
            Deno.remove(path, { recursive: options?.recursive })
                .then((_) => callback(), callback);
        });
    }
    else {
        validateRmdirOptions(options);
        Deno.remove(path, { recursive: options?.recursive })
            .then((_) => callback(), (err) => {
            callback(err instanceof Error
                ? denoErrorToNodeError(err, { syscall: "rmdir" })
                : err);
        });
    }
}
export function rmdirSync(path, options) {
    path = getValidatedPath(path);
    if (options?.recursive) {
        emitRecursiveRmdirWarning();
        options = validateRmOptionsSync(path, { ...options, force: false }, true);
        if (options === false) {
            throw new ERR_FS_RMDIR_ENOTDIR(path.toString());
        }
    }
    else {
        validateRmdirOptions(options);
    }
    try {
        Deno.removeSync(toNamespacedPath(path), {
            recursive: options?.recursive,
        });
    }
    catch (err) {
        throw (err instanceof Error
            ? denoErrorToNodeError(err, { syscall: "rmdir" })
            : err);
    }
}
