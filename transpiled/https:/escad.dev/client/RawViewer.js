import { template as _$template } from "/transpiled/https://esm.sh/solid-js@1.4.3/web.js";
import { insert as _$insert } from "/transpiled/https://esm.sh/solid-js@1.4.3/web.js";
import { createComponent as _$createComponent } from "/transpiled/https://esm.sh/solid-js@1.4.3/web.js";

const _tmpl$ = /*#__PURE__*/_$template(`<div class="RawViewer"></div>`, 2),
      _tmpl$2 = /*#__PURE__*/_$template(`<div class="RawViewer"><div class="inner"></div></div>`, 4);

/** @jsxImportSource solid */
import "/transpiled/https://escad.dev/client/stylus/RawViewer.styl.js";
import { Hierarchy } from "/transpiled/https://escad.dev/core/mod.js";
import { UnknownProductType } from "/transpiled/https://escad.dev/core/mod.js";
import { createResource } from "/transpiled/https://escad.dev/deps/solid.js";
import { registerViewer } from "/transpiled/https://escad.dev/client/DisplayPane.js";
import { HierarchyView } from "/transpiled/https://escad.dev/client/HierarchyView/mod.js";
import { Loading } from "/transpiled/https://escad.dev/client/Loading.js";
registerViewer({
  type: "Viewer",
  name: "Raw",
  productType: UnknownProductType.create(),
  component: props => {
    const [hierarchySig] = createResource(() => props.productPromises, async productPromises => await Hierarchy.from((await Promise.all(productPromises)).map(p => p.product), true));
    return () => {
      const hierarchy = hierarchySig();

      if (!hierarchy) {
        return (() => {
          const _el$ = _tmpl$.cloneNode(true);

          _$insert(_el$, _$createComponent(Loading, {}));

          return _el$;
        })();
      }

      return (() => {
        const _el$2 = _tmpl$2.cloneNode(true),
              _el$3 = _el$2.firstChild;

        _$insert(_el$3, _$createComponent(HierarchyView, {
          hierarchy: hierarchy
        }));

        return _el$2;
      })();
    };
  },
  weight: 0
});