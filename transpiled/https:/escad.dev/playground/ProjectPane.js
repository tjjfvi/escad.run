import "/transpiled/https://escad.dev/playground/stylus/ProjectPane.styl.js";
import React from "/transpiled/https://escad.dev/deps/react.js";
import { Pane } from "/transpiled/https://escad.dev/client/Pane.js";
export const ProjectPane = ({ projectManager }) => {
    let [, setState] = React.useState({});
    React.useEffect(() => {
        return projectManager.events.on("projectsChange", () => setState({}));
    }, []);
    return (React.createElement(Pane, { name: "Projects", left: true, defaultWidth: 300, resizable: false, defaultOpen: false },
        projectManager.getProjects().map((project) => {
            const isSelected = project === projectManager.getCurProject();
            const titleEditable = isSelected && project.type === "local";
            return (React.createElement("input", { key: project.type === "local" ? project.id : project.url, className: isSelected ? "selected row" : "row", readOnly: !titleEditable, value: project.name, onChange: (e) => projectManager.renameProject(project, e.target.value), onAuxClick: () => projectManager.deleteProject(project), onClick: (e) => {
                    if (!isSelected) {
                        e.preventDefault();
                        projectManager.setCurProject(project);
                    }
                } }));
        }),
        React.createElement("div", { onClick: () => {
                projectManager.createProject();
            }, className: "row new" }, "new")));
};
