import "/transpiled/https://escad.dev/client/stylus/LogsPane.styl.js";
import { IdView } from "/transpiled/https://escad.dev/client/IdView.js";
import { observer, useFromProm } from "/transpiled/https://escad.dev/deps/rhobo.js";
import React from "/transpiled/https://escad.dev/deps/react.js";
import { ClientState } from "/transpiled/https://escad.dev/client/ClientState.js";
import { Pane } from "/transpiled/https://escad.dev/client/Pane.js";
import { Loading } from "/transpiled/https://escad.dev/client/Loading.js";
const logTypeRegistrations = new Map();
export const registerLogType = async (registration) => {
    if (logTypeRegistrations.has(registration.id)) {
        throw new Error(`Duplicate LogTypeRegistration for id ${registration.id}`);
    }
    logTypeRegistrations.set(registration.id, registration);
};
const LogView = ({ log: logPromise }) => {
    const log = useFromProm.use(logPromise)();
    if (!log) {
        return (React.createElement("div", { className: "Log loading" },
            React.createElement(Loading, null)));
    }
    const registration = logTypeRegistrations.get(log.type);
    if (!registration) {
        return (React.createElement("div", { className: "Log none" },
            React.createElement("span", null, "Cannot display log"),
            React.createElement(IdView, { id: log.type })));
    }
    return (React.createElement("div", { className: "Log " + (registration.className ?? "") },
        React.createElement(registration.component, { ...{ log } })));
};
export const LogsPane = observer(() => {
    const state = React.useContext(ClientState.Context);
    return (React.createElement(Pane, { right: true, name: "Logs" },
        state.logs().map((log, i) => React.createElement(LogView, { key: i, log: log })),
        React.createElement("div", null)));
});
