import { WeakCache } from "/transpiled/https://escad.dev/core/WeakCache.js";
import { Hash } from "/transpiled/https://escad.dev/core/Hash.js";
import { WrappedValue } from "/transpiled/https://escad.dev/core/WrappedValue.js";
import { Counter, Timer } from "/transpiled/https://escad.dev/core/Timer.js";
export class ArtifactManager {
    excludeStoresCaches = new WeakMap();
    defaultCache = new WeakCache();
    artifactStores = [];
    timers = Timer.create({
        storeRaw: Timer.create(),
        storeRef: Timer.create(),
        lookupRaw: Timer.create({ calls: Counter.create() }),
        lookupRef: Timer.create({ calls: Counter.create() }),
        getRefCacheKey: Timer.create(),
    });
    async storeRaw(artifactPromise, excludeStores) {
        const artifact = await artifactPromise;
        this.timers.storeRaw.start();
        const artifactHash = Hash.create(artifact);
        this.getCache(excludeStores).set(artifactHash, WrappedValue.create(artifact));
        await Promise.all(this.artifactStores.map(async (s) => {
            if (!excludeStores?.has(s)) {
                await s.storeRaw?.(artifactHash, WrappedValue.create(artifact), this);
            }
        }));
        this.timers.storeRaw.end();
        return artifactHash;
    }
    async storeRef(loc, artifactPromise, excludeStores) {
        this.getCache(excludeStores).setAsync(this.getRefCacheKey(loc), Promise.resolve(WrappedValue.create(artifactPromise)));
        const artifact = await artifactPromise;
        this.timers.storeRef.start();
        const artifactHash = Hash.create(artifact);
        await Promise.all([
            this.storeRaw(artifact, excludeStores),
            ...loc.map((l) => this.storeRaw(l, excludeStores)),
            ...this.artifactStores.map((s) => {
                if (!excludeStores?.has(s)) {
                    s.storeRef?.(loc, artifactHash, this);
                }
            }),
        ]);
        this.timers.storeRef.end();
        return artifactHash;
    }
    async lookupRaw(hash, excludeStores) {
        const result = await this.lookupRawWrapped(hash, excludeStores);
        if (result)
            return result.value;
        return null;
    }
    lookupRawWrapped(hash, excludeStores) {
        this.timers.lookupRaw.calls.increment();
        return this.getCache(excludeStores).getAsync(hash, this.timers.lookupRaw.timeFn(async () => {
            for (const store of this.artifactStores) {
                if (!excludeStores?.has(store)) {
                    const artifact = await store.lookupRaw?.(hash, this);
                    if (artifact && Hash.check(hash, artifact.value)) {
                        return artifact;
                    }
                }
            }
            return null;
        }));
    }
    async lookupRef(loc, excludeStores) {
        const result = await this.lookupRefWrapped(loc, excludeStores);
        if (result)
            return result.value;
        return null;
    }
    lookupRefWrapped(loc, excludeStores) {
        this.timers.lookupRef.calls.increment();
        return this.getCache(excludeStores).getAsync(this.getRefCacheKey(loc), this.timers.lookupRef.timeFn(async () => {
            for (const store of this.artifactStores) {
                if (!excludeStores?.has(store)) {
                    const artifact = await store.lookupRef?.(loc, this);
                    if (artifact) {
                        await this.storeRaw(artifact.value, excludeStores);
                        return artifact;
                    }
                }
            }
            return null;
        }));
    }
    async computeRef(loc, func, excludeStores) {
        const stored = await this.lookupRefWrapped(loc, excludeStores);
        if (stored)
            return stored.value;
        const result = func();
        this.storeRef(loc, result, excludeStores);
        return await result;
    }
    getCache(excludeStores) {
        if (!excludeStores?.size) {
            return this.defaultCache;
        }
        const existing = this.excludeStoresCaches.get(excludeStores);
        if (existing)
            return existing;
        const cache = new WeakCache();
        this.excludeStoresCaches.set(excludeStores, cache);
        return cache;
    }
    getRefCacheKey(loc) {
        this.timers.getRefCacheKey.start();
        let key = "";
        for (const part of loc) {
            if (typeof part === "string") {
                key += part + "//";
            }
            else {
                key += Hash.create(part) + "//";
            }
        }
        this.timers.getRefCacheKey.end();
        return key;
    }
}
export const artifactManager = new ArtifactManager();
