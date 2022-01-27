import { ERR_INTERNAL_ASSERTION } from "/transpiled/https://deno.land/std@0.122.0/node/_errors.js";
function assert(value, message) {
    if (!value) {
        throw new ERR_INTERNAL_ASSERTION(message);
    }
}
function fail(message) {
    throw new ERR_INTERNAL_ASSERTION(message);
}
assert.fail = fail;
export default assert;
