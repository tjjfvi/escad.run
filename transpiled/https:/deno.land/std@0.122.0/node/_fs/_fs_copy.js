import { fromFileUrl } from "/transpiled/https://deno.land/std@0.122.0/node/path.js";
export function copyFile(source, destination, callback) {
    source = source instanceof URL ? fromFileUrl(source) : source;
    Deno.copyFile(source, destination).then(() => callback(null), callback);
}
export function copyFileSync(source, destination) {
    source = source instanceof URL ? fromFileUrl(source) : source;
    Deno.copyFileSync(source, destination);
}
