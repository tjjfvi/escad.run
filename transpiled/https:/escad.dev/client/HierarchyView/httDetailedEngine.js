import { ArrayHierarchy, CallHierarchy, Hierarchy, ObjectHierarchy } from "/transpiled/https://escad.dev/core/mod.js";
import { getState } from "/transpiled/https://escad.dev/client/HierarchyView/State.js";
import { TreePart } from "/transpiled/https://escad.dev/client/HierarchyView/Tree.js";
export const httDetailedEngine = {
  NameHierarchy: ({
    hierarchy
  }) => [TreePart.Line.String(hierarchy.name)],
  ValueHierarchy: ({
    hierarchy
  }) => [TreePart.Line.String(hierarchy.value === null ? "null" : typeof hierarchy.value === "object" ? "undefined" in hierarchy.value ? "undefined" : `Symbol(${hierarchy.value ?? ""})` : JSON.stringify(hierarchy.value))],
  ObjectHierarchy: ({
    path,
    hierarchy,
    stateMemo,
    hierarchyToTree,
    wrapTreeSelectable
  }) => [TreePart.Line.String("{"), TreePart.Block({
    children: Object.entries(hierarchy.children).map(([key, value]) => {
      const newPath = [...path, {
        type: "ObjectHierarchyPathPart",
        key
      }];
      return wrapTreeSelectable(newPath, value.linkedProducts, [TreePart.Line.String(key), TreePart.Line.String(": "), TreePart.Block({
        children: [hierarchyToTree({
          path: newPath,
          hierarchy: value
        })],
        state: getState(stateMemo, path, key + ":")
      })]);
    }),
    joiner: ", ",
    state: getState(stateMemo, path, ""),
    forceOpenable: true
  }), TreePart.Line.String("}")],
  ArrayHierarchy: ({
    path,
    hierarchy,
    stateMemo,
    hierarchyToTree
  }) => [TreePart.Line.String("["), TreePart.Block({
    children: hierarchy.children.map((value, index) => hierarchyToTree({
      path: [...path, {
        type: "ArrayHierarchyPathPart",
        index
      }],
      hierarchy: value
    })),
    joiner: ", ",
    state: getState(stateMemo, path, ""),
    forceOpenable: hierarchy.children.length > 1
  }), TreePart.Line.String("]")],
  CallHierarchy: ({
    path,
    hierarchy,
    stateMemo,
    hierarchyToTree,
    wrapTreeSelectable
  }) => {
    if (!hierarchy.composable) {
      return [...hierarchyToTree({
        path: [...path, {
          type: "CallHierarchyPathPart",
          location: "operator"
        }],
        hierarchy: hierarchy.operator
      }), ..._callHierarchyOperandsTree(path, hierarchy.operands), ...(hierarchy.result ? [TreePart.Line.String(" = "), TreePart.Block({
        state: getState(stateMemo, path, "result"),
        children: [hierarchyToTree({
          path: [...path, {
            type: "CallHierarchyPathPart",
            location: "result"
          }],
          hierarchy: hierarchy.result
        })],
        forceEllipsis: true
      })] : [])];
    }

    const operators = [];
    let operands = [hierarchy];
    let curPath = path;
    let start = true;

    while (operands.length === 1 && CallHierarchy.isCallHierarchy(operands[0]) && operands[0].composable) {
      if (!start) {
        curPath = [...curPath, {
          type: "CallHierarchyPathPart",
          location: "onlyOperand"
        }];
      }

      start = false;
      const [curHierarchy] = operands;
      operands = curHierarchy.operands;
      operators.push([...hierarchyToTree({
        path: curPath,
        hierarchy: { ...curHierarchy.operator,
          linkedProducts: curHierarchy.linkedProducts
        }
      }), ...(curHierarchy.result ? [TreePart.Line.String(" -> "), TreePart.Block({
        state: getState(stateMemo, curPath, "result"),
        children: [hierarchyToTree({
          path: [...curPath, {
            type: "CallHierarchyPathPart",
            location: "result"
          }],
          hierarchy: curHierarchy.result
        })],
        forceEllipsis: true
      })] : [])]);
    }

    return [TreePart.Line.String("("), TreePart.Block({
      children: operators,
      joiner: "∘",
      state: getState(stateMemo, path, "operators"),
      forceOpenable: true
    }), TreePart.Line.String(")"), ..._callHierarchyOperandsTree(curPath, operands)];

    function _callHierarchyOperandsTree(path, operands) {
      return wrapTreeSelectable([...path, {
        type: "CallHierarchyPathPart",
        location: "allOperands"
      }], Hierarchy.flattenLinkedProducts(operands), [TreePart.Line.String("("), TreePart.Block({
        children: operands.map((value, index) => hierarchyToTree({
          path: [...path, {
            type: "CallHierarchyPathPart",
            location: operands.length === 1 ? "onlyOperand" : index
          }],
          hierarchy: value
        })),
        joiner: ", ",
        state: getState(stateMemo, path, "operands"),
        forceOpenable: operands.length !== 1 || !(ArrayHierarchy.isArrayHierarchy(operands[0]) || ObjectHierarchy.isObjectHierarchy(operands[0]))
      }), TreePart.Line.String(")")]);
    }
  }
};