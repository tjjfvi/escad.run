// Copyright 2018-2022 the Deno authors. All rights reserved. MIT license.
import { Buffer } from "/transpiled/https://deno.land/std@0.125.0/node/buffer.js";
export function _uint8ArrayToBuffer(chunk) {
    return Buffer.from(chunk.buffer, chunk.byteOffset, chunk.byteLength);
}
