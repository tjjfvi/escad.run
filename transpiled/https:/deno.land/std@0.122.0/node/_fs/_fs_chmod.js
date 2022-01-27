import { getValidatedPath } from "/transpiled/https://deno.land/std@0.122.0/node/internal/fs/utils.js";
import * as pathModule from "/transpiled/https://deno.land/std@0.122.0/path/mod.js";
import { parseFileMode } from "/transpiled/https://deno.land/std@0.122.0/node/internal/validators.js";
export function chmod(path, mode, callback) {
    path = getValidatedPath(path).toString();
    mode = parseFileMode(mode, "mode");
    Deno.chmod(pathModule.toNamespacedPath(path), mode).then(() => callback(null), callback);
}
export function chmodSync(path, mode) {
    path = getValidatedPath(path).toString();
    mode = parseFileMode(mode, "mode");
    Deno.chmodSync(pathModule.toNamespacedPath(path), mode);
}
