import { template as _$template } from "/transpiled/https://esm.sh/solid-js@1.4.3/web.js";
import { className as _$className } from "/transpiled/https://esm.sh/solid-js@1.4.3/web.js";
import { effect as _$effect } from "/transpiled/https://esm.sh/solid-js@1.4.3/web.js";
import { insert as _$insert } from "/transpiled/https://esm.sh/solid-js@1.4.3/web.js";
import { createComponent as _$createComponent } from "/transpiled/https://esm.sh/solid-js@1.4.3/web.js";

const _tmpl$ = /*#__PURE__*/_$template(`<div class="LogsPane"><div></div></div>`, 4),
      _tmpl$2 = /*#__PURE__*/_$template(`<div class="Log loading"></div>`, 2),
      _tmpl$3 = /*#__PURE__*/_$template(`<div class="Log none"><span>Cannot display log</span></div>`, 4),
      _tmpl$4 = /*#__PURE__*/_$template(`<div></div>`, 2);

/** @jsxImportSource solid */
import "/transpiled/https://escad.dev/client/stylus/LogsPane.styl.js";
import { IdView } from "/transpiled/https://escad.dev/client/IdView.js";
import { createEffect, createSignal, For, onCleanup } from "/transpiled/https://escad.dev/deps/solid.js";
import { Loading } from "/transpiled/https://escad.dev/client/Loading.js";
import { fetchArtifact } from "/transpiled/https://escad.dev/client/fetchArtifact.js";
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
  const logSig = fetchArtifact(props.artifactManager, () => props.logHash);
  return () => {
    const log = logSig();

    if (!log) {
      return (() => {
        const _el$3 = _tmpl$2.cloneNode(true);

        _$insert(_el$3, _$createComponent(Loading, {}));

        return _el$3;
      })();
    }

    const registration = logTypeRegistrations.get(log.type);

    if (!registration) {
      return (() => {
        const _el$4 = _tmpl$3.cloneNode(true),
              _el$5 = _el$4.firstChild;

        _$insert(_el$4, _$createComponent(IdView, {
          get id() {
            return log.type;
          }

        }), null);

        return _el$4;
      })();
    }

    return (() => {
      const _el$6 = _tmpl$4.cloneNode(true);

      _$insert(_el$6, _$createComponent(registration.component, {
        log
      }));

      _$effect(() => _$className(_el$6, "Log " + (registration.class ?? "")));

      return _el$6;
    })();
  };
};