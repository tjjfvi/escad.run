import "/transpiled/https://escad.dev/client/stylus/StringLog.styl.js";
import React from "/transpiled/https://escad.dev/deps/react.js";
import { StringLog } from "/transpiled/https://escad.dev/core/mod.js";
import { registerLogType } from "/transpiled/https://escad.dev/client/LogsPane.js";
const StringLogView = ({ log }) => (React.createElement("span", null, log.message));
registerLogType({
    id: StringLog.id,
    className: "StringLog",
    component: StringLogView,
});
