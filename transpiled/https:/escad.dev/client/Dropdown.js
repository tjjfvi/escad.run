/// <reference lib="dom"/>
import "/transpiled/https://escad.dev/client/stylus/Dropdown.styl.js";
import React from "/transpiled/https://escad.dev/deps/react.js";
import { observer } from "/transpiled/https://escad.dev/deps/rhobo.js";
export const Dropdown = observer(({ options, value }) => {
    const key = Object.entries(options).find(([, v]) => v === value())?.[0];
    if (!key)
        throw new Error("Value passed to Dropdown not in options");
    return (React.createElement("div", { className: "Dropdown" },
        React.createElement("select", { value: key, onChange: (event) => value(options[event.target.value]) }, Object.keys(options).map((key) => (React.createElement("option", { key: key, value: key }, key))))));
});
