// Copyright 2018-2021 the Deno authors. All rights reserved. MIT license.
import * as base64 from "/transpiled/https://deno.land/std@0.122.0/encoding/base64.js";
/*
 * Some variants allow or require omitting the padding '=' signs:
 * https://en.wikipedia.org/wiki/Base64#The_URL_applications
 * @param base64url
 */
export function addPaddingToBase64url(base64url) {
    if (base64url.length % 4 === 2)
        return base64url + "==";
    if (base64url.length % 4 === 3)
        return base64url + "=";
    if (base64url.length % 4 === 1) {
        throw new TypeError("Illegal base64url string!");
    }
    return base64url;
}
function convertBase64urlToBase64(b64url) {
    if (!/^[-_A-Z0-9]*?={0,2}$/i.test(b64url)) {
        // Contains characters not part of base64url spec.
        throw new TypeError("Failed to decode base64url: invalid character");
    }
    return addPaddingToBase64url(b64url).replace(/\-/g, "+").replace(/_/g, "/");
}
function convertBase64ToBase64url(b64) {
    return b64.replace(/=/g, "").replace(/\+/g, "-").replace(/\//g, "_");
}
/**
 * Encodes a given ArrayBuffer or string into a base64url representation
 * @param data
 */
export function encode(data) {
    return convertBase64ToBase64url(base64.encode(data));
}
/**
 * Converts given base64url encoded data back to original
 * @param b64url
 */
export function decode(b64url) {
    return base64.decode(convertBase64urlToBase64(b64url));
}
