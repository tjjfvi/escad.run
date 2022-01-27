import React from "/transpiled/https://escad.dev/deps/react.js";
import { flattenTree } from "/transpiled/https://escad.dev/client/HierarchyView/flattenTree.js";
import { finalizeTree } from "/transpiled/https://escad.dev/client/HierarchyView/finalizeTree.js";
import { TreeTextView } from "/transpiled/https://escad.dev/client/HierarchyView/TreeTextView.js";
const arrowWidth = 25;
const characterWidth = 10;
export const TreeView = ({ tree, width, selectable }) => {
    const [, _update] = React.useState({});
    const update = () => _update({});
    const innerWidth = width - arrowWidth;
    const maxLength = innerWidth / characterWidth;
    const collapsedTree = flattenTree(tree, maxLength);
    const joinedCollapsedTree = finalizeTree(collapsedTree);
    return (React.createElement("div", { className: "TreeNode" }, joinedCollapsedTree.map((part, i) => {
        const prev = joinedCollapsedTree[i - 1];
        const next = joinedCollapsedTree[i + 1];
        if (part.kind === "block") {
            return (React.createElement("div", { className: "block", key: i }, part.children.map((y, i) => (React.createElement(TreeView, { selectable: selectable, width: innerWidth, tree: y, key: i })))));
        }
        if (next && next.kind === "block") {
            return (React.createElement(Line, { key: i, selectable: selectable, arrowState: "open", text: part.text, onUpdate: update, onClick: () => (next.state.open = false, update()) }));
        }
        const expandableSections = getOpenableSections(tree, maxLength);
        const sectionsSplitInd = prev?.kind === "block"
            ? expandableSections.findIndex((v) => v.state === prev.state) + 1
            : 0;
        const relevantSections = expandableSections.slice(sectionsSplitInd);
        if (!relevantSections.length) {
            return (React.createElement(Line, { key: i, selectable: selectable, arrowState: "leaf", text: part.text, onUpdate: update }));
        }
        return (React.createElement(Line, { key: i, selectable: selectable, arrowState: "closed", text: part.text, onUpdate: update, onClick: () => {
                relevantSections.forEach((x) => x.state.open = true);
                update();
            } }));
    })));
};
const Line = ({ arrowState, text, onClick, onUpdate, selectable }) => (React.createElement("div", { className: "line", onDoubleClick: onClick },
    React.createElement("div", { className: "arrow " + arrowState, onClick: onClick }),
    React.createElement(TreeTextView, { selectable: selectable, text: text, onUpdate: onUpdate })));
function getOpenableSections(tree, maxLength) {
    return flattenTree(tree, maxLength, false)
        .filter((part) => part.kind === "block")
        .filter((part) => part.children.length > 0);
}
