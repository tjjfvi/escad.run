// Copyright Joyent, Inc. and other Node contributors.
//
// Permission is hereby granted, free of charge, to any person obtaining a
// copy of this software and associated documentation files (the
// "Software"), to deal in the Software without restriction, including
// without limitation the rights to use, copy, modify, merge, publish,
// distribute, sublicense, and/or sell copies of the Software, and to permit
// persons to whom the Software is furnished to do so, subject to the
// following conditions:
//
// The above copyright notice and this permission notice shall be included
// in all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
// USE OR OTHER DEALINGS IN THE SOFTWARE.
// This module ports:
// - https://github.com/nodejs/node/blob/master/src/stream_base-inl.h
// - https://github.com/nodejs/node/blob/master/src/stream_base.h
// - https://github.com/nodejs/node/blob/master/src/stream_base.cc
// - https://github.com/nodejs/node/blob/master/src/stream_wrap.h
// - https://github.com/nodejs/node/blob/master/src/stream_wrap.cc
import { Buffer } from "/transpiled/https://deno.land/std@0.122.0/node/buffer.js";
import { notImplemented } from "/transpiled/https://deno.land/std@0.122.0/node/_utils.js";
import { HandleWrap } from "/transpiled/https://deno.land/std@0.122.0/node/internal_binding/handle_wrap.js";
import { AsyncWrap, providerType } from "/transpiled/https://deno.land/std@0.122.0/node/internal_binding/async_wrap.js";
import { codeMap } from "/transpiled/https://deno.land/std@0.122.0/node/internal_binding/uv.js";
import { writeAll } from "/transpiled/https://deno.land/std@0.122.0/io/util.js";
var StreamBaseStateFields;
(function (StreamBaseStateFields) {
    StreamBaseStateFields[StreamBaseStateFields["kReadBytesOrError"] = 0] = "kReadBytesOrError";
    StreamBaseStateFields[StreamBaseStateFields["kArrayBufferOffset"] = 1] = "kArrayBufferOffset";
    StreamBaseStateFields[StreamBaseStateFields["kBytesWritten"] = 2] = "kBytesWritten";
    StreamBaseStateFields[StreamBaseStateFields["kLastWriteWasAsync"] = 3] = "kLastWriteWasAsync";
    StreamBaseStateFields[StreamBaseStateFields["kNumStreamBaseStateFields"] = 4] = "kNumStreamBaseStateFields";
})(StreamBaseStateFields || (StreamBaseStateFields = {}));
export const kReadBytesOrError = StreamBaseStateFields.kReadBytesOrError;
export const kArrayBufferOffset = StreamBaseStateFields.kArrayBufferOffset;
export const kBytesWritten = StreamBaseStateFields.kBytesWritten;
export const kLastWriteWasAsync = StreamBaseStateFields.kLastWriteWasAsync;
export const kNumStreamBaseStateFields = StreamBaseStateFields.kNumStreamBaseStateFields;
export const streamBaseState = new Uint8Array(5);
// This is Deno, it always will be async.
streamBaseState[kLastWriteWasAsync] = 1;
export class WriteWrap extends AsyncWrap {
    handle;
    oncomplete;
    async;
    bytes;
    buffer;
    callback;
    _chunks;
    constructor() {
        super(providerType.WRITEWRAP);
    }
}
export class ShutdownWrap extends AsyncWrap {
    handle;
    oncomplete;
    callback;
    constructor() {
        super(providerType.SHUTDOWNWRAP);
    }
}
export const kStreamBaseField = Symbol("kStreamBaseField");
const SUGGESTED_SIZE = 64 * 1024;
export class LibuvStreamWrap extends HandleWrap {
    [kStreamBaseField];
    reading;
    #reading = false;
    #currentReads = new Set();
    #currentWrites = new Set();
    destroyed = false;
    writeQueueSize = 0;
    bytesRead = 0;
    bytesWritten = 0;
    onread;
    constructor(provider, stream) {
        super(provider);
        this.#attachToObject(stream);
    }
    /**
     * Start the reading of the stream.
     * @return An error status code.
     */
    readStart() {
        if (!this.#reading) {
            this.#reading = true;
            const readPromise = this.#read();
            this.#currentReads.add(readPromise);
            readPromise.then(() => this.#currentReads.delete(readPromise), () => this.#currentReads.delete(readPromise));
        }
        return 0;
    }
    /**
     * Stop the reading of the stream.
     * @return An error status code.
     */
    readStop() {
        this.#reading = false;
        return 0;
    }
    /**
     * Shutdown the stream.
     * @param req A shutdown request wrapper.
     * @return An error status code.
     */
    shutdown(req) {
        (async () => {
            const status = await this._onClose();
            try {
                req.oncomplete(status);
            }
            catch {
                // swallow callback error.
            }
        })();
        return 0;
    }
    /**
     * @param userBuf
     * @return An error status code.
     */
    useUserBuffer(_userBuf) {
        // TODO(cmorten)
        notImplemented();
    }
    /**
     * Write a buffer to the stream.
     * @param req A write request wrapper.
     * @param data The Uint8Array buffer to write to the stream.
     * @return An error status code.
     */
    writeBuffer(req, data) {
        const currentWrite = this.#write(req, data);
        this.#currentWrites.add(currentWrite);
        currentWrite.then(() => this.#currentWrites.delete(currentWrite), () => this.#currentWrites.delete(currentWrite));
        return 0;
    }
    /**
     * Write multiple chunks at once.
     * @param req A write request wrapper.
     * @param chunks
     * @param allBuffers
     * @return An error status code.
     */
    writev(_req, 
    // deno-lint-ignore no-explicit-any
    _chunks, _allBuffers) {
        // TODO(cmorten)
        notImplemented();
    }
    /**
     * Write an ASCII string to the stream.
     * @return An error status code.
     */
    writeAsciiString(req, data) {
        const buffer = new TextEncoder().encode(data);
        return this.writeBuffer(req, buffer);
    }
    /**
     * Write an UTF8 string to the stream.
     * @return An error status code.
     */
    writeUtf8String(req, data) {
        const buffer = new TextEncoder().encode(data);
        return this.writeBuffer(req, buffer);
    }
    /**
     * Write an UCS2 string to the stream.
     * @return An error status code.
     */
    writeUcs2String(_req, _data) {
        notImplemented();
    }
    /**
     * Write an LATIN1 string to the stream.
     * @return An error status code.
     */
    writeLatin1String(req, data) {
        const buffer = Buffer.from(data, "latin1");
        return this.writeBuffer(req, buffer);
    }
    async _onClose() {
        let status = 0;
        this.#reading = false;
        try {
            this[kStreamBaseField]?.close();
        }
        catch {
            status = codeMap.get("ENOTCONN");
        }
        await Promise.allSettled(this.#currentWrites);
        await Promise.allSettled(this.#currentReads);
        return status;
    }
    /**
     * Attaches the class to the underlying stream.
     * @param stream The stream to attach to.
     */
    #attachToObject(stream) {
        this[kStreamBaseField] = stream;
    }
    /** Internal method for reading from the attached stream. */
    async #read() {
        let buf = new Uint8Array(SUGGESTED_SIZE);
        let nread;
        try {
            nread = await this[kStreamBaseField].read(buf);
        }
        catch (e) {
            if (e instanceof Deno.errors.Interrupted ||
                e instanceof Deno.errors.BadResource) {
                nread = codeMap.get("EOF");
            }
            else {
                nread = codeMap.get("UNKNOWN");
            }
            buf = new Uint8Array(0);
        }
        nread ??= codeMap.get("EOF");
        streamBaseState[kReadBytesOrError] = nread;
        if (nread > 0) {
            this.bytesRead += nread;
        }
        buf = buf.slice(0, nread);
        streamBaseState[kArrayBufferOffset] = 0;
        try {
            this.onread(buf, nread);
        }
        catch {
            // swallow callback errors.
        }
        if (nread >= 0 && this.#reading) {
            const readPromise = this.#read();
            this.#currentReads.add(readPromise);
            readPromise.then(() => this.#currentReads.delete(readPromise), () => this.#currentReads.delete(readPromise));
        }
    }
    /**
     * Internal method for writing to the attached stream.
     * @param req A write request wrapper.
     * @param data The Uint8Array buffer to write to the stream.
     */
    async #write(req, data) {
        const { byteLength } = data;
        try {
            // TODO(cmorten): somewhat over simplifying what Node does.
            await writeAll(this[kStreamBaseField], data);
        }
        catch {
            // TODO(cmorten): map err to status codes
            const status = codeMap.get("UNKNOWN");
            try {
                req.oncomplete(status);
            }
            catch {
                // swallow callback errors.
            }
            return;
        }
        streamBaseState[kBytesWritten] = byteLength;
        this.bytesWritten += byteLength;
        try {
            req.oncomplete(0);
        }
        catch {
            // swallow callback errors.
        }
        return;
    }
}
