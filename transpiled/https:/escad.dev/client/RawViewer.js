import { template as _$template } from "/transpiled/https://esm.sh/solid-js@1.4.3/web_target=esnext.js";
import { insert as _$insert } from "/transpiled/https://esm.sh/solid-js@1.4.3/web_target=esnext.js";
import { createComponent as _$createComponent } from "/transpiled/https://esm.sh/solid-js@1.4.3/web_target=esnext.js";

const _tmpl$ = /*#__PURE__*/_$template(`<div class="RawViewer"></div>`, 2),
      _tmpl$2 = /*#__PURE__*/_$template(`<div class="inner"></div>`, 2);

/** @jsxImportSource solid */
import "/transpiled/https://escad.dev/client/stylus/RawViewer.styl.js";
import { Hierarchy } from "/transpiled/https://escad.dev/core/mod.js";
import { UnknownProductType } from "/transpiled/https://escad.dev/core/mod.js";
import { createResource } from "/transpiled/https://escad.dev/deps/solid.js";
import { registerViewer } from "/transpiled/https://escad.dev/client/DisplayPane.js";
import { HierarchyView } from "/transpiled/https://escad.dev/client/HierarchyView/mod.js";
import { Loading } from "/transpiled/https://escad.dev/client/Loading.js";
import { MemoShow } from "/transpiled/https://escad.dev/client/MemoShow.js";
registerViewer({
  name: "Raw",
  productType: UnknownProductType.create(),
  component: props => {
    const [hierarchy] = createResource(() => props.productPromises, async productPromises => await Hierarchy.from((await Promise.all(productPromises)).map(p => p.product), true));
    return (() => {
      const _el$ = _tmpl$.cloneNode(true);

      _$insert(_el$, _$createComponent(MemoShow, {
        get when() {
          return hierarchy();
        },

        get fallback() {
          return _$createComponent(Loading, {});
        },

        children: hierarchy => (() => {
          const _el$2 = _tmpl$2.cloneNode(true);

          _$insert(_el$2, _$createComponent(HierarchyView, {
            get hierarchy() {
              return hierarchy();
            }

          }));

          return _el$2;
        })()
      }));

      return _el$;
    })();
  },
  weight: 0
});