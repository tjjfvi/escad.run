import { template as _$template } from "/transpiled/https://esm.sh/solid-js@1.4.3/web_target=esnext.js";
import { className as _$className } from "/transpiled/https://esm.sh/solid-js@1.4.3/web_target=esnext.js";
import { effect as _$effect } from "/transpiled/https://esm.sh/solid-js@1.4.3/web_target=esnext.js";
import { insert as _$insert } from "/transpiled/https://esm.sh/solid-js@1.4.3/web_target=esnext.js";
import { createComponent as _$createComponent } from "/transpiled/https://esm.sh/solid-js@1.4.3/web_target=esnext.js";

const _tmpl$ = /*#__PURE__*/_$template(`<div class="LogsPane"><div></div></div>`, 4),
      _tmpl$2 = /*#__PURE__*/_$template(`<div class="Log loading"></div>`, 2),
      _tmpl$3 = /*#__PURE__*/_$template(`<div class="Log none"><span>Cannot display log</span></div>`, 4),
      _tmpl$4 = /*#__PURE__*/_$template(`<div></div>`, 2);

/** @jsxImportSource solid */
import "/transpiled/https://escad.dev/client/stylus/LogsPane.styl.js";
import { IdView } from "/transpiled/https://escad.dev/client/IdView.js";
import { createEffect, createSignal, For, onCleanup, Show } from "/transpiled/https://escad.dev/deps/solid.js";
import { Loading } from "/transpiled/https://escad.dev/client/Loading.js";
import { fetchArtifact } from "/transpiled/https://escad.dev/client/fetchArtifact.js";
import { MemoShow } from "/transpiled/https://escad.dev/client/MemoShow.js";
export const LogsPane = props => {
  const [logs, setLogs] = createSignal([], {
    equals: false
  });
  createEffect(() => onCleanup(props.messenger.on("log", log => {
    if (!log) setLogs([]);else {
      setLogs(logs => {
        logs.push(log);
        return logs;
      });
    }
  })));
  return (() => {
    const _el$ = _tmpl$.cloneNode(true),
          _el$2 = _el$.firstChild;

    _$insert(_el$, _$createComponent(For, {
      get each() {
        return logs();
      },

      children: logHash => _$createComponent(LogView, {
        get artifactManager() {
          return props.artifactManager;
        },

        logHash: logHash
      })
    }), _el$2);

    return _el$;
  })();
};
const logTypeRegistrations = new Map();
export const registerLogType = async registration => {
  if (logTypeRegistrations.has(registration.id)) {
    throw new Error(`Duplicate LogTypeRegistration for id ${registration.id}`);
  }

  logTypeRegistrations.set(registration.id, registration);
};

const LogView = props => {
  const log = fetchArtifact(props.artifactManager, () => props.logHash);
  return _$createComponent(MemoShow, {
    get when() {
      return log();
    },

    get fallback() {
      return (() => {
        const _el$3 = _tmpl$2.cloneNode(true);

        _$insert(_el$3, _$createComponent(Loading, {}));

        return _el$3;
      })();
    },

    children: log => _$createComponent(Show, {
      get when() {
        return logTypeRegistrations.get(log().type);
      },

      get fallback() {
        return (() => {
          const _el$4 = _tmpl$3.cloneNode(true),
                _el$5 = _el$4.firstChild;

          _$insert(_el$4, _$createComponent(IdView, {
            get id() {
              return log().type;
            }

          }), null);

          return _el$4;
        })();
      },

      children: registration => (() => {
        const _el$6 = _tmpl$4.cloneNode(true);

        _$insert(_el$6, _$createComponent(registration.component, {
          get log() {
            return log();
          }

        }));

        _$effect(() => _$className(_el$6, "Log " + (registration.class ?? "")));

        return _el$6;
      })()
    })
  });
};