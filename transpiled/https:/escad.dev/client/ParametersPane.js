import React from "/transpiled/https://escad.dev/deps/react.js";
import { observer } from "/transpiled/https://escad.dev/deps/rhobo.js";
import { ClientState } from "/transpiled/https://escad.dev/client/ClientState.js";
import { Pane } from "/transpiled/https://escad.dev/client/Pane.js";
import { ParameterView } from "/transpiled/https://escad.dev/client/Parameters.js";
export const ParametersPane = observer(() => {
    const state = React.useContext(ClientState.Context);
    const def = state.paramDef();
    if (!def) {
        return React.createElement(React.Fragment, null);
    }
    return (React.createElement(Pane, { name: "Parameters", className: "Parameters", left: true }, Object.entries(def.children).map(([key, paramDef]) => {
        const value = state.params.obs[key];
        if (value.value === undefined) {
            value(paramDef.defaultValue);
        }
        return React.createElement(ParameterView, { parameter: paramDef, value: value, key: key });
    })));
});
