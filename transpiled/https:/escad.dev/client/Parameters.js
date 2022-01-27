import { IdView } from "/transpiled/https://escad.dev/client/IdView.js";
import React from "/transpiled/https://escad.dev/deps/react.js";
import { ClientState } from "/transpiled/https://escad.dev/client/ClientState.js";
const parameterRegistrations = new Map();
export const registerParameter = async (registration) => {
    if (parameterRegistrations.has(registration.id)) {
        throw new Error(`Duplicate ParameterRegistration for id ${registration.id}`);
    }
    parameterRegistrations.set(registration.id, registration);
};
export const ParameterView = ({ parameter, value }) => {
    const state = React.useContext(ClientState.Context);
    React.useEffect(() => {
        value.on("update", state.triggerParamsUpdate);
        return () => {
            value.off("update", state.triggerParamsUpdate);
        };
    });
    const parameterRegistration = parameterRegistrations.get(parameter.type);
    if (!parameterRegistration) {
        return (React.createElement("div", { className: "Parameter none" },
            React.createElement("span", null, "Cannot display parameter"),
            React.createElement(IdView, { id: parameter.type })));
    }
    return (React.createElement("div", { className: "Parameter " + (parameterRegistration.className ?? "") },
        React.createElement(parameterRegistration.component, { ...{ parameter, value } })));
};
export const NameDesc = ({ parameter }) => (React.createElement("div", { className: "NameDesc" },
    React.createElement("span", { className: "name" }, parameter.name),
    React.createElement("span", { className: "desc" }, parameter.desc)));
