/** Creates a Promise with the `reject` and `resolve` functions
 * placed as methods on the promise object itself. It allows you to do:
 *
 * ```ts
 *     import { deferred } from "./deferred.ts";
 *
 *     const p = deferred<number>();
 *     // ...
 *     p.resolve(42);
 * ```
 */
export function deferred() {
    let methods;
    let state = "pending";
    const promise = new Promise((resolve, reject) => {
        methods = {
            async resolve(value) {
                await value;
                state = "fulfilled";
                resolve(value);
            },
            // deno-lint-ignore no-explicit-any
            reject(reason) {
                state = "rejected";
                reject(reason);
            },
        };
    });
    Object.defineProperty(promise, "state", { get: () => state });
    return Object.assign(promise, methods);
}
