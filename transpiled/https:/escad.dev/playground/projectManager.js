import { createEventEmitter } from "/transpiled/https://escad.dev/messages/mod.js";
export function createProjectManager(host) {
    let projects = host.initialProjectList;
    let curProject = projects[0] ??= {
        type: "local",
        id: uuid(),
        name: "untitled",
    };
    let code = "";
    const events = createEventEmitter();
    setCurProject(curProject);
    return {
        getProjects: () => projects,
        getCurProject: () => curProject,
        setCurProject,
        createProject,
        deleteProject,
        renameProject,
        getCode: () => code,
        setCode,
        events,
    };
    function setCode(value, fork = true) {
        code = value;
        if (projects[0] !== curProject) {
            projects.splice(projects.indexOf(curProject), 1);
            projects.unshift(curProject);
            if (curProject.type === "local") {
                onProjectsUpdate();
            }
        }
        events.emit("codeChange", code);
        if (curProject.type === "local") {
            host.setCode(curProject.id, code);
        }
        else if (fork) {
            let fork = {
                type: "local",
                id: uuid(),
                name: curProject.forkName,
            };
            projects.unshift(fork);
            onProjectsUpdate();
            host.setCode(fork.id, code);
            setCurProject(fork);
        }
    }
    function setCurProject(projectId) {
        curProject = projectId;
        onProjectsUpdate();
        code = host.getCode(curProject);
        events.emit("codeChange", code);
    }
    function deleteProject(projectId) {
        projects.splice(projects.indexOf(projectId), 1);
        if (projects.length === 0) {
            createProject();
        }
        else if (projectId === curProject) {
            setCurProject(projects[0]);
        }
        else {
            onProjectsUpdate();
        }
    }
    function createProject() {
        const projectId = {
            type: "local",
            id: uuid(),
            name: "untitled",
        };
        projects.unshift(projectId);
        setCurProject(projectId);
        onProjectsUpdate();
    }
    function onProjectsUpdate() {
        host.setProjectList(projects);
        events.emit("projectsChange");
    }
    function renameProject(projectId, name) {
        if (projectId.type === "remote") {
            throw new Error("Can only rename local projects");
        }
        projectId.name = name;
        onProjectsUpdate();
    }
}
function uuid() {
    // @ts-ignore
    return crypto.randomUUID();
}
