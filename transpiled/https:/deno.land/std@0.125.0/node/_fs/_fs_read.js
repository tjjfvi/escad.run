// Copyright 2018-2022 the Deno authors. All rights reserved. MIT license.
import { Buffer } from "/transpiled/https://deno.land/std@0.125.0/node/buffer.js";
import { assert } from "/transpiled/https://deno.land/std@0.125.0/testing/asserts.js";
import { ERR_INVALID_ARG_VALUE } from "/transpiled/https://deno.land/std@0.125.0/node/internal/errors.js";
export function read(fd, optOrBuffer, offsetOrCallback, length, position, callback) {
    let cb;
    let offset = 0, buffer;
    if (length == null) {
        length = 0;
    }
    if (typeof offsetOrCallback === "function") {
        cb = offsetOrCallback;
    }
    else if (typeof optOrBuffer === "function") {
        cb = optOrBuffer;
    }
    else {
        offset = offsetOrCallback;
        cb = callback;
    }
    if (!cb)
        throw new Error("No callback function supplied");
    if (optOrBuffer instanceof Buffer || optOrBuffer instanceof Uint8Array) {
        buffer = optOrBuffer;
    }
    else if (typeof optOrBuffer === "function") {
        offset = 0;
        buffer = Buffer.alloc(16384);
        length = buffer.byteLength;
        position = null;
    }
    else {
        const opt = optOrBuffer;
        offset = opt.offset ?? 0;
        buffer = opt.buffer ?? Buffer.alloc(16384);
        length = opt.length ?? buffer.byteLength;
        position = opt.position ?? null;
    }
    assert(offset >= 0, "offset should be greater or equal to 0");
    assert(offset + length <= buffer.byteLength, `buffer doesn't have enough data: byteLength = ${buffer.byteLength}, offset + length = ${offset + length}`);
    if (buffer.byteLength == 0) {
        throw new ERR_INVALID_ARG_VALUE("buffer", buffer, "is empty and cannot be written");
    }
    let err = null, numberOfBytesRead = null;
    if (position) {
        Deno.seekSync(fd, position, Deno.SeekMode.Current);
    }
    try {
        numberOfBytesRead = Deno.readSync(fd, buffer);
    }
    catch (error) {
        err = error instanceof Error ? error : new Error("[non-error thrown]");
    }
    if (err) {
        callback(err);
    }
    else {
        const data = Buffer.from(buffer.buffer, offset, length);
        cb(null, numberOfBytesRead, data);
    }
    return;
}
export function readSync(fd, buffer, offsetOrOpt, length, position) {
    let offset = 0;
    if (length == null) {
        length = 0;
    }
    if (buffer.byteLength == 0) {
        throw new ERR_INVALID_ARG_VALUE("buffer", buffer, "is empty and cannot be written");
    }
    if (typeof offsetOrOpt === "number") {
        offset = offsetOrOpt;
    }
    else {
        const opt = offsetOrOpt;
        offset = opt.offset ?? 0;
        length = opt.length ?? buffer.byteLength;
        position = opt.position ?? null;
    }
    assert(offset >= 0, "offset should be greater or equal to 0");
    assert(offset + length <= buffer.byteLength, `buffer doesn't have enough data: byteLength = ${buffer.byteLength}, offset + length = ${offset + length}`);
    if (position) {
        Deno.seekSync(fd, position, Deno.SeekMode.Current);
    }
    const numberOfBytesRead = Deno.readSync(fd, buffer);
    return numberOfBytesRead ?? 0;
}
