export function realpath(path, options, callback) {
    if (typeof options === "function") {
        callback = options;
    }
    if (!callback) {
        throw new Error("No callback function supplied");
    }
    Deno.realPath(path).then((path) => callback(null, path), (err) => callback(err));
}
export function realpathSync(path) {
    return Deno.realPathSync(path);
}
