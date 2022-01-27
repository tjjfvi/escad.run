import * as base64 from "/transpiled/https://deno.land/std@0.122.0/encoding/base64.js";
import * as base64url from "/transpiled/https://deno.land/std@0.122.0/encoding/base64url.js";
export function asciiToBytes(str) {
    const byteArray = [];
    for (let i = 0; i < str.length; ++i) {
        byteArray.push(str.charCodeAt(i) & 255);
    }
    return new Uint8Array(byteArray);
}
export function base64ToBytes(str) {
    return base64.decode(str);
}
export function base64UrlToBytes(str) {
    return base64url.decode(str);
}
export function hexToBytes(str) {
    const byteArray = new Uint8Array(Math.floor((str || "").length / 2));
    let i;
    for (i = 0; i < byteArray.length; i++) {
        const a = Number.parseInt(str[i * 2], 16);
        const b = Number.parseInt(str[i * 2 + 1], 16);
        if (Number.isNaN(a) && Number.isNaN(b)) {
            break;
        }
        byteArray[i] = (a << 4) | b;
    }
    return new Uint8Array(i === byteArray.length ? byteArray : byteArray.slice(0, i));
}
export function utf16leToBytes(str, units) {
    let c, hi, lo;
    const byteArray = [];
    for (let i = 0; i < str.length; ++i) {
        if ((units -= 2) < 0) {
            break;
        }
        c = str.charCodeAt(i);
        hi = c >> 8;
        lo = c % 256;
        byteArray.push(lo);
        byteArray.push(hi);
    }
    return new Uint8Array(byteArray);
}
export function bytesToAscii(bytes) {
    let ret = "";
    for (let i = 0; i < bytes.length; ++i) {
        ret += String.fromCharCode(bytes[i] & 127);
    }
    return ret;
}
export function bytesToUtf16le(bytes) {
    let res = "";
    for (let i = 0; i < bytes.length - 1; i += 2) {
        res += String.fromCharCode(bytes[i] + bytes[i + 1] * 256);
    }
    return res;
}
