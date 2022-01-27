// @style "./stylus/Status.styl"
import React from "/transpiled/https://escad.dev/deps/react.js";
import { observer } from "/transpiled/https://escad.dev/deps/rhobo.js";
import { ClientState } from "/transpiled/https://escad.dev/client/ClientState.js";
import { Icon } from "/transpiled/https://escad.dev/client/Icon.js";
export const Statuses = observer(() => {
    const state = React.useContext(ClientState.Context);
    const statuses = state.statuses();
    return (React.createElement("div", { className: "Statuses" }, statuses.map((statusSet) => (React.createElement(Status, { key: statusSet.name, statusSet: statusSet })))));
});
const Status = ({ statusSet }) => {
    const state = statusSet.state.use()();
    const status = statusSet.statuses[state];
    if (!status) {
        throw new Error(`Invalid StatusSet.state "${state}"`);
    }
    const className = "Status " + (status.className ?? "") +
        (status.onClick ? " clickable" : "");
    return (React.createElement("div", { className: className, onClick: status.onClick },
        React.createElement("div", { className: "icons" },
            statusSet.icon && React.createElement(Icon, { className: "icon1", icon: statusSet.icon }),
            status.icon && React.createElement(Icon, { className: "icon2", icon: status.icon })),
        React.createElement("span", null, status.name)));
};
