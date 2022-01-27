// @style "./stylus/ObjectParam.styl"
import { ObjectParam } from "/transpiled/https://escad.dev/core/mod.js";
import React from "/transpiled/https://escad.dev/deps/react.js";
import { observer } from "/transpiled/https://escad.dev/deps/rhobo.js";
import { NameDesc, ParameterView, registerParameter } from "/transpiled/https://escad.dev/client/Parameters.js";
registerParameter({
    id: ObjectParam.id,
    className: "ObjectParam",
    component: observer(({ parameter, value: obj }) => (React.createElement(React.Fragment, null,
        React.createElement(NameDesc, { parameter: parameter }),
        React.createElement("div", { className: "children" }, Object.entries(parameter.children)
            .map(([key, paramDef]) => {
            const value = obj.obs[key];
            if (value.value === undefined) {
                value(paramDef.defaultValue);
            }
            return (React.createElement(ParameterView, { parameter: paramDef, value: value, key: key }));
        }))))),
});
