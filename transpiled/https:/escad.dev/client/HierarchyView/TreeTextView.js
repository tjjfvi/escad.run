import { assertNever, Hash } from "/transpiled/https://escad.dev/core/mod.js";
import React from "/transpiled/https://escad.dev/deps/react.js";
import { observer } from "/transpiled/https://escad.dev/deps/rhobo.js";
import { ClientState } from "/transpiled/https://escad.dev/client/ClientState.js";
import { getHierarchyPath } from "/transpiled/https://escad.dev/client/HierarchyPath.js";
import { NestableSpan } from "/transpiled/https://escad.dev/client/HierarchyView/NestableSpan.js";
import { TreeTextRange } from "/transpiled/https://escad.dev/client/HierarchyView/TreeText.js";
export const TreeTextView = ({ text, selectable, onUpdate }) => {
    let wrapperStack = [{
            children: [],
            range: TreeTextRange.Dummy(),
        }];
    for (const [index, part] of text.entries()) {
        const currentWrapper = wrapperStack[wrapperStack.length - 1];
        if (part.kind === "string") {
            currentWrapper.children.push(part.string);
            continue;
        }
        if (part.kind === "ellipsis") {
            currentWrapper.children.push(React.createElement(NestableSpan, { key: index, className: "openable ellipsis", onClick: () => {
                    opener.target.open = true;
                    onUpdate();
                }, children: "···" }));
            continue;
        }
        if (part.kind === "rangeStart") {
            wrapperStack.push({
                children: [],
                range: part.range,
            });
            continue;
        }
        if (part.kind === "rangeEnd") {
            const previousWrapper = wrapperStack[wrapperStack.length - 2];
            previousWrapper.children.push(React.createElement(TreeTextPartView, { key: index, onUpdate: onUpdate, selectable: selectable, range: currentWrapper.range, children: currentWrapper.children }));
            wrapperStack.pop();
            continue;
        }
        assertNever(part);
    }
    return React.createElement("span", null, wrapperStack[wrapperStack.length - 1].children);
};
const TreeTextPartView = observer(({ range, children, selectable }) => {
    const state = React.useContext(ClientState.Context);
    if (range.kind === "dummy") {
        return React.createElement(React.Fragment, null, children);
    }
    if (range.kind === "selectable") {
        if (!selectable) {
            return React.createElement(React.Fragment, null, children);
        }
        const { path } = range;
        const selectionClass = getSelectionClass() ?? "";
        return (React.createElement(NestableSpan, { className: "selectable " + selectionClass, onClick: (event) => {
                if (event.ctrlKey || event.metaKey || event.altKey) {
                    state.selection([
                        ...(state.selection.value ?? []),
                        {
                            type: event.altKey
                                ? "exclude"
                                : "include",
                            path,
                        },
                    ]);
                }
                else {
                    state.selection([{
                            type: "include",
                            path,
                        }]);
                }
            }, children: children }));
        function getSelectionClass() {
            const hierarchy = state.hierarchy();
            if (!hierarchy)
                return;
            const linkedProducts = getHierarchyPath(path, hierarchy)
                ?.linkedProducts;
            if (!linkedProducts)
                return;
            const resolvedSelection = state.resolvedSelection();
            if (!resolvedSelection)
                return;
            const selectionStates = linkedProducts.map((x) => resolvedSelection.get(x));
            const directly = findLast(state.selection() ?? [], (x) => Hash.equal(x.path, path))
                ?.type ?? null;
            const someNull = selectionStates.some((x) => x == null);
            const included = selectionStates.some((x) => x === true);
            const excluded = selectionStates.some((x) => x === false);
            return `directly-${directly} someNull-${someNull} included-${included} excluded-${excluded}`;
        }
    }
    assertNever(range);
});
/** Like [].find but it starts from the end */
function findLast(array, predicate) {
    for (let i = array.length - 1; i >= 0; i--) {
        if (predicate(array[i])) {
            return array[i];
        }
    }
}
