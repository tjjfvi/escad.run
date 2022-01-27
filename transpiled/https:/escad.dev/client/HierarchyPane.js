import "/transpiled/https://escad.dev/client/stylus/Hierarchy.styl.js";
import React from "/transpiled/https://escad.dev/deps/react.js";
import { observer, useObservable } from "/transpiled/https://escad.dev/deps/rhobo.js";
import { ClientState } from "/transpiled/https://escad.dev/client/ClientState.js";
import { HierarchyView, httDetailedEngine, httOutlineEngine, } from "/transpiled/https://escad.dev/client/HierarchyView/mod.js";
import { Pane } from "/transpiled/https://escad.dev/client/Pane.js";
import { Dropdown } from "/transpiled/https://escad.dev/client/Dropdown.js";
export const HierarchyPane = observer(() => {
    const engine = useObservable(httOutlineEngine);
    const state = React.useContext(ClientState.Context);
    const hierarchy = state.hierarchy();
    if (hierarchy) {
        return (React.createElement(Pane, { right: true, name: "Hierarchy" },
            React.createElement(Dropdown, { value: engine, options: {
                    "Outline": httOutlineEngine,
                    "Detailed": httDetailedEngine,
                } }),
            React.createElement(HierarchyView, { hierarchy: hierarchy, selectable: true, engine: engine() })));
    }
    return null;
});
