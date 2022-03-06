/* eslint-disable @typescript-eslint/ban-types */
if (typeof WeakRef === "undefined") {
    throw new Error("The environment does not support WeakRef");
}
export class WeakCache {
    cache = new Map();
    asyncCache = new Map();
    finalizationRegistry = new FinalizationRegistry((key) => {
        this.cache.delete(key);
    });
    get(key, func) {
        const value = this.cache.get(key)?.deref();
        if (value === undefined) {
            return this.set(key, func(key));
        }
        return value;
    }
    getAsync(key, func) {
        const cachedValue = this.cache.get(key)?.deref();
        if (cachedValue !== undefined) {
            return Promise.resolve(cachedValue);
        }
        const asyncCachedValue = this.asyncCache.get(key);
        if (asyncCachedValue !== undefined) {
            return asyncCachedValue;
        }
        return this.setAsync(key, func(key));
    }
    set(key, value) {
        if (value && typeof value === "object") {
            this.cache.set(key, new WeakRef(value));
            this.finalizationRegistry.register(value, key);
        }
        return value;
    }
    setAsync(key, promise) {
        const thennedPromise = promise.then((value) => {
            this.asyncCache.delete(key);
            this.set(key, value);
            return value;
        });
        this.asyncCache.set(key, thennedPromise);
        return thennedPromise;
    }
}
