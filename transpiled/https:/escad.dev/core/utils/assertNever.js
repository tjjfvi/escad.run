export function assertNever(_value, message = (str) => `Expected never, got ${str}`) {
    // TODO: feed message value with Deno.inspect
    throw new Error(message(""));
}
