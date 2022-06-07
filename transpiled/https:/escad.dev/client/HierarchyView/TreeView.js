import { template as _$template } from "/transpiled/https://esm.sh/solid-js@1.4.3/web.js";
import { delegateEvents as _$delegateEvents } from "/transpiled/https://esm.sh/solid-js@1.4.3/web.js";
import { className as _$className } from "/transpiled/https://esm.sh/solid-js@1.4.3/web.js";
import { effect as _$effect } from "/transpiled/https://esm.sh/solid-js@1.4.3/web.js";
import { addEventListener as _$addEventListener } from "/transpiled/https://esm.sh/solid-js@1.4.3/web.js";
import { insert as _$insert } from "/transpiled/https://esm.sh/solid-js@1.4.3/web.js";
import { createComponent as _$createComponent } from "/transpiled/https://esm.sh/solid-js@1.4.3/web.js";

const _tmpl$ = /*#__PURE__*/_$template(`<div class="TreeNode"></div>`, 2),
      _tmpl$2 = /*#__PURE__*/_$template(`<div class="block"></div>`, 2),
      _tmpl$3 = /*#__PURE__*/_$template(`<div class="line"><div></div></div>`, 4);

/** @jsxImportSource solid */
import { createMemo, For } from "/transpiled/https://escad.dev/deps/solid.js";
import { flattenTree } from "/transpiled/https://escad.dev/client/HierarchyView/flattenTree.js";
import { finalizeTree } from "/transpiled/https://escad.dev/client/HierarchyView/finalizeTree.js";
import { TreeTextView } from "/transpiled/https://escad.dev/client/HierarchyView/TreeTextView.js";
const arrowWidth = 25;
const characterWidth = 10;
export const TreeView = props => {
  const innerWidth = () => props.width - arrowWidth;

  const maxLength = () => innerWidth() / characterWidth;

  const joinedCollapsedTree = createMemo(() => finalizeTree(flattenTree(props.tree, maxLength())));
  const expandableSections = createMemo(() => getOpenableSections(props.tree, maxLength()));
  return (() => {
    const _el$ = _tmpl$.cloneNode(true);

    _$insert(_el$, _$createComponent(For, {
      get each() {
        return joinedCollapsedTree();
      },

      children: (part, i) => () => {
        const prev = joinedCollapsedTree()[i() - 1];
        const next = joinedCollapsedTree()[i() + 1];

        if (part.kind === "block") {
          return (() => {
            const _el$2 = _tmpl$2.cloneNode(true);

            _$insert(_el$2, () => part.children.map((y, i) => _$createComponent(TreeView, {
              get width() {
                return innerWidth();
              },

              tree: y
            })));

            return _el$2;
          })();
        }

        if (next && next.kind === "block") {
          return _$createComponent(Line, {
            arrowState: "open",

            get text() {
              return part.text;
            },

            onClick: () => next.state.open = false
          });
        }

        const sectionsSplitInd = prev?.kind === "block" ? expandableSections().findIndex(v => v.state === prev.state) + 1 : 0;
        const relevantSections = expandableSections().slice(sectionsSplitInd);

        if (!relevantSections.length) {
          return _$createComponent(Line, {
            arrowState: "leaf",

            get text() {
              return part.text;
            }

          });
        }

        return _$createComponent(Line, {
          arrowState: "closed",

          get text() {
            return part.text;
          },

          onClick: () => {
            relevantSections.forEach(x => x.state.open = true);
          }
        });
      }
    }));

    return _el$;
  })();
};

const Line = props => (() => {
  const _el$3 = _tmpl$3.cloneNode(true),
        _el$4 = _el$3.firstChild;

  _$addEventListener(_el$3, "dblclick", props.onClick, true);

  _$addEventListener(_el$4, "click", props.onClick, true);

  _$insert(_el$3, _$createComponent(TreeTextView, {
    get text() {
      return props.text;
    }

  }), null);

  _$effect(() => _$className(_el$4, "arrow " + props.arrowState));

  return _el$3;
})();

function getOpenableSections(tree, maxLength) {
  return flattenTree(tree, maxLength, false).filter(part => part.kind === "block").filter(part => part.children.length > 0);
}

_$delegateEvents(["dblclick", "click"]);