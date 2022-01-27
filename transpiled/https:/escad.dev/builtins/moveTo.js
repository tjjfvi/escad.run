import { Component, conversionRegistry, createLeafProductUtils, Element, HashProduct, Id, mapOperation, MarkedProduct, TupleProduct, TupleProductType, } from "/transpiled/https://escad.dev/core/mod.js";
import { BoundingBox } from "/transpiled/https://escad.dev/builtins/BoundingBox.js";
import { _boundingBox } from "/transpiled/https://escad.dev/builtins/getBoundingBox.js";
import { Matrix4 } from "/transpiled/https://escad.dev/builtins/Matrix4.js";
import { Transform } from "/transpiled/https://escad.dev/builtins/Transformation.js";
import { Vector3 } from "/transpiled/https://escad.dev/builtins/Vector3.js";
const moveToId = Id.create(import.meta.url, "@escad/builtins", "Marker", "MoveTo");
export const MoveTo = MarkedProduct.for(moveToId);
const moveToArgsId = Id.create(import.meta.url, "@escad/builtins", "LeafProduct", "MoveToArgs");
export const MoveToArgs = {
    create: (args) => ({
        type: moveToArgsId,
        ...args,
    }),
    id: moveToArgsId,
    ...createLeafProductUtils(moveToArgsId, "MoveToArgs"),
};
export const moveTo = Component.create("moveTo", (target, args) => {
    if (typeof target === "number") {
        target = { x: target, y: target, z: target };
    }
    const targetBox = Element.isElement(target)
        ? _boundingBox(target)
        : BoundingBox.fromVector3(Vector3.create(target.x ?? 0, target.y ?? 0, target.z ?? 0));
    return mapOperation("moveTo", async (source, allSource) => Transform.create(TupleProduct.create([
        MoveTo.create(TupleProduct.create([
            MoveToArgs.create(args),
            await _boundingBox(allSource),
            await targetBox,
        ])),
        HashProduct.fromProduct(source),
    ])), { showOutput: false });
}, { showOutput: false });
export const moveToX = Component.create("moveToX", (target, toEdge = 0, shift = -Math.sign(toEdge)) => moveTo(target, { x: [toEdge, shift] }), { showOutput: false });
export const moveToY = Component.create("moveToY", (target, toEdge = 0, shift = -Math.sign(toEdge)) => moveTo(target, { y: [toEdge, shift] }), { showOutput: false });
export const moveToZ = Component.create("moveToZ", (target, toEdge = 0, shift = -Math.sign(toEdge)) => moveTo(target, { z: [toEdge, shift] }), { showOutput: false });
const moveToConversionMeshId = Id.create(import.meta.url, "@escad/builtins", "Conversion", "MoveToConversionMesh");
conversionRegistry.register({
    id: moveToConversionMeshId,
    fromType: MoveTo.createProductType(TupleProductType.create([MoveToArgs, BoundingBox, BoundingBox])),
    toType: Matrix4,
    convert: async ({ child: { children: [args, sourceBox, targetBox] } }) => {
        const displacementVector = { x: 0, y: 0, z: 0 };
        for (const axis of ["x", "y", "z"]) {
            const spec = args[axis];
            if (spec === undefined)
                continue;
            const [toEdge, shift] = typeof spec === "number" ? [spec, -spec] : spec;
            const sourceCenter = sourceBox.center[axis];
            const sourceSize = sourceBox.size[axis];
            const targetCenter = targetBox.center[axis];
            const targetSize = targetBox.size[axis];
            const targetPos = targetCenter + toEdge * targetSize / 2;
            const displacement = targetPos - sourceCenter + shift * sourceSize / 2;
            displacementVector[axis] = displacement;
        }
        return Matrix4.translate(displacementVector.x, displacementVector.y, displacementVector.z);
    },
    weight: 1,
});
