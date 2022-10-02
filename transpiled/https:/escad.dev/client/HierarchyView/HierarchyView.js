import { template as _$template } from "/transpiled/https://esm.sh/solid-js@1.4.3/web_target=esnext.js";
import { insert as _$insert } from "/transpiled/https://esm.sh/solid-js@1.4.3/web_target=esnext.js";
import { createComponent as _$createComponent } from "/transpiled/https://esm.sh/solid-js@1.4.3/web_target=esnext.js";

const _tmpl$ = /*#__PURE__*/_$template(`<div></div>`, 2);

/** @jsxImportSource solid */
import { ResizeSensor } from "/transpiled/https://escad.dev/deps/css-element-queries.js";
import { TreeView } from "/transpiled/https://escad.dev/client/HierarchyView/TreeView.js";
import { hierarchyToTree } from "/transpiled/https://escad.dev/client/HierarchyView/hierarchyToTree.js";
import { httDetailedEngine } from "/transpiled/https://escad.dev/client/HierarchyView/httDetailedEngine.js";
import { createRenderEffect, createSignal, onCleanup } from "/transpiled/https://escad.dev/deps/solid.js";
export const HierarchyView = props => {
  const [width, setWidth] = createSignal(0);
  const stateMemo = new Map();

  const el = (() => {
    const _el$ = _tmpl$.cloneNode(true);

    _$insert(_el$, _$createComponent(TreeView, {
      get width() {
        return width();
      },

      get tree() {
        return hierarchyToTree(props.engine ?? httDetailedEngine, props.hierarchy, stateMemo, props.Selectable ?? DummySelectable);
      }

    }));

    return _el$;
  })();

  createRenderEffect(() => {
    const sensor = new ResizeSensor(el, () => {
      setWidth(el.clientWidth);
    });
    onCleanup(() => sensor.detach());
  });
  return el;
};
export const DummySelectable = props => () => props.children;