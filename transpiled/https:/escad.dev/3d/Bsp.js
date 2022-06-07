import { createLeafProductUtils, Id, Stack } from "/transpiled/https://escad.dev/core/mod.js";
import { Face } from "/transpiled/https://escad.dev/3d/Face.js";
import { Plane } from "/transpiled/https://escad.dev/3d/Plane.js";
const bspId = Id.create(import.meta.url, "@escad/3d", "LeafProduct", "Bsp");
export let ClipOptions;

(function (ClipOptions) {
  ClipOptions[ClipOptions["DropFront"] = 1] = "DropFront";
  ClipOptions[ClipOptions["DropBack"] = 0] = "DropBack";
  ClipOptions[ClipOptions["DropCoplanarFront"] = 2] = "DropCoplanarFront";
  ClipOptions[ClipOptions["DropCoplanarBack"] = 4] = "DropCoplanarBack";
  ClipOptions[ClipOptions["DropCoplanar"] = 6] = "DropCoplanar";
})(ClipOptions || (ClipOptions = {}));

export const Bsp = {
  create: (front, back, faces, plane) => ({
    type: bspId,
    front,
    back,
    faces,
    plane: plane ?? faces[0]?.plane ?? null
  }),
  ...createLeafProductUtils(bspId, "Bsp"),
  id: bspId,
  mapExtra: (bsp, fn) => {
    const nodeStack = new Stack([bsp]);
    const buildStack = new Stack([]);

    for (const [origNode, origExtra] of nodeStack) {
      const [mappedNode, mappedExtras] = fn(origNode, origExtra);

      if (mappedExtras && mappedNode !== null) {
        nodeStack.push([mappedNode.back ?? null, mappedExtras[1]]).push([mappedNode.front ?? null, mappedExtras[0]]);
        mappedNode.front = undefined;
        mappedNode.back = undefined;
      } else if (mappedNode) {
        mappedNode.front ??= null;
        mappedNode.back ??= null;
      }

      let node = mappedNode;

      while (node === null || node.front !== undefined && node.back !== undefined) {
        const next = buildStack.pop();

        if (next === undefined || next === null) {
          break;
        }

        if (next.front === undefined) {
          next.front = node;
        } else {
          next.back = node;
        }

        node = next;
      }

      buildStack.push(node);
    }

    const node = buildStack.pop() ?? Bsp.null();
    return node;
  },
  map: (bsp, fn) => Bsp.mapExtra([bsp, undefined], bsp => [fn(bsp), [undefined, undefined]]),
  invert: bsp => Bsp.map(bsp, bsp => bsp ? {
    type: Bsp.id,
    front: bsp.back,
    back: bsp.front,
    faces: bsp.faces.map(Face.flip),
    plane: bsp.plane ? Plane.flip(bsp.plane) : null
  } : null),
  clipFaces: arrayify(function* (bsp, faces, options) {
    const stack = new Stack([[bsp, faces]]);

    for (const [node, faces] of stack) {
      if (node.plane) {
        const frontFaces = [];
        const backFaces = [];
        const dropFront = !!(options & ClipOptions.DropFront);

        for (const face of faces) {
          Plane.splitFace(node.plane, face, {
            front: frontFaces,
            back: backFaces,
            coplanarFront: !!(options & ClipOptions.DropCoplanarFront) === dropFront ? frontFaces : backFaces,
            coplanarBack: !!(options & ClipOptions.DropCoplanarBack) === dropFront ? frontFaces : backFaces
          });
        }

        if (node.front && frontFaces.length) {
          stack.push([node.front, frontFaces]);
        } else if (!dropFront) {
          yield* frontFaces;
        }

        if (node.back && backFaces.length) stack.push([node.back, backFaces]);else if (dropFront) yield* backFaces;
      }
    }
  }),
  clipTo: (a, b, options) => Bsp.map(a, bsp => bsp ? { ...bsp,
    faces: Bsp.clipFaces(b, bsp.faces, options)
  } : null),
  allFaces: arrayify(function* (bsp) {
    const stack = new Stack([bsp]);

    for (const node of stack) {
      if (node) {
        yield* node.faces;
        stack.push(node.back).push(node.front);
      }
    }
  }),
  null: () => Bsp.create(null, null, [], null),
  build: (bsp, allFaces) => Bsp.mapExtra([bsp ?? Bsp.create(null, null, [], allFaces[0].plane), allFaces], (bsp, allFaces) => {
    while (bsp && !bsp.faces.length) {
      if (!(bsp.front && bsp.back)) {
        bsp = bsp.front ?? bsp.back;
      } else {
        allFaces = allFaces.concat(Bsp.allFaces(bsp));
        bsp = null;
      }
    }

    if (!allFaces.length) {
      return [bsp, null];
    }

    const plane = bsp?.plane ?? allFaces[0].plane;
    const front = [];
    const back = [];
    const faces = bsp?.faces.slice() ?? [];

    for (const face of allFaces) {
      Plane.splitFace(plane, face, {
        coplanarFront: faces,
        coplanarBack: faces,
        front,
        back
      });
    }

    return [{
      type: Bsp.id,
      ...bsp,
      faces,
      plane
    }, [front, back]];
  }),
  trim: bsp => {
    if (!bsp) return bsp;
    const front = Bsp.trim(bsp.front);
    const back = Bsp.trim(bsp.back);

    if (bsp.faces.length || front && back) {
      return Bsp.create(front, back, bsp.faces, bsp.plane);
    }

    return front ?? back ?? null;
  }
};

function arrayify(fn) {
  return (...args) => [...fn(...args)];
}