import { createComponent as _$createComponent } from "/transpiled/https://esm.sh/solid-js@1.4.3/web.js";

/** @jsxImportSource solid */
import { TreePart } from "/transpiled/https://escad.dev/client/HierarchyView/Tree.js";
import { TreeTextPart } from "/transpiled/https://escad.dev/client/HierarchyView/TreeText.js";
/**
 * Converts a `Hierarchy` to a `Tree`
 * @param engine
 *   The `HierarchyToTreeEngine` to power the conversion
 * @param hierarchy
 *   The hierarchy to convert
 * @param stateMemo
 *   This memoizes the open/close state between multiple `hierarchyToTree` calls (including with different hierarchies).
 * @param path
 *   The path to get to this hierarchy from root. For the root call, this is `[]` (the default).
 *   Controls state memoization as well as selection behavior.
 */

export function hierarchyToTree(engine, hierarchy, stateMemo, Selectable, path = []) {
  return wrapTreeSelectable(path, hierarchy.linkedProducts, _hierarchyToTree(engine, hierarchy, stateMemo, path, Selectable), Selectable);
}
/**
 * The underlying conversions used in `hierarchyToTree`
 */

function _hierarchyToTree(engine, hierarchy, stateMemo, path, Selectable) {
  return engine[hierarchy.type]({
    path,
    hierarchy: hierarchy,
    stateMemo,
    hierarchyToTree: ({
      path,
      hierarchy
    }) => hierarchyToTree(engine, hierarchy, stateMemo, Selectable, path),
    wrapTreeSelectable: (path, linkedProducts, tree) => wrapTreeSelectable(path, linkedProducts, tree, Selectable)
  });
}
/**
 * Wraps a `Tree` to be selectable
 * @param path
 *   The path to the hierarchy with the relevant `linkedProducts` (used to preserve selection over multiple calls)
 * @param linkedProducts
 *   The `linkedProducts` corresponding to the relevant hierarchy (only used to determine selectability)
 * @param tree
 *   The tree to wrap
 */


export function wrapTreeSelectable(path, linkedProducts, tree, Selectable) {
  if (!linkedProducts?.length || !tree.length) {
    return tree;
  }

  return [TreePart.Line(TreeTextPart.RangeStart(props => _$createComponent(Selectable, {
    path: path,
    linkedProducts: linkedProducts,

    get children() {
      return props.children;
    }

  }))), ...tree, TreePart.Line(TreeTextPart.RangeEnd())];
}