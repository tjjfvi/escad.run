import { template as _$template } from "/transpiled/https://esm.sh/solid-js@1.4.3/web.js";
import { effect as _$effect } from "/transpiled/https://esm.sh/solid-js@1.4.3/web.js";
import { insert as _$insert } from "/transpiled/https://esm.sh/solid-js@1.4.3/web.js";
import { createComponent as _$createComponent } from "/transpiled/https://esm.sh/solid-js@1.4.3/web.js";

const _tmpl$ = /*#__PURE__*/_$template(`<div class="Dropdown"><select></select></div>`, 4),
      _tmpl$2 = /*#__PURE__*/_$template(`<option></option>`, 2);

/** @jsxImportSource solid */
import "/transpiled/https://escad.dev/client/stylus/Dropdown.styl.js";
import { For } from "/transpiled/https://escad.dev/deps/solid.js";
export const Dropdown = props => {
  const key = () => {
    const key = Object.entries(props.options).find(([, v]) => v === props.value)?.[0];
    if (!key) throw new Error("Value passed to Dropdown not in options");
    return key;
  };

  return (() => {
    const _el$ = _tmpl$.cloneNode(true),
          _el$2 = _el$.firstChild;

    _el$2.addEventListener("change", event => props.setValue(props.options[event.currentTarget.value]));

    _$insert(_el$2, _$createComponent(For, {
      get each() {
        return Object.keys(props.options);
      },

      children: key => (() => {
        const _el$3 = _tmpl$2.cloneNode(true);

        _el$3.value = key;

        _$insert(_el$3, key);

        return _el$3;
      })()
    }));

    _$effect(() => _el$2.value = key());

    return _el$;
  })();
};