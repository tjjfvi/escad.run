// Copyright 2018-2021 the Deno authors. All rights reserved. MIT license.
// Copyright Joyent, Inc. and Node.js contributors. All rights reserved. MIT license.
import { default as randomBytes } from "/transpiled/https://deno.land/std@0.122.0/node/_crypto/randomBytes.js";
import randomFill, { randomFillSync } from "/transpiled/https://deno.land/std@0.122.0/node/_crypto/randomFill.js";
import randomInt from "/transpiled/https://deno.land/std@0.122.0/node/_crypto/randomInt.js";
import { crypto as wasmCrypto, digestAlgorithms, } from "/transpiled/https://deno.land/std@0.122.0/_wasm_crypto/mod.js";
import { pbkdf2, pbkdf2Sync } from "/transpiled/https://deno.land/std@0.122.0/node/_crypto/pbkdf2.js";
import { Buffer } from "/transpiled/https://deno.land/std@0.122.0/node/buffer.js";
import { Transform } from "/transpiled/https://deno.land/std@0.122.0/node/stream.js";
import { encode as encodeToHex } from "/transpiled/https://deno.land/std@0.122.0/encoding/hex.js";
import { encode as encodeToBase64 } from "/transpiled/https://deno.land/std@0.122.0/encoding/base64.js";
import { scrypt, scryptSync } from "/transpiled/https://deno.land/std@0.122.0/node/_crypto/scrypt.js";
import { timingSafeEqual } from "/transpiled/https://deno.land/std@0.122.0/node/_crypto/timingSafeEqual.js";
const coerceToBytes = (data) => {
    if (data instanceof Uint8Array) {
        return data;
    }
    else if (typeof data === "string") {
        // This assumes UTF-8, which may not be correct.
        return new TextEncoder().encode(data);
    }
    else if (ArrayBuffer.isView(data)) {
        return new Uint8Array(data.buffer, data.byteOffset, data.byteLength);
    }
    else if (data instanceof ArrayBuffer) {
        return new Uint8Array(data);
    }
    else {
        throw new TypeError("expected data to be string | BufferSource");
    }
};
/**
 * The Hash class is a utility for creating hash digests of data. It can be used in one of two ways:
 *
 * - As a stream that is both readable and writable, where data is written to produce a computed hash digest on the readable side, or
 * - Using the hash.update() and hash.digest() methods to produce the computed hash.
 *
 * The crypto.createHash() method is used to create Hash instances. Hash objects are not to be created directly using the new keyword.
 */
export class Hash extends Transform {
    #context;
    constructor(algorithm, _opts) {
        super({
            transform(chunk, _encoding, callback) {
                context.update(coerceToBytes(chunk));
                callback();
            },
            flush(callback) {
                this.push(context.digest(undefined));
                callback();
            },
        });
        if (typeof algorithm === "string") {
            // Node/OpenSSL and WebCrypto format some digest names differently;
            // we attempt to handle those here.
            algorithm = algorithm.toUpperCase();
            if (opensslToWebCryptoDigestNames[algorithm]) {
                algorithm = opensslToWebCryptoDigestNames[algorithm];
            }
            this.#context = new wasmCrypto.DigestContext(algorithm);
        }
        else {
            this.#context = algorithm;
        }
        const context = this.#context;
    }
    copy() {
        return new Hash(this.#context.clone());
    }
    /**
     * Updates the hash content with the given data.
     */
    update(data, _encoding) {
        let bytes;
        if (typeof data === "string") {
            data = new TextEncoder().encode(data);
            bytes = coerceToBytes(data);
        }
        else {
            bytes = coerceToBytes(data);
        }
        this.#context.update(bytes);
        return this;
    }
    /**
     * Calculates the digest of all of the data.
     *
     * If encoding is provided a string will be returned; otherwise a Buffer is returned.
     *
     * Supported encoding is currently 'hex', 'binary', 'base64'.
     */
    digest(encoding) {
        const digest = this.#context.digest(undefined);
        if (encoding === undefined) {
            return Buffer.from(digest);
        }
        switch (encoding) {
            case "hex":
                return new TextDecoder().decode(encodeToHex(new Uint8Array(digest)));
            case "binary":
                return String.fromCharCode(...digest);
            case "base64":
                return encodeToBase64(digest);
            default:
                throw new Error(`The output encoding for hash digest is not implemented: ${encoding}`);
        }
    }
}
/**
 * Supported digest names that OpenSSL/Node and WebCrypto identify differently.
 */
const opensslToWebCryptoDigestNames = {
    BLAKE2B512: "BLAKE2B",
    BLAKE2S256: "BLAKE2S",
    RIPEMD160: "RIPEMD-160",
    RMD160: "RIPEMD-160",
    SHA1: "SHA-1",
    SHA224: "SHA-224",
    SHA256: "SHA-256",
    SHA384: "SHA-384",
    SHA512: "SHA-512",
};
/**
 * Creates and returns a Hash object that can be used to generate hash digests
 * using the given `algorithm`. Optional `options` argument controls stream behavior.
 */
export function createHash(algorithm, opts) {
    return new Hash(algorithm, opts);
}
/**
 * Returns an array of the names of the supported hash algorithms, such as 'sha1'.
 */
export function getHashes() {
    return digestAlgorithms;
}
const randomUUID = () => crypto.randomUUID();
export default {
    Hash,
    createHash,
    getHashes,
    randomFill,
    randomInt,
    randomFillSync,
    pbkdf2,
    pbkdf2Sync,
    randomBytes,
    scrypt,
    scryptSync,
    timingSafeEqual,
    randomUUID,
};
export { pbkdf2, pbkdf2Sync, randomBytes, randomFill, randomFillSync, randomInt, randomUUID, scrypt, scryptSync, timingSafeEqual, };
