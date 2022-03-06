import { Sha256 } from "/transpiled/https://escad.dev/deps/sha256.js";
import { $unknown } from "/transpiled/https://escad.dev/serial/mod.js";
import { Timer } from "/transpiled/https://escad.dev/core/utils/Timer.js";
const hashMemo = new WeakMap();
export const Hash = {
    create: Timer.create().timeFn((obj) => {
        if (typeof obj === "object" && obj) {
            const memoedHash = hashMemo.get(obj);
            if (memoedHash)
                return memoedHash;
        }
        const hasher = new Sha256();
        for (const part of $unknown.serialize(obj)) {
            hasher.update(part);
        }
        const hash = hasher.hex();
        if (typeof obj === "object" && obj) {
            hashMemo.set(obj, hash);
        }
        return hash;
    }),
    equal: (a, b) => {
        if (a === b) {
            return true;
        }
        if (typeof a !== "object" || typeof b !== "object") {
            return false;
        }
        if (!a || !b) {
            return false;
        }
        if (a["type"] !== b["type"]) {
            return false;
        }
        return Hash.create(a) === Hash.create(b);
    },
    check: (hash, value) => Hash.create(value) === hash,
};
