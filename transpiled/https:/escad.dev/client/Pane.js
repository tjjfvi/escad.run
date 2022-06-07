import { template as _$template } from "/transpiled/https://esm.sh/solid-js@1.4.3/web.js";
import { delegateEvents as _$delegateEvents } from "/transpiled/https://esm.sh/solid-js@1.4.3/web.js";
import { createComponent as _$createComponent } from "/transpiled/https://esm.sh/solid-js@1.4.3/web.js";
import { classList as _$classList } from "/transpiled/https://esm.sh/solid-js@1.4.3/web.js";
import { effect as _$effect } from "/transpiled/https://esm.sh/solid-js@1.4.3/web.js";
import { insert as _$insert } from "/transpiled/https://esm.sh/solid-js@1.4.3/web.js";

const _tmpl$ = /*#__PURE__*/_$template(`<div class="Pane"><div class="border"></div><div class="side"><span></span></div><div class="content"></div></div>`, 10);

/** @jsxImportSource solid */
import "/transpiled/https://escad.dev/client/stylus/Pane.styl.js";
import { children as resolveChildren, createSignal, Show } from "/transpiled/https://escad.dev/deps/solid.js";
export const Pane = props => {
  const minWidth = () => props.minWidth ?? 100;

  const resizable = () => props.resizable ?? true;

  const [open, setOpen] = createSignal(props.defaultOpen ?? false);
  const [resizing, setResizing] = createSignal(false);
  const [_width, setWidth] = createSignal(props.defaultWidth ?? 500);

  const width = () => Math.max(_width(), minWidth());

  const children = resolveChildren(() => props.children);
  return _$createComponent(Show, {
    get when() {
      return children();
    },

    get children() {
      const _el$ = _tmpl$.cloneNode(true),
            _el$2 = _el$.firstChild,
            _el$3 = _el$2.nextSibling,
            _el$4 = _el$3.firstChild,
            _el$5 = _el$3.nextSibling;

      _el$2.$$mousedown = () => {
        if (!resizable() || !open()) return;
        setResizing(true);

        const mouseMoveHandler = e => {
          if (e.buttons) {
            setWidth(w => w + e.movementX * (props.side === "left" ? 1 : -1));
          } else {
            document.documentElement.removeEventListener("mousemove", mouseMoveHandler);
            setResizing(false);

            if (width() < minWidth()) {
              setWidth(minWidth());
            }
          }
        };

        document.documentElement.addEventListener("mousemove", mouseMoveHandler);
      };

      _el$3.$$click = () => setOpen(o => !o);

      _$insert(_el$4, () => props.name);

      _$insert(_el$5, children);

      _$effect(_p$ => {
        const _v$ = {
          [props.side]: true,
          open: open(),
          resizing: resizing(),
          resizable: resizable() && open(),
          [props.class ?? ""]: true
        },
              _v$2 = `${open() ? width() : 50}px`,
              _v$3 = `${width() - 50}px`;
        _p$._v$ = _$classList(_el$, _v$, _p$._v$);
        _v$2 !== _p$._v$2 && _el$.style.setProperty("max-width", _p$._v$2 = _v$2);
        _v$3 !== _p$._v$3 && _el$5.style.setProperty("min-width", _p$._v$3 = _v$3);
        return _p$;
      }, {
        _v$: undefined,
        _v$2: undefined,
        _v$3: undefined
      });

      return _el$;
    }

  });
};

_$delegateEvents(["mousedown", "click"]);