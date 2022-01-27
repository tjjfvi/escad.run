// Copyright 2018-2021 the Deno authors. All rights reserved. MIT license.
// Copyright Joyent, Inc. and Node.js contributors. All rights reserved. MIT license.
import { stderr as _stderr, stdout as _stdout, } from "/transpiled/https://deno.land/std@0.122.0/node/internal/streams/readable.js";
import { Buffer } from "/transpiled/https://deno.land/std@0.122.0/node/buffer.js";
import { Readable } from "/transpiled/https://deno.land/std@0.122.0/node/stream.js";
/** https://nodejs.org/api/process.html#process_process_stderr */
export const stderr = _stderr;
/** https://nodejs.org/api/process.html#process_process_stdin */
export const stdin = new Readable({
    highWaterMark: 0,
    emitClose: false,
    read(size) {
        const p = Buffer.alloc(size || 16 * 1024);
        if (!Deno.stdin) {
            this.destroy(new Error("Deno.stdin is not available in this environment"));
            return;
        }
        Deno.stdin.read(p).then((length) => {
            this.push(length === null ? null : p.slice(0, length));
        }, (error) => {
            this.destroy(error);
        });
    },
});
stdin.on("close", () => Deno.stdin?.close());
stdin.fd = Deno.stdin?.rid ?? -1;
Object.defineProperty(stdin, "isTTY", {
    enumerable: true,
    configurable: true,
    get() {
        return Deno.isatty?.(Deno.stdin.rid);
    },
});
stdin._isRawMode = false;
stdin.setRawMode = (enable) => {
    Deno.setRaw?.(Deno.stdin?.rid, enable);
    stdin._isRawMode = enable;
    return stdin;
};
Object.defineProperty(stdin, "isRaw", {
    enumerable: true,
    configurable: true,
    get() {
        return stdin._isRawMode;
    },
});
/** https://nodejs.org/api/process.html#process_process_stdout */
export const stdout = _stdout;
