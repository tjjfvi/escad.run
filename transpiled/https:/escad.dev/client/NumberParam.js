import { template as _$template } from "/transpiled/https://esm.sh/solid-js@1.4.3/web_target=esnext.js";
import { delegateEvents as _$delegateEvents } from "/transpiled/https://esm.sh/solid-js@1.4.3/web_target=esnext.js";
import { effect as _$effect } from "/transpiled/https://esm.sh/solid-js@1.4.3/web_target=esnext.js";
import { createComponent as _$createComponent } from "/transpiled/https://esm.sh/solid-js@1.4.3/web_target=esnext.js";

const _tmpl$ = /*#__PURE__*/_$template(`<div class="NumberParam"><input type="text"><div class="incDec"><div class="inc"></div><div class="dec"></div></div></div>`, 9);

/** @jsxImportSource solid */
import "/transpiled/https://escad.dev/client/stylus/NumberParam.styl.js";
import { createSignal } from "/transpiled/https://escad.dev/deps/solid.js";
import { NumberParam } from "/transpiled/https://escad.dev/core/mod.js";
import { NameDesc, registerParameter } from "/transpiled/https://escad.dev/client/ParametersPane.js";
registerParameter({
  id: NumberParam.id,
  class: "NumberParam",
  component: props => {
    const validate = val => !(isNaN(val) || props.parameter.integer && Math.floor(val) !== val || props.parameter.min !== undefined && val < props.parameter.min || props.parameter.max !== undefined && val > props.parameter.max);

    const [fieldValue, _setFieldValue] = createSignal(props.value + "");

    const valid = () => validate(+fieldValue());

    const setFieldValue = value => {
      _setFieldValue(value);

      if (validate(+value)) {
        props.setValue(+value);
      }
    };

    return [_$createComponent(NameDesc, {
      get parameter() {
        return props.parameter;
      }

    }), (() => {
      const _el$ = _tmpl$.cloneNode(true),
            _el$2 = _el$.firstChild,
            _el$3 = _el$2.nextSibling,
            _el$4 = _el$3.firstChild,
            _el$5 = _el$4.nextSibling;

      _el$2.addEventListener("change", e => setFieldValue(e.currentTarget.value));

      _el$4.$$click = () => setFieldValue(+fieldValue() + 1 + "");

      _el$5.$$click = () => setFieldValue(+fieldValue() - 1 + "");

      _$effect(_p$ => {
        const _v$ = !valid(),
              _v$2 = fieldValue() || "";

        _v$ !== _p$._v$ && _el$.classList.toggle("invalid", _p$._v$ = _v$);
        _v$2 !== _p$._v$2 && (_el$2.value = _p$._v$2 = _v$2);
        return _p$;
      }, {
        _v$: undefined,
        _v$2: undefined
      });

      return _el$;
    })()];
  }
});

_$delegateEvents(["click"]);