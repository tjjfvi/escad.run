import { TreeTextPart } from "/transpiled/https://escad.dev/client/HierarchyView/TreeText.js";
export var TreePart;
(function (TreePart) {
    TreePart.Line = (...text) => ({
        kind: "line",
        text: [].concat(...text),
    });
    TreePart.Line.String = (string) => TreePart.Line(TreeTextPart.String(string));
    TreePart.Block = (data) => ({
        kind: "block",
        ...data,
    });
})(TreePart || (TreePart = {}));
