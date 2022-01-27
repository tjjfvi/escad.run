import * as crypto_1 from "/transpiled/https://deno.land/std@0.122.0/_wasm_crypto/crypto.js";
export { crypto_1 as crypto };
/**
 * All cryptographic hash/digest algorithms supported by std/_wasm_crypto.
 *
 * For algorithms that are supported by WebCrypto, the name here must match the
 * one used by WebCrypto. Otherwise we should prefer the formatting used in the
 * official specification. All names are uppercase to facilitate case-insensitive
 * comparisons required by the WebCrypto spec.
 */
export const digestAlgorithms = [
    "BLAKE2B-256",
    "BLAKE2B-384",
    "BLAKE2B",
    "BLAKE2S",
    "BLAKE3",
    "KECCAK-224",
    "KECCAK-256",
    "KECCAK-384",
    "KECCAK-512",
    "SHA-384",
    "SHA3-224",
    "SHA3-256",
    "SHA3-384",
    "SHA3-512",
    "SHAKE128",
    "SHAKE256",
    "TIGER",
    // insecure (length-extendable):
    "RIPEMD-160",
    "SHA-224",
    "SHA-256",
    "SHA-512",
    // insecure (collidable and length-extendable):
    "MD4",
    "MD5",
    "SHA-1",
];
