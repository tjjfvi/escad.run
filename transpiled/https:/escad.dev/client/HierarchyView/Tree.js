import { TreeTextPart } from "/transpiled/https://escad.dev/client/HierarchyView/TreeText.js";
export let TreePart;

(function (_TreePart) {
  const Line = _TreePart.Line = (...text) => ({
    kind: "line",
    text: [].concat(...text)
  });

  Line.String = string => Line(TreeTextPart.String(string));

  const Block = _TreePart.Block = data => ({
    kind: "block",
    ...data
  });
})(TreePart || (TreePart = {}));