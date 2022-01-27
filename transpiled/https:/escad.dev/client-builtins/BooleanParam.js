import "/transpiled/https://escad.dev/client-builtins/stylus/BooleanParam.styl.js";
import { BooleanParam } from "/transpiled/https://escad.dev/builtins/mod.js";
import React from "/transpiled/https://escad.dev/deps/react.js";
import { observer } from "/transpiled/https://escad.dev/deps/rhobo.js";
import { NameDesc, registerParameter } from "/transpiled/https://escad.dev/client/mod.js";
registerParameter({
    id: BooleanParam.id,
    className: "BooleanParam",
    component: observer(({ parameter, value }) => (React.createElement(React.Fragment, null,
        React.createElement(NameDesc, { parameter: parameter }),
        React.createElement("div", { className: "checkbox" },
            React.createElement("label", null,
                React.createElement("input", { type: "checkbox", checked: value(), onChange: () => value(!value.value) }),
                React.createElement("div", null)))))),
});
