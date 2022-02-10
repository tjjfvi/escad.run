// Copyright 2018-2022 the Deno authors. All rights reserved. MIT license.
import { Buffer } from "/transpiled/https://deno.land/std@0.125.0/node/buffer.js";
export const timingSafeEqual = (a, b) => {
    if (a instanceof DataView)
        a = Buffer.from(a.buffer);
    if (b instanceof DataView)
        b = Buffer.from(b.buffer);
    if (a instanceof ArrayBuffer)
        a = Buffer.from(a);
    if (b instanceof ArrayBuffer)
        b = Buffer.from(b);
    let result = 0;
    if (a.byteLength !== b.byteLength) {
        b = a;
        result = 1;
    }
    for (let i = 0; i < a.byteLength; i++) {
        result |= a[i] ^ b[i];
    }
    return result === 0;
};
