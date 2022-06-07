import { template as _$template } from "/transpiled/https://esm.sh/solid-js@1.4.3/web.js";
import { insert as _$insert } from "/transpiled/https://esm.sh/solid-js@1.4.3/web.js";
import { createComponent as _$createComponent } from "/transpiled/https://esm.sh/solid-js@1.4.3/web.js";

const _tmpl$ = /*#__PURE__*/_$template(`<div class="children"></div>`, 2);

/** @jsxImportSource solid */
import "/transpiled/https://escad.dev/client/stylus/ObjectParam.styl.js";
import { For } from "/transpiled/https://escad.dev/deps/solid.js";
import { ObjectParam } from "/transpiled/https://escad.dev/core/mod.js";
import { NameDesc, ParameterView, registerParameter } from "/transpiled/https://escad.dev/client/ParametersPane.js";
registerParameter({
  id: ObjectParam.id,
  class: "ObjectParam",
  component: props => [_$createComponent(NameDesc, {
    get parameter() {
      return props.parameter;
    }

  }), (() => {
    const _el$ = _tmpl$.cloneNode(true);

    _$insert(_el$, _$createComponent(For, {
      get each() {
        return Object.keys(props.parameter.children);
      },

      children: key => _$createComponent(ParameterView, {
        get parameter() {
          return props.parameter.children[key];
        },

        get value() {
          return props.value[key];
        },

        setValue: value => props.setValue({ ...props.value,
          [key]: value
        })
      })
    }));

    return _el$;
  })()]
});