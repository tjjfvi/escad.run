import { createComponent as _$createComponent } from "/transpiled/https://esm.sh/solid-js@1.4.3/web_target=esnext.js";

/** @jsxImportSource solid */
import "/transpiled/https://escad.dev/client/stylus/HierarchyLog.styl.js";
import { HierarchyLog } from "/transpiled/https://escad.dev/core/mod.js";
import { HierarchyView } from "/transpiled/https://escad.dev/client/HierarchyView/mod.js";
import { registerLogType } from "/transpiled/https://escad.dev/client/LogsPane.js";

const HierarchyLogView = ({
  log
}) => _$createComponent(HierarchyView, {
  get hierarchy() {
    return log.hierarchy;
  }

});

registerLogType({
  id: HierarchyLog.id,
  class: "HierarchyLog",
  component: HierarchyLogView
});