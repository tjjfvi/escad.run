import { fromFileUrl } from "/transpiled/https://deno.land/std@0.122.0/node/path.js";
export function mkdir(path, options, callback) {
    path = path instanceof URL ? fromFileUrl(path) : path;
    let mode = 0o777;
    let recursive = false;
    if (typeof options == "function") {
        callback = options;
    }
    else if (typeof options === "number") {
        mode = options;
    }
    else if (typeof options === "boolean") {
        recursive = options;
    }
    else if (options) {
        if (options.recursive !== undefined)
            recursive = options.recursive;
        if (options.mode !== undefined)
            mode = options.mode;
    }
    if (typeof recursive !== "boolean") {
        throw new Deno.errors.InvalidData("invalid recursive option , must be a boolean");
    }
    Deno.mkdir(path, { recursive, mode })
        .then(() => {
        if (typeof callback === "function") {
            callback(null);
        }
    }, (err) => {
        if (typeof callback === "function") {
            callback(err);
        }
    });
}
export function mkdirSync(path, options) {
    path = path instanceof URL ? fromFileUrl(path) : path;
    let mode = 0o777;
    let recursive = false;
    if (typeof options === "number") {
        mode = options;
    }
    else if (typeof options === "boolean") {
        recursive = options;
    }
    else if (options) {
        if (options.recursive !== undefined)
            recursive = options.recursive;
        if (options.mode !== undefined)
            mode = options.mode;
    }
    if (typeof recursive !== "boolean") {
        throw new Deno.errors.InvalidData("invalid recursive option , must be a boolean");
    }
    Deno.mkdirSync(path, { recursive, mode });
}
