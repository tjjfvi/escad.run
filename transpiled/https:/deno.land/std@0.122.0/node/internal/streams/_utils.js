import { Buffer } from "/transpiled/https://deno.land/std@0.122.0/node/buffer.js";
export function _uint8ArrayToBuffer(chunk) {
    return Buffer.from(chunk.buffer, chunk.byteOffset, chunk.byteLength);
}
