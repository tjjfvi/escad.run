import { Plane } from "/transpiled/https://escad.dev/3d/Plane.js";
import { createLeafProductUtils, Id } from "/transpiled/https://escad.dev/core/mod.js";
const faceId = Id.create(import.meta.url, "@escad/3d", "LeafProduct", "Face");
export const Face = {
  id: faceId,
  create: points => ({
    type: faceId,
    points,
    plane: Plane.create(points)
  }),
  ...createLeafProductUtils(faceId, "Face"),
  toTriangles: face => face.points.slice(2).map((_, i) => Face.create([face.points[0], face.points[i + 1], face.points[i + 2]])),
  flip: face => Face.create([...face.points].reverse())
};