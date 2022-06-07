import { assertNever } from "/transpiled/https://escad.dev/core/mod.js";
import { TreePart } from "/transpiled/https://escad.dev/client/HierarchyView/Tree.js";
import { TreeTextPart } from "/transpiled/https://escad.dev/client/HierarchyView/TreeText.js";
import { treeTextLength } from "/transpiled/https://escad.dev/client/HierarchyView/treeTextLength.js";
/**
 * Finishes a `Tree` to be displayed
 * - Ellipses closed `TreePart.Block`s
 * - Concatentates adjacent `TreePart.Line`s
 * - Applies ranges spanning multiple non-adjacent `TreePart.Line`s to each inner element
 *
 * Example:
 * ```
 * Tree[Line[DummyRangeStart], Line[String], Block, Line[String, RangeEnd], Line[String]]
 * ```
 * becomes
 * ```
 * Tree[Line[DummyRangeStart, String, RangeEnd], Block, Line[DummyRangeStart, String, RangeEnd, String]]
 * ```
 */

export function finalizeTree(originalTree) {
  let treeAcc = [];
  let treeTextAcc = [];
  let openRanges = [];

  for (const treePart of originalTree) {
    if (treePart.kind === "line") {
      for (const treeTextPart of treePart.text) {
        treeTextAcc.push(treeTextPart);

        if (treeTextPart.kind === "string" || treeTextPart.kind === "ellipsis") {
          continue;
        }

        if (treeTextPart.kind === "rangeEnd") {
          openRanges.pop();
          continue;
        }

        if (treeTextPart.kind === "rangeStart") {
          openRanges.push(treeTextPart);
          continue;
        }

        assertNever(treeTextPart);
      }

      continue;
    }

    if (!treePart.state.open) {
      treeTextAcc.push(TreeTextPart.Ellipsis(treePart.state));
      continue;
    }

    finishTreeTextAcc();
    treeAcc.push({ ...treePart
    });
  }

  finishTreeTextAcc();
  return treeAcc;

  function finishTreeTextAcc() {
    for (const {} of openRanges) {
      treeTextAcc.push(TreeTextPart.RangeEnd());
    }

    if (treeTextLength(treeTextAcc)) {
      treeAcc.push(TreePart.Line(treeTextAcc));
    }

    treeTextAcc = [...openRanges];
  }
}