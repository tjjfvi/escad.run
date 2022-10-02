import { template as _$template } from "/transpiled/https://esm.sh/solid-js@1.4.3/web_target=esnext.js";
import { delegateEvents as _$delegateEvents } from "/transpiled/https://esm.sh/solid-js@1.4.3/web_target=esnext.js";
import { effect as _$effect } from "/transpiled/https://esm.sh/solid-js@1.4.3/web_target=esnext.js";
import { createComponent as _$createComponent } from "/transpiled/https://esm.sh/solid-js@1.4.3/web_target=esnext.js";

const _tmpl$ = /*#__PURE__*/_$template(`<div class="row new">new</div>`, 2),
      _tmpl$2 = /*#__PURE__*/_$template(`<input class="row">`, 1);

/** @jsxImportSource solid */
import "/transpiled/https://escad.dev/playground/stylus/ProjectPane.styl.js";
import { createEffect, createSignal, For, onCleanup } from "/transpiled/https://escad.dev/deps/solid.js";
import { Pane } from "/transpiled/https://escad.dev/client/Pane.js";
export const ProjectPane = props => {
  const [projects, setProjects] = createSignal(props.projectManager.getProjects(), {
    equals: false
  });
  const [curProject, setCurProject] = createSignal(props.projectManager.getCurProject());
  createEffect(() => {
    onCleanup(props.projectManager.events.on("projectsChange", () => {
      setProjects(props.projectManager.getProjects());
      setCurProject(props.projectManager.getCurProject());
    }));
  });
  return _$createComponent(Pane, {
    name: "Projects",
    "class": "ProjectPane",
    side: "left",
    defaultWidth: 300,
    resizable: false,
    defaultOpen: false,

    get children() {
      return [_$createComponent(For, {
        get each() {
          return projects();
        },

        children: project => {
          const isSelected = () => project === curProject();

          const titleEditable = () => isSelected() && project.type === "local";

          return (() => {
            const _el$2 = _tmpl$2.cloneNode(true);

            _el$2.$$click = e => {
              if (!isSelected()) {
                e.preventDefault();
                props.projectManager.setCurProject(project);
              }
            };

            _el$2.addEventListener("focus", e => {
              if (!isSelected()) {
                e.currentTarget.blur();
              }
            });

            _el$2.$$contextmenu = e => {
              e.preventDefault();
              props.projectManager.deleteProject(project);
            };

            _el$2.addEventListener("change", e => props.projectManager.renameProject(project, e.currentTarget.value));

            _$effect(_p$ => {
              const _v$ = !!isSelected(),
                    _v$2 = !titleEditable(),
                    _v$3 = project.name;

              _v$ !== _p$._v$ && _el$2.classList.toggle("selected", _p$._v$ = _v$);
              _v$2 !== _p$._v$2 && (_el$2.readOnly = _p$._v$2 = _v$2);
              _v$3 !== _p$._v$3 && (_el$2.value = _p$._v$3 = _v$3);
              return _p$;
            }, {
              _v$: undefined,
              _v$2: undefined,
              _v$3: undefined
            });

            return _el$2;
          })();
        }
      }), (() => {
        const _el$ = _tmpl$.cloneNode(true);

        _el$.$$click = () => {
          props.projectManager.createProject();
        };

        return _el$;
      })()];
    }

  });
};

_$delegateEvents(["click", "contextmenu"]);