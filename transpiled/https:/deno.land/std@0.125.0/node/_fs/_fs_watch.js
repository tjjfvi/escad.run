// Copyright 2018-2022 the Deno authors. All rights reserved. MIT license.
import { fromFileUrl } from "/transpiled/https://deno.land/std@0.125.0/node/path.js";
import { EventEmitter } from "/transpiled/https://deno.land/std@0.125.0/node/events.js";
import { notImplemented } from "/transpiled/https://deno.land/std@0.125.0/node/_utils.js";
export function asyncIterableIteratorToCallback(iterator, callback) {
    function next() {
        iterator.next().then((obj) => {
            if (obj.done) {
                callback(obj.value, true);
                return;
            }
            callback(obj.value);
            next();
        });
    }
    next();
}
export function asyncIterableToCallback(iter, callback, errCallback) {
    const iterator = iter[Symbol.asyncIterator]();
    function next() {
        iterator.next().then((obj) => {
            if (obj.done) {
                callback(obj.value, true);
                return;
            }
            callback(obj.value);
            next();
        }, errCallback);
    }
    next();
}
export function watch(filename, optionsOrListener, optionsOrListener2) {
    const listener = typeof optionsOrListener === "function"
        ? optionsOrListener
        : typeof optionsOrListener2 === "function"
            ? optionsOrListener2
            : undefined;
    const options = typeof optionsOrListener === "object"
        ? optionsOrListener
        : typeof optionsOrListener2 === "object"
            ? optionsOrListener2
            : undefined;
    filename = filename instanceof URL ? fromFileUrl(filename) : filename;
    const iterator = Deno.watchFs(filename, {
        recursive: options?.recursive || false,
    });
    if (!listener)
        throw new Error("No callback function supplied");
    const fsWatcher = new FSWatcher(() => {
        if (iterator.return)
            iterator.return();
    });
    fsWatcher.on("change", listener);
    asyncIterableToCallback(iterator, (val, done) => {
        if (done)
            return;
        fsWatcher.emit("change", val.kind, val.paths[0]);
    }, (e) => {
        fsWatcher.emit("error", e);
    });
    return fsWatcher;
}
export { watch as watchFile };
class FSWatcher extends EventEmitter {
    close;
    constructor(closer) {
        super();
        this.close = closer;
    }
    ref() {
        notImplemented("FSWatcher.ref() is not implemented");
    }
    unref() {
        notImplemented("FSWatcher.unref() is not implemented");
    }
}
