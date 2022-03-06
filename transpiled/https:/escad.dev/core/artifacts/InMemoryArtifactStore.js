import { HashMap } from "/transpiled/https://escad.dev/core/utils/mod.js";
export class InMemoryArtifactStore {
    raw = new Map();
    ref = new HashMap();
    async storeRaw(hash, value) {
        this.raw.set(hash, value);
    }
    async lookupRaw(hash) {
        console.log(this.raw);
        return this.raw.get(hash) ?? null;
    }
    async storeRef(loc, hash) {
        this.ref.set(loc, hash);
    }
    async lookupRef(loc) {
        // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
        return this.raw.get(this.ref.get(loc)) ?? null;
    }
}
