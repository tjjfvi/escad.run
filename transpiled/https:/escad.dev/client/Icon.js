import { template as _$template } from "/transpiled/https://esm.sh/solid-js@1.4.3/web_target=esnext.js";
import { setAttribute as _$setAttribute } from "/transpiled/https://esm.sh/solid-js@1.4.3/web_target=esnext.js";
import { effect as _$effect } from "/transpiled/https://esm.sh/solid-js@1.4.3/web_target=esnext.js";
import { createComponent as _$createComponent } from "/transpiled/https://esm.sh/solid-js@1.4.3/web_target=esnext.js";

const _tmpl$ = /*#__PURE__*/_$template(`<svg viewBox="0 0 24 24"><path style="fill: currentColor"></path></svg>`, 4);

/** @jsxImportSource solid */
import { mdiIcons } from "/transpiled/https://escad.dev/deps/mdi.js";
export const Icon = props => () => props.icon && _$createComponent(props.icon, {
  get ["class"]() {
    return props.class;
  }

});
export const mdi = new Proxy({}, {
  get: (target, key) => {
    if (key in target || typeof key === "symbol" || typeof key === "number") {
      return target[key];
    }

    const icon = props => (() => {
      const _el$ = _tmpl$.cloneNode(true),
            _el$2 = _el$.firstChild;

      _$effect(_p$ => {
        const _v$ = (props.class ?? "") + ` mdi ${key}`,
              _v$2 = mdiIcons["mdi" + key[0].toUpperCase() + key.slice(1)];

        _v$ !== _p$._v$ && _$setAttribute(_el$, "class", _p$._v$ = _v$);
        _v$2 !== _p$._v$2 && _$setAttribute(_el$2, "d", _p$._v$2 = _v$2);
        return _p$;
      }, {
        _v$: undefined,
        _v$2: undefined
      });

      return _el$;
    })();

    return target[key] = icon;
  }
});