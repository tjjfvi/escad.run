import { template as _$template } from "/transpiled/https://esm.sh/solid-js@1.4.3/web_target=esnext.js";
import { insert as _$insert } from "/transpiled/https://esm.sh/solid-js@1.4.3/web_target=esnext.js";
import { createComponent as _$createComponent } from "/transpiled/https://esm.sh/solid-js@1.4.3/web_target=esnext.js";

const _tmpl$ = /*#__PURE__*/_$template(`<span></span>`, 2);

/** @jsxImportSource solid */
import { assertNever } from "/transpiled/https://escad.dev/core/mod.js";
import { NestableSpan } from "/transpiled/https://escad.dev/client/HierarchyView/NestableSpan.js";
export const TreeTextView = props => () => {
  const {
    text
  } = props;
  let wrapperStack = [{
    children: [],
    component: props => () => props.children
  }];

  for (const part of text) {
    const currentWrapper = wrapperStack[wrapperStack.length - 1];

    if (part.kind === "string") {
      currentWrapper.children.push(part.string);
      continue;
    }

    if (part.kind === "ellipsis") {
      currentWrapper.children.push(_$createComponent(NestableSpan, {
        "class": "openable ellipsis",
        onClick: () => {
          part.target.open = true;
        },
        children: "···"
      }));
      continue;
    }

    if (part.kind === "rangeStart") {
      wrapperStack.push({
        children: [],
        component: part.component
      });
      continue;
    }

    if (part.kind === "rangeEnd") {
      const previousWrapper = wrapperStack[wrapperStack.length - 2];
      previousWrapper.children.push(_$createComponent(currentWrapper.component, {
        get children() {
          return currentWrapper.children;
        }

      }));
      wrapperStack.pop();
      continue;
    }

    assertNever(part);
  }

  return (() => {
    const _el$ = _tmpl$.cloneNode(true);

    _$insert(_el$, () => wrapperStack[wrapperStack.length - 1].children);

    return _el$;
  })();
};