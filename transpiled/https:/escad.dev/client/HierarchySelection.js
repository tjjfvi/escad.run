import { assertNever } from "/transpiled/https://escad.dev/core/mod.js";
import { getHierarchyPath } from "/transpiled/https://escad.dev/client/HierarchyPath.js";
export function resolveHierarchySelection(hierarchySelection, hierarchy) {
    const selectedProducts = new Map();
    for (const selectionPart of hierarchySelection) {
        const subHierarchy = getHierarchyPath(selectionPart.path, hierarchy);
        if (!subHierarchy?.linkedProducts)
            continue;
        for (const productHash of subHierarchy.linkedProducts) {
            if (selectionPart.type === "include") {
                selectedProducts.set(productHash, true);
            }
            else if (selectionPart.type === "exclude") {
                selectedProducts.set(productHash, false);
            }
            else {
                assertNever(selectionPart.type);
            }
        }
    }
    return selectedProducts;
}
