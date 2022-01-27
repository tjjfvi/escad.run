import { finalizeTree } from "/transpiled/https://escad.dev/client/HierarchyView/finalizeTree.js";
import { TreePart } from "/transpiled/https://escad.dev/client/HierarchyView/Tree.js";
import { treeTextLength } from "/transpiled/https://escad.dev/client/HierarchyView/treeTextLength.js";
/**
 * Equally flattens a tree's children up until it's fully flattened or there's no more room in `maxLength`
 * @param tree The tree to flatten
 * @param maxLength The output tree's lines will all be under this length, if possible
 * @param flattenOpenable
 *   Whether or not to flatten nodes that should be openable with an arrow. Used in `getExpandableSections`
 */
export function flattenTree(tree, maxLength, flattenOpenable = true) {
    while (true) {
        const newTree = [];
        let changed = false;
        for (const part of tree) {
            const flattened = part.kind === "block" &&
                !part.state.open &&
                !part.forceEllipsis &&
                (flattenOpenable || !part.forceOpenable)
                ? interleaveFlat(part.children, TreePart.Line.String(part.joiner ?? ""))
                : null; // no change
            newTree.push(...(flattened ?? [part]));
            changed ||= !!flattened;
        }
        if (!changed || !checkTreeWithinMaxLength(newTree, maxLength)) {
            return tree;
        }
        tree = newTree;
    }
}
function checkTreeWithinMaxLength(tree, maxLength) {
    return finalizeTree(tree).every((x) => x.kind === "block" || treeTextLength(x.text) <= maxLength);
}
/** Similar to [].join */
function interleaveFlat(array, separator) {
    const newArray = [];
    let first = true;
    for (const value of array) {
        if (!first)
            newArray.push(separator);
        newArray.push(...value);
        first = false;
    }
    return newArray;
}
