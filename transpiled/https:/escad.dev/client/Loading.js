import { template as _$template } from "/transpiled/https://esm.sh/solid-js@1.4.3/web.js";
import { style as _$style } from "/transpiled/https://esm.sh/solid-js@1.4.3/web.js";
import { className as _$className } from "/transpiled/https://esm.sh/solid-js@1.4.3/web.js";
import { effect as _$effect } from "/transpiled/https://esm.sh/solid-js@1.4.3/web.js";

const _tmpl$ = /*#__PURE__*/_$template(`<div></div>`, 2);

/** @jsxImportSource solid */
import "/transpiled/https://escad.dev/client/stylus/Loading.styl.js";
export const Loading = props => (() => {
  const _el$ = _tmpl$.cloneNode(true);

  _$effect(_p$ => {
    const _v$ = "Loading " + (props.class ?? ""),
          _v$2 = props.size === undefined ? {} : {
      "--size": props.size + "px"
    };

    _v$ !== _p$._v$ && _$className(_el$, _p$._v$ = _v$);
    _p$._v$2 = _$style(_el$, _v$2, _p$._v$2);
    return _p$;
  }, {
    _v$: undefined,
    _v$2: undefined
  });

  return _el$;
})();