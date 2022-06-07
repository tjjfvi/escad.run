import { template as _$template } from "/transpiled/https://esm.sh/solid-js@1.4.3/web.js";
import { insert as _$insert } from "/transpiled/https://esm.sh/solid-js@1.4.3/web.js";

const _tmpl$ = /*#__PURE__*/_$template(`<span></span>`, 2);

/** @jsxImportSource solid */
import "/transpiled/https://escad.dev/client/stylus/StringLog.styl.js";
import { StringLog } from "/transpiled/https://escad.dev/core/mod.js";
import { registerLogType } from "/transpiled/https://escad.dev/client/LogsPane.js";

const StringLogView = ({
  log
}) => (() => {
  const _el$ = _tmpl$.cloneNode(true);

  _$insert(_el$, () => log.message);

  return _el$;
})();

registerLogType({
  id: StringLog.id,
  class: "StringLog",
  component: StringLogView
});