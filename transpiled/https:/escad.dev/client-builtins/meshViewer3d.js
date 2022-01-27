import { viewerRegistry } from "/transpiled/https://escad.dev/client/mod.js";
import { Face, Mesh } from "/transpiled/https://escad.dev/builtins/mod.js";
import { viewer3d } from "/transpiled/https://escad.dev/client-builtins/Viewer3d.js";
import { colors } from "/transpiled/https://escad.dev/client-builtins/colors.js";
import { EdgesGeometry } from "/transpiled/https://escad.dev/client-builtins/EdgesGeometry.js";
import * as t from "/transpiled/https://escad.dev/deps/three.js";
viewerRegistry.register({
    type: Mesh,
    context: viewer3d,
    map: (product) => {
        let arr = new Float32Array(function* () {
            for (const face of product.faces) {
                for (const triangle of Face.toTriangles(face)) {
                    for (const vertex of triangle.points) {
                        yield vertex.x;
                        yield vertex.y;
                        yield vertex.z;
                    }
                }
            }
        }());
        let attr = new t.BufferAttribute(arr, 3);
        let geo = new t.BufferGeometry();
        geo.setAttribute("position", attr);
        geo.computeVertexNormals();
        let mat = new t.MeshBasicMaterial({
            color: colors.darkgrey,
            polygonOffset: true,
            polygonOffsetFactor: 1,
            polygonOffsetUnits: 1,
        });
        let inMat = new t.MeshBasicMaterial({
            color: colors.red,
            side: t.BackSide,
            polygonOffset: true,
            polygonOffsetFactor: 1,
            polygonOffsetUnits: 1,
        });
        let lines = new t.LineSegments(
        // @ts-ignore
        new EdgesGeometry(geo), new t.LineBasicMaterial({ color: colors.white }));
        let mesh = new t.Mesh(geo, mat);
        let inMesh = new t.Mesh(geo, inMat);
        let group = new t.Group();
        group.add(lines);
        group.add(mesh);
        group.add(inMesh);
        lines.visible = false;
        setTimeout(() => {
            lines.visible = true;
        }, 0);
        return {
            product,
            group,
        };
    },
});
