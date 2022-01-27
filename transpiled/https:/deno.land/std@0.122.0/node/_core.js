// Copyright 2018-2021 the Deno authors. All rights reserved. MIT license.
// This module provides an interface to `Deno.core`. For environments
// that don't have access to `Deno.core` some APIs are polyfilled, while
// some are unavailble and throw on call.
// deno-lint-ignore no-explicit-any
export let core;
// @ts-ignore Deno.core is not defined in types
if (Deno?.core) {
    // @ts-ignore Deno.core is not defined in types
    core = Deno.core;
}
else {
    core = {
        setNextTickCallback: undefined,
        evalContext(_code, _filename) {
            throw new Error("Deno.core.evalContext is not supported in this environment");
        },
        encode(chunk) {
            return new TextEncoder().encode(chunk);
        },
    };
}
