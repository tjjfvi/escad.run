import { conversionRegistry, Id } from "/transpiled/https://escad.dev/core/mod.js";
import { Mesh } from "/transpiled/https://escad.dev/3d/Mesh.js";
import { Bsp } from "/transpiled/https://escad.dev/3d/Bsp.js";
conversionRegistry.register({
    fromType: Mesh,
    toType: Bsp,
    convert: async (mesh) => Bsp.build(null, mesh.faces) ?? Bsp.null(),
    weight: 1,
    id: Id.create(import.meta.url, "@escad/3d", "Conversion", "MeshBsp"),
});
conversionRegistry.register({
    fromType: Bsp,
    toType: Mesh,
    convert: async (bsp) => Mesh.create(Bsp.allFaces(bsp)),
    weight: 1,
    id: Id.create(import.meta.url, "@escad/3d", "Conversion", "BspMesh"),
});
