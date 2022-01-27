// compose, destroy and isDisturbed are experimental APIs without
// typings. They can be exposed once they are released as stable in Node
// @deno-types="./_stream.d.ts"
export { _isUint8Array, _uint8ArrayToBuffer, addAbortSignal, 
// compose,
default, 
// destroy,
Duplex, finished, 
// isDisturbed,
PassThrough, pipeline, Readable, Stream, Transform, Writable, } from "/transpiled/https://deno.land/std@0.122.0/node/_stream.js";
