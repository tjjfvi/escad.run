import React from "/transpiled/https://escad.dev/deps/react.js";
import { MdiIcon, mdiIcons } from "/transpiled/https://escad.dev/deps/mdi.js";
export const Icon = (props) => (React.createElement(props.icon, { className: props.className }));
export const mdi = new Proxy({}, {
    get: (target, key) => {
        if (key in target || typeof key === "symbol" || typeof key === "number") {
            return target[key];
        }
        const icon = ({ className }) => (React.createElement(MdiIcon, { path: mdiIcons[("mdi" + key[0].toUpperCase() + key.slice(1))], className: (className ?? "") + ` mdi ${key}` }));
        return target[key] = icon;
    },
});
