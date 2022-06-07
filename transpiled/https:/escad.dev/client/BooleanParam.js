import { template as _$template } from "/transpiled/https://esm.sh/solid-js@1.4.3/web.js";
import { effect as _$effect } from "/transpiled/https://esm.sh/solid-js@1.4.3/web.js";
import { createComponent as _$createComponent } from "/transpiled/https://esm.sh/solid-js@1.4.3/web.js";

const _tmpl$ = /*#__PURE__*/_$template(`<div class="checkbox"><label><input type="checkbox"><div></div></label></div>`, 7);

/** @jsxImportSource solid */
import "/transpiled/https://escad.dev/client/stylus/BooleanParam.styl.js";
import { BooleanParam } from "/transpiled/https://escad.dev/core/mod.js";
import { NameDesc, registerParameter } from "/transpiled/https://escad.dev/client/ParametersPane.js";
registerParameter({
  id: BooleanParam.id,
  class: "BooleanParam",
  component: props => [_$createComponent(NameDesc, {
    get parameter() {
      return props.parameter;
    }

  }), (() => {
    const _el$ = _tmpl$.cloneNode(true),
          _el$2 = _el$.firstChild,
          _el$3 = _el$2.firstChild;

    _el$3.addEventListener("change", () => props.setValue(!props.value));

    _$effect(() => _el$3.checked = props.value);

    return _el$;
  })()]
});