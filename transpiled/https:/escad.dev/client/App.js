import { createComponent as _$createComponent } from "/transpiled/https://esm.sh/solid-js@1.4.3/web_target=esnext.js";
import { memo as _$memo } from "/transpiled/https://esm.sh/solid-js@1.4.3/web_target=esnext.js";

/** @jsxImportSource solid */
import { createEffect, createSignal, onCleanup, untrack } from "/transpiled/https://escad.dev/deps/solid.js";
import { DisplayPane } from "/transpiled/https://escad.dev/client/DisplayPane.js";
import { HierarchyPane } from "/transpiled/https://escad.dev/client/HierarchyPane.js";
import { LogsPane } from "/transpiled/https://escad.dev/client/LogsPane.js";
import { Pane } from "/transpiled/https://escad.dev/client/Pane.js";
import { ParametersPane } from "/transpiled/https://escad.dev/client/ParametersPane.js";
import { Statuses } from "/transpiled/https://escad.dev/client/Status.js";
export const App = props => {
  const [params, setParams] = createSignal(null);
  const [info, setInfo] = createSignal();
  createEffect(() => {
    onCleanup(props.messenger.on("info", setInfo));
    onCleanup(props.messenger.on("changeObserved", () => {
      props.messenger.run(untrack(params));
    }));
  });
  createEffect(() => {
    props.messenger.run(params());
  });
  const [productHashes, setProductHashes] = createSignal();
  return [_$createComponent(Pane, {
    side: "left",
    name: "Parameters",

    get children() {
      return _$createComponent(ParametersPane, {
        get artifactManager() {
          return props.artifactManager;
        },

        get paramDefHash() {
          return info()?.paramDef ?? null;
        },

        get params() {
          return params();
        },

        setParams: setParams
      });
    }

  }), _$createComponent(DisplayPane, {
    get conversionRegistry() {
      return props.conversionRegistry;
    },

    get artifactManager() {
      return props.artifactManager;
    },

    get productHashes() {
      return productHashes();
    },

    get exportTypes() {
      return info()?.exportTypes ?? [];
    }

  }), _$createComponent(Pane, {
    side: "right",
    name: "Hierarchy",

    get children() {
      return _$createComponent(HierarchyPane, {
        get artifactManager() {
          return props.artifactManager;
        },

        get messenger() {
          return props.messenger;
        },

        get hierarchyHash() {
          return info()?.hierarchy ?? null;
        },

        setProductHashes: setProductHashes
      });
    }

  }), _$createComponent(Pane, {
    side: "right",
    name: "Logs",

    get children() {
      return _$createComponent(LogsPane, {
        get artifactManager() {
          return props.artifactManager;
        },

        get messenger() {
          return props.messenger;
        }

      });
    }

  }), _$createComponent(Statuses, {
    get statuses() {
      return props.statuses;
    }

  })];
};