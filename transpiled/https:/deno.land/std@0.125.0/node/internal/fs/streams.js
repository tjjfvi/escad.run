// Copyright 2018-2022 the Deno authors. All rights reserved. MIT license.
// Copyright Joyent, Inc. and Node.js contributors. All rights reserved. MIT license.
import { Writable } from "/transpiled/https://deno.land/std@0.125.0/node/stream.js";
import { toPathIfFileURL } from "/transpiled/https://deno.land/std@0.125.0/node/internal/url.js";
import { open } from "/transpiled/https://deno.land/std@0.125.0/node/_fs/_fs_open.js";
import { write } from "/transpiled/https://deno.land/std@0.125.0/node/_fs/_fs_write.js";
const kFs = Symbol("kFs");
const kIsPerformingIO = Symbol("kIsPerformingIO");
const kIoDone = Symbol("kIoDone");
export class WriteStreamClass extends Writable {
    fd = null;
    path;
    flags;
    mode;
    bytesWritten = 0;
    pos = 0;
    [kFs] = { open, write };
    [kIsPerformingIO] = false;
    constructor(path, opts = {}) {
        super();
        this.path = toPathIfFileURL(path);
        this.flags = opts.flags;
        this.mode = opts.mode;
        this[kFs] = opts.fs ?? { open, write };
        if (opts.encoding) {
            this.setDefaultEncoding(opts.encoding);
        }
    }
    async _construct(callback) {
        // Note: this line is necessary to pass test-fs-write-stream.js test case.
        await Promise.resolve();
        this[kFs].open(this.path.toString(), this.flags, this.mode, (err, fd) => {
            if (err) {
                callback(err);
                return;
            }
            this.fd = fd;
            callback();
            this.emit("open", this.fd);
            this.emit("ready");
        });
    }
    _write(data, _encoding, cb) {
        this[kIsPerformingIO] = true;
        this[kFs].write(this.fd, data, 0, data.length, this.pos, (er, bytes) => {
            this[kIsPerformingIO] = false;
            if (this.destroyed) {
                // Tell ._destroy() that it's safe to close the fd now.
                cb(er);
                return this.emit(kIoDone, er);
            }
            if (er) {
                return cb(er);
            }
            this.bytesWritten += bytes;
            cb();
        });
        if (this.pos !== undefined) {
            this.pos += data.length;
        }
    }
    _destroy(err, cb) {
        if (this[kIsPerformingIO]) {
            this.once(kIoDone, (er) => close(this, err || er, cb));
        }
        else {
            close(this, err, cb);
        }
    }
}
// deno-lint-ignore no-explicit-any
function close(stream, err, cb) {
    if (!stream.fd) {
        cb(err);
    }
    else {
        stream[kFs].close(stream.fd, (er) => {
            cb(er || err);
        });
        stream.fd = null;
    }
}
export function WriteStream(path, opts) {
    return new WriteStreamClass(path, opts);
}
WriteStream.prototype = WriteStreamClass.prototype;
export function createWriteStream(path, opts) {
    return new WriteStreamClass(path, opts);
}
