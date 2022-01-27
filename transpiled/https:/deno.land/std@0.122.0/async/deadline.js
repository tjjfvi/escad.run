import { deferred } from "/transpiled/https://deno.land/std@0.122.0/async/deferred.js";
export class DeadlineError extends Error {
    constructor() {
        super("Deadline");
        this.name = "DeadlineError";
    }
}
/**
 * Create a promise which will be rejected with DeadlineError when a given delay is exceeded.
 */
export function deadline(p, delay) {
    const d = deferred();
    const t = setTimeout(() => d.reject(new DeadlineError()), delay);
    return Promise.race([p, d]).finally(() => clearTimeout(t));
}
