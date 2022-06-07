import { template as _$template } from "/transpiled/https://esm.sh/solid-js@1.4.3/web.js";
import { delegateEvents as _$delegateEvents } from "/transpiled/https://esm.sh/solid-js@1.4.3/web.js";
import { classList as _$classList } from "/transpiled/https://esm.sh/solid-js@1.4.3/web.js";
import { effect as _$effect } from "/transpiled/https://esm.sh/solid-js@1.4.3/web.js";
import { insert as _$insert } from "/transpiled/https://esm.sh/solid-js@1.4.3/web.js";

const _tmpl$ = /*#__PURE__*/_$template(`<span></span>`, 2);

/** @jsxImportSource solid */
import { createSignal } from "/transpiled/https://escad.dev/deps/solid.js";

/**
 * Correctly handles hover & click logic when nested
 */
export const NestableSpan = props => {
  const [hovered, setHovered] = createSignal(false);
  return (() => {
    const _el$ = _tmpl$.cloneNode(true);

    _el$.addEventListener("mouseleave", () => setHovered(false));

    _el$.$$mouseover = event => {
      const newHovered = !handledMoverOverEvents.has(event);
      setHovered(newHovered);
      handledMoverOverEvents.add(event);
    };

    _el$.$$click = event => {
      if (!props.onClick) return;
      event.stopPropagation();
      props.onClick(event);
    };

    _$insert(_el$, () => props.children);

    _$effect(_$p => _$classList(_el$, {
      [props.class ?? ""]: true,
      hover: hovered()
    }, _$p));

    return _el$;
  })();
};
const handledMoverOverEvents = new WeakSet();

_$delegateEvents(["click", "mouseover"]);