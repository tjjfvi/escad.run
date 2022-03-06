import "/transpiled/https://escad.dev/client/stylus/NumberParam.styl.js";
import { NumberParam } from "/transpiled/https://escad.dev/core/mod.js";
import React from "/transpiled/https://escad.dev/deps/react.js";
import { observer, useComputed, useObservable } from "/transpiled/https://escad.dev/deps/rhobo.js";
import { NameDesc, registerParameter } from "/transpiled/https://escad.dev/client/mod.js";
registerParameter({
    id: NumberParam.id,
    className: "NumberParam",
    component: observer(({ parameter, value }) => {
        const validate = (val) => !((isNaN(val)) ||
            (parameter.integer && Math.floor(val) !== val) ||
            (parameter.min !== undefined && val < parameter.min) ||
            (parameter.max !== undefined && val > parameter.max));
        const _fieldValue = useObservable(value() + "");
        const valid = useComputed(() => validate(+_fieldValue()));
        const fieldValue = useComputed(() => _fieldValue(), (v) => {
            _fieldValue(v);
            if (validate(+v)) {
                value(+v);
            }
        });
        return (React.createElement(React.Fragment, null,
            React.createElement(NameDesc, { parameter: parameter }),
            React.createElement("div", { className: "NumberParam " + (valid() ? "" : "invalid") },
                React.createElement("input", { type: "text", value: fieldValue() || "", onChange: (e) => fieldValue(e.target.value) }),
                React.createElement("div", { className: "incDec" },
                    React.createElement("div", { className: "inc", onClick: () => fieldValue((+fieldValue.value + 1) + "") }),
                    React.createElement("div", { className: "dec", onClick: () => fieldValue((+fieldValue.value - 1) + "") })))));
    }),
});
