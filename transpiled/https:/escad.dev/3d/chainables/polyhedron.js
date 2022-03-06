import { Mesh } from "/transpiled/https://escad.dev/3d/Mesh.js";
import { Component, Element } from "/transpiled/https://escad.dev/core/mod.js";
export const polyhedron = Component
    .create("polyhedron", (...args) => Element.create(args.length === 2
    ? Mesh.fromVertsFaces(...args)
    : Mesh.fromVertsFaces(args[0].verts, args[0].faces)), { showOutput: false });
