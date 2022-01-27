import { TreePart } from "/transpiled/https://escad.dev/client/HierarchyView/Tree.js";
import { TreeTextPart, TreeTextRange } from "/transpiled/https://escad.dev/client/HierarchyView/TreeText.js";
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
export function hierarchyToTree(engine, hierarchy, stateMemo, path = []) {
    return wrapTreeSelectable(path, hierarchy.linkedProducts, _hierarchyToTree(engine, hierarchy, stateMemo, path));
}
function _hierarchyToTree(engine, hierarchy, stateMemo, path) {
    return engine[hierarchy.type]({
        path,
        hierarchy: hierarchy,
        stateMemo,
        hierarchyToTree: ({ path, hierarchy }) => hierarchyToTree(engine, hierarchy, stateMemo, path),
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
export function wrapTreeSelectable(path, linkedProducts, tree) {
    if (!linkedProducts?.length || !tree.length) {
        return tree;
    }
    return [
        TreePart.Line(TreeTextPart.RangeStart(TreeTextRange.Selectable(path))),
        ...tree,
        TreePart.Line(TreeTextPart.RangeEnd()),
    ];
}
