import { template as _$template } from "/transpiled/https://esm.sh/solid-js@1.4.3/web.js";
import { delegateEvents as _$delegateEvents } from "/transpiled/https://esm.sh/solid-js@1.4.3/web.js";
import { classList as _$classList } from "/transpiled/https://esm.sh/solid-js@1.4.3/web.js";
import { effect as _$effect } from "/transpiled/https://esm.sh/solid-js@1.4.3/web.js";
import { mergeProps as _$mergeProps } from "/transpiled/https://esm.sh/solid-js@1.4.3/web.js";
import { insert as _$insert } from "/transpiled/https://esm.sh/solid-js@1.4.3/web.js";
import { createComponent as _$createComponent } from "/transpiled/https://esm.sh/solid-js@1.4.3/web.js";

const _tmpl$ = /*#__PURE__*/_$template(`<div class="Statuses"></div>`, 2),
      _tmpl$2 = /*#__PURE__*/_$template(`<div class="Status"><div class="icons"></div><span></span></div>`, 6);

/** @jsxImportSource solid */
import "/transpiled/https://escad.dev/client/stylus/Status.styl.js";
import { Index } from "/transpiled/https://escad.dev/deps/solid.js";
import { Icon } from "/transpiled/https://escad.dev/client/Icon.js";
export const Statuses = props => {
  return (() => {
    const _el$ = _tmpl$.cloneNode(true);

    _$insert(_el$, _$createComponent(Index, {
      get each() {
        return props.statuses;
      },

      children: status => _$createComponent(Status, _$mergeProps(status))
    }));

    return _el$;
  })();
};

const Status = status => {
  return (() => {
    const _el$2 = _tmpl$2.cloneNode(true),
          _el$3 = _el$2.firstChild,
          _el$4 = _el$3.nextSibling;

    _el$2.$$click = () => status.onClick?.();

    _$insert(_el$3, () => _$createComponent(Icon, {
      "class": "icon1",

      get icon() {
        return status.icon1;
      }

    }), null);

    _$insert(_el$3, () => _$createComponent(Icon, {
      "class": "icon2",

      get icon() {
        return status.icon2;
      }

    }), null);

    _$insert(_el$4, () => status.description);

    _$effect(_$p => _$classList(_el$2, {
      [status.class ?? ""]: true,
      clickable: !!status.onClick
    }, _$p));

    return _el$2;
  })();
};

_$delegateEvents(["click"]);