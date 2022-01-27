import "/transpiled/https://escad.dev/client/stylus/RawViewer.styl.js";
import { Hierarchy } from "/transpiled/https://escad.dev/core/mod.js";
import { UnknownProductType } from "/transpiled/https://escad.dev/core/mod.js";
import React from "/transpiled/https://escad.dev/deps/react.js";
import { observer, useFromPromise } from "/transpiled/https://escad.dev/deps/rhobo.js";
import { HierarchyView } from "/transpiled/https://escad.dev/client/HierarchyView/mod.js";
import { viewerRegistry } from "/transpiled/https://escad.dev/client/ViewerRegistry.js";
import { Loading } from "/transpiled/https://escad.dev/client/Loading.js";
viewerRegistry.register({
    type: UnknownProductType.create(),
    map: async (x) => ({ product: x }),
    context: {
        name: "Raw",
        className: "RawViewer",
        component: observer(({ inputs }) => {
            const hierarchyPromise = Promise.all(inputs).then((x) => Hierarchy.from(x.map((x) => x.product.product), true));
            const hierarchy = useFromPromise(hierarchyPromise)();
            if (!hierarchy) {
                return React.createElement(Loading, null);
            }
            return (React.createElement("div", { className: "inner" },
                React.createElement(HierarchyView, { hierarchy: hierarchy })));
        }),
        weight: 0,
    },
});
