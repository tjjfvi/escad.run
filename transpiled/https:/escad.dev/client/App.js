import React from "/transpiled/https://escad.dev/deps/react.js";
import { Statuses } from "/transpiled/https://escad.dev/client/Status.js";
import { HierarchyPane } from "/transpiled/https://escad.dev/client/HierarchyPane.js";
import { ParametersPane } from "/transpiled/https://escad.dev/client/ParametersPane.js";
import { Preview } from "/transpiled/https://escad.dev/client/Preview.js";
import { ClientState } from "/transpiled/https://escad.dev/client/ClientState.js";
import { LogsPane } from "/transpiled/https://escad.dev/client/LogsPane.js";
export const App = ({ state }) => (React.createElement(ClientState.Context.Provider, { value: state },
    React.createElement(ParametersPane, null),
    React.createElement(Preview, null),
    React.createElement(Statuses, null),
    React.createElement(HierarchyPane, null),
    React.createElement(LogsPane, null)));
