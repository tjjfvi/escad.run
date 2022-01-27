// @style "./stylus/HierarchyLog.styl"
import React from "/transpiled/https://escad.dev/deps/react.js";
import { HierarchyLog } from "/transpiled/https://escad.dev/core/mod.js";
import { registerLogType } from "/transpiled/https://escad.dev/client/LogsPane.js";
import { HierarchyView } from "/transpiled/https://escad.dev/client/HierarchyView/mod.js";
const HierarchyLogView = ({ log }) => (React.createElement(HierarchyView, { hierarchy: log.hierarchy, selectable: false }));
registerLogType({
    id: HierarchyLog.id,
    className: "HierarchyLog",
    component: HierarchyLogView,
});
