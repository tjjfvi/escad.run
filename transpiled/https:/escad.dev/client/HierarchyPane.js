import { template as _$template } from "/transpiled/https://esm.sh/solid-js@1.4.3/web_target=esnext.js";
import { insert as _$insert } from "/transpiled/https://esm.sh/solid-js@1.4.3/web_target=esnext.js";
import { createComponent as _$createComponent } from "/transpiled/https://esm.sh/solid-js@1.4.3/web_target=esnext.js";

const _tmpl$ = /*#__PURE__*/_$template(`<div class="HierarchyPane"></div>`, 2);

/** @jsxImportSource solid */
import "/transpiled/https://escad.dev/client/stylus/HierarchyPane.styl.js";
import { Hash } from "/transpiled/https://escad.dev/core/mod.js";
import { createEffect, createMemo, createSignal, Show } from "/transpiled/https://escad.dev/deps/solid.js";
import { HierarchyView, httDetailedEngine, httOutlineEngine, NestableSpan } from "/transpiled/https://escad.dev/client/HierarchyView/mod.js";
import { Dropdown } from "/transpiled/https://escad.dev/client/Dropdown.js";
import { Loading } from "/transpiled/https://escad.dev/client/Loading.js";
import { fetchArtifact } from "/transpiled/https://escad.dev/client/fetchArtifact.js";
import { getHierarchyPath } from "/transpiled/https://escad.dev/client/HierarchyPath.js";
import { resolveHierarchySelection } from "/transpiled/https://escad.dev/client/HierarchySelection.js";
export const HierarchyPane = props => {
  const [engine, setEngine] = createSignal(httOutlineEngine);
  const [selection, setSelection] = createSignal([{
    path: [],
    type: "include"
  }]);
  const hierarchySig = fetchArtifact(props.artifactManager, () => props.hierarchyHash);
  const resolvedSelectionSig = createMemo(() => {
    const hierarchy = hierarchySig();
    if (!hierarchy) return null;
    return resolveHierarchySelection(selection(), hierarchy);
  });
  createEffect(() => {
    const resolvedSelection = resolvedSelectionSig();

    if (!resolvedSelection) {
      props.setProductHashes(undefined);
      return;
    }

    const hashes = [];

    for (const [hash, include] of resolvedSelection) {
      if (include) hashes.push(hash);
    }

    props.setProductHashes(hashes);
  });
  return _$createComponent(Show, {
    get when() {
      return !hierarchySig.loading;
    },

    get fallback() {
      return _$createComponent(Loading, {});
    },

    get children() {
      return _$createComponent(Show, {
        get when() {
          return hierarchySig();
        },

        fallback: null,

        get children() {
          const _el$ = _tmpl$.cloneNode(true);

          _$insert(_el$, _$createComponent(Dropdown, {
            get value() {
              return engine();
            },

            setValue: setEngine,
            options: {
              "Outline": httOutlineEngine,
              "Detailed": httDetailedEngine
            }
          }), null);

          _$insert(_el$, _$createComponent(HierarchyView, {
            get hierarchy() {
              return hierarchySig();
            },

            get engine() {
              return engine();
            },

            Selectable: Selectable
          }), null);

          return _el$;
        }

      });
    }

  });

  function Selectable(props) {
    return _$createComponent(NestableSpan, {
      get ["class"]() {
        return "selectable " + getSelectionClass();
      },

      onClick: event => {
        if (event.ctrlKey || event.metaKey || event.altKey) {
          setSelection(x => [...x, {
            type: event.altKey ? "exclude" : "include",
            path: props.path
          }]);
        } else {
          setSelection([{
            type: "include",
            path: props.path
          }]);
        }
      },

      get children() {
        return props.children;
      }

    });

    function getSelectionClass() {
      const {
        path
      } = props;
      const hierarchy = hierarchySig();
      if (!hierarchy) return "";
      const linkedProducts = getHierarchyPath(path, hierarchy)?.linkedProducts;
      if (!linkedProducts) return;
      const resolvedSelection = resolvedSelectionSig();
      if (!resolvedSelection) return;
      const selectionStates = linkedProducts.map(x => resolvedSelection.get(x));
      const directly = selection().findLast(x => Hash.equal(x.path, path))?.type ?? null;
      const someNull = selectionStates.some(x => x == null);
      const included = selectionStates.some(x => x === true);
      const excluded = selectionStates.some(x => x === false);
      return `directly-${directly} someNull-${someNull} included-${included} excluded-${excluded}`;
    }
  }
};