import React from "/transpiled/https://escad.dev/deps/react.js";
import { useValue } from "/transpiled/https://escad.dev/deps/rhobo.js";
import { ResizeSensor } from "/transpiled/https://escad.dev/deps/css-element-queries.js";
import { TreeView } from "/transpiled/https://escad.dev/client/HierarchyView/TreeView.js";
import { hierarchyToTree } from "/transpiled/https://escad.dev/client/HierarchyView/hierarchyToTree.js";
import { httDetailedEngine } from "/transpiled/https://escad.dev/client/HierarchyView/httDetailedEngine.js";
export const HierarchyView = ({ hierarchy, selectable = false, engine = httDetailedEngine }) => {
    const [width, setWidth] = React.useState(0);
    const sensorRef = React.useRef();
    const stateMemo = useValue(() => new Map());
    return (React.createElement("div", { ref: (el) => {
            sensorRef.current?.detach();
            if (!el)
                return;
            const sensor = new ResizeSensor(el, () => {
                if (el.clientWidth !== width)
                    setWidth(el.clientWidth);
            });
            sensorRef.current = sensor;
        } },
        React.createElement(TreeView, { width: width, tree: hierarchyToTree(engine, hierarchy, stateMemo), selectable: selectable })));
};
