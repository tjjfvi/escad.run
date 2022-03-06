import { Context, Id } from "/transpiled/https://escad.dev/core/mod.js";
const smoothContextId = Id.create(import.meta.url, "@escad/3d", "Context", "SmoothContext");
export const smoothContext = new Context(smoothContextId, {
    sides: 16,
});
