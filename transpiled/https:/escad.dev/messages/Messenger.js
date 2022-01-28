/* eslint-disable @typescript-eslint/no-non-null-assertion */
export const createMessenger = (({ impl, connection, onDestroy, }) => {
    let idN = 0;
    let currentPromises = new Set();
    let resolveMap = Object.create(null);
    let eventMap = Object.create(null);
    let retryMessages = new Set();
    let destroyed = false;
    const other = new Proxy(Object.create(null), {
        get: (target, prop) => {
            if (destroyed) {
                throw new Error("Attempted to make request on destroyed messenger");
            }
            if (prop in target) {
                return target[prop];
            }
            if (typeof prop === "symbol") {
                return;
            }
            return target[prop] = (...args) => {
                const id = ++idN;
                const message = ["call", id, prop, ...args];
                connection.send(message);
                retryMessages.add(message);
                return recvPromise(id).then((value) => {
                    retryMessages.delete(message);
                    return value;
                });
            };
        },
    });
    const result = Object.assign(Object.create(other), {
        impl,
        then: undefined,
        retryAll() {
            if (destroyed) {
                throw new Error("Attempted to retryAll on destroyed messenger");
            }
            for (const message of retryMessages) {
                connection.send(message);
            }
        },
        requestRetry() {
            if (destroyed) {
                throw new Error("Attempted to requestRetry on destroyed messenger");
            }
            connection.send(["retry"]);
        },
        async destroy(awaitCompletion) {
            if (awaitCompletion) {
                while (currentPromises.size) {
                    await Promise.all(currentPromises);
                }
            }
            destroyed = true;
            resolveMap = Object.create(null);
            eventMap = Object.create(null);
            offMsg();
            connection.destroy?.();
            onDestroy?.forEach((x) => x());
            retryMessages.clear();
        },
        emit(event, ...args) {
            if (args.length === 1 &&
                (typeof args[0] === "object" || typeof args[0] === "function") &&
                args[0] &&
                Symbol.asyncIterator in args[0]) {
                const iterable = args[0];
                (async () => {
                    for await (const args of iterable) {
                        if (destroyed)
                            break;
                        this.emit(event, ...args);
                    }
                })();
                return;
            }
            eventMap[event]?.forEach((cb) => cb(...args));
            connection.send(["event", -1, event, ...args]);
        },
        on(event, callback) {
            if (callback) {
                (eventMap[event] ??= new Set()).add(callback);
                return () => eventMap[event]?.delete(callback);
            }
            const valueQueue = [];
            const callbackQueue = [];
            let finished = false;
            const listener = (...value) => {
                const callback = callbackQueue.shift();
                if (callback) {
                    callback({ done: false, value });
                }
                else {
                    valueQueue.push(value);
                }
            };
            (eventMap[event] ??= new Set()).add(listener);
            return {
                next() {
                    if (valueQueue.length) {
                        // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
                        return Promise.resolve({
                            done: false,
                            value: valueQueue.shift(),
                        });
                    }
                    if (finished || destroyed) {
                        return Promise.resolve({ done: true, value: undefined });
                    }
                    return new Promise((resolve) => callbackQueue.push(resolve));
                },
                return() {
                    eventMap[event]?.delete(listener);
                    finished = true;
                    return Promise.resolve({ done: true, value: undefined });
                },
                [Symbol.asyncIterator]() {
                    return this;
                },
            };
        },
        once(event, callback) {
            let result;
            if (!callback) {
                result = new Promise((resolve) => callback = (...args) => resolve(args));
            }
            const callback2 = (...args) => {
                eventMap[event]?.delete(callback2);
                callback(...args);
            };
            (eventMap[event] ??= new Set()).add(callback2);
            return result;
        },
    });
    const handler = (msg) => {
        if (!msg || !(msg instanceof Array)) {
            return;
        }
        const [kind, id, key, ...args] = msg;
        if (kind === "retry") {
            for (const message of retryMessages) {
                connection.send(message);
            }
            return;
        }
        if (typeof id !== "number" ||
            typeof key !== "number" && typeof key !== "string" && key !== null) {
            return;
        }
        switch (kind) {
            case "call": {
                const result = impl[key]?.(...args) ??
                    Promise.reject(new Error(`No method with the key "${key}"`));
                sendPromise(id, result);
                return;
            }
            case "resolve": {
                if (id in resolveMap) {
                    resolveMap[id](args[0]);
                }
                delete resolveMap[id];
                return;
            }
            case "event": {
                eventMap[key]?.forEach((cb) => cb(...args));
            }
        }
    };
    const offMsg = connection.onMsg(handler);
    result.requestRetry();
    return result;
    function recvPromise(id) {
        return addPromiseToCurrentPromises(new Promise((resolve) => resolveMap[id] = resolve));
    }
    function sendPromise(id, promise) {
        addPromiseToCurrentPromises(promise);
        promise.then((value) => !destroyed && connection.send(["resolve", id, null, value]));
    }
    function addPromiseToCurrentPromises(promise) {
        currentPromises.add(promise);
        promise.then(() => currentPromises.delete(promise));
        return promise;
    }
});
