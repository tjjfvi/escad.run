import { template as _$template } from "/transpiled/https://esm.sh/solid-js@1.4.3/web_target=esnext.js";
import { className as _$className } from "/transpiled/https://esm.sh/solid-js@1.4.3/web_target=esnext.js";
import { effect as _$effect } from "/transpiled/https://esm.sh/solid-js@1.4.3/web_target=esnext.js";
import { insert as _$insert } from "/transpiled/https://esm.sh/solid-js@1.4.3/web_target=esnext.js";
import { createComponent as _$createComponent } from "/transpiled/https://esm.sh/solid-js@1.4.3/web_target=esnext.js";

const _tmpl$ = /*#__PURE__*/_$template(`<div class="ParametersPane"></div>`, 2),
      _tmpl$2 = /*#__PURE__*/_$template(`<div class="Parameter none"><span>Cannot display parameter</span></div>`, 4),
      _tmpl$3 = /*#__PURE__*/_$template(`<div></div>`, 2),
      _tmpl$4 = /*#__PURE__*/_$template(`<div class="NameDesc"><span class="name"></span><span class="desc"></span></div>`, 6);

/** @jsxImportSource solid */
import "/transpiled/https://escad.dev/client/stylus/ParametersPane.styl.js";
import { For } from "/transpiled/https://escad.dev/deps/solid.js";
import { IdView } from "/transpiled/https://escad.dev/client/IdView.js";
import { Loading } from "/transpiled/https://escad.dev/client/Loading.js";
import { fetchArtifact } from "/transpiled/https://escad.dev/client/fetchArtifact.js";
import { MemoShow } from "/transpiled/https://escad.dev/client/MemoShow.js";
export const ParametersPane = props => {
  const paramDef = fetchArtifact(props.artifactManager, () => props.paramDefHash);

  const params = () => props.params ?? paramDef().defaultValue;

  return _$createComponent(MemoShow, {
    get when() {
      return paramDef();
    },

    get fallback() {
      return _$createComponent(Loading, {});
    },

    children: paramDef => (() => {
      const _el$ = _tmpl$.cloneNode(true);

      _$insert(_el$, _$createComponent(For, {
        get each() {
          return Object.keys(paramDef().children);
        },

        children: key => {
          return _$createComponent(ParameterView, {
            get parameter() {
              return paramDef().children[key];
            },

            get value() {
              return params()[key];
            },

            setValue: value => props.setParams({ ...params(),
              [key]: value
            })
          });
        }
      }));

      return _el$;
    })()
  });
};
const parameterRegistrations = new Map();
export const registerParameter = async registration => {
  if (parameterRegistrations.has(registration.id)) {
    throw new Error(`Duplicate ParameterRegistration for id ${registration.id}`);
  }

  parameterRegistrations.set(registration.id, registration);
};
export const ParameterView = props => {
  const parameterRegistration = parameterRegistrations.get(props.parameter.type);

  if (!parameterRegistration) {
    return (() => {
      const _el$2 = _tmpl$2.cloneNode(true),
            _el$3 = _el$2.firstChild;

      _$insert(_el$2, _$createComponent(IdView, {
        get id() {
          return props.parameter.type;
        }

      }), null);

      return _el$2;
    })();
  }

  return (() => {
    const _el$4 = _tmpl$3.cloneNode(true);

    _$insert(_el$4, _$createComponent(parameterRegistration.component, props));

    _$effect(() => _$className(_el$4, "Parameter " + (parameterRegistration.class ?? "")));

    return _el$4;
  })();
};
export const NameDesc = ({
  parameter
}) => (() => {
  const _el$5 = _tmpl$4.cloneNode(true),
        _el$6 = _el$5.firstChild,
        _el$7 = _el$6.nextSibling;

  _$insert(_el$6, () => parameter.name);

  _$insert(_el$7, () => parameter.desc);

  return _el$5;
})();