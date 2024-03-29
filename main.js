import { createComponent as _$createComponent } from "/transpiled/https://esm.sh/solid-js@1.4.3/web_target=esnext.js";

/** @jsxImportSource solid */
import "/transpiled/https://escad.dev/client/stylus/index.styl.js";
import "/transpiled/https://escad.dev/client/stylus/fonts.css.js";
import { clientId, put } from "/transpiled/https://escad.dev/playground/swApi.js";
import { render } from "/transpiled/https://escad.dev/deps/solid.js";
import { ProjectPane } from "/transpiled/https://escad.dev/playground/ProjectPane.js";
import { EditorPane } from "/transpiled/https://escad.dev/playground/EditorPane.js";
import { ClientFrame } from "/transpiled/https://escad.dev/playground/ClientFrame.js";
import { brandConnection, createMessenger, serializeConnection, workerConnection } from "/transpiled/https://escad.dev/messaging/mod.js";
import { createServer as _createServer } from "/transpiled/https://escad.dev/server/server.js";
import { getTranspiledUrl } from "/transpiled/https://escad.dev/playground/getTranspiledUrl.js";
import { transformUrl } from "/transpiled/https://escad.dev/server/transformUrl.js";
import { createProjectManager } from "/transpiled/https://escad.dev/playground/projectManager.js";
const escadLocation = location.hostname === "localhost" ? location.origin : "https://escad.dev";
const clientUrl = `/${clientId}/index.html`;
const clientHtmlProm = put(clientUrl, getClientHtml());
const rendererFileUrl = `/${clientId}/renderer.ts`;
const rendererFileProm = put(rendererFileUrl, getRendererContent());
export const transpilerConnection = workerConnection(worker(getTranspiledUrl(transformUrl(escadLocation + "/playground/transpilerWorker.ts"))));
export const transpiler = createMessenger({
  impl: {},
  connection: brandConnection(transpilerConnection, "a")
});
const loadingCode = "/* loading... */";
const projectManager = createProjectManager({
  initialProjectList: await getInitialProjects(),
  setProjectList: projectList => localStorage.setItem("projectList", JSON.stringify(projectList)),
  getCode: projectId => {
    if (projectId.type === "local") {
      return localStorage.getItem(projectId.id) ?? getInitialCode();
    }

    fetch(projectId.url).then(r => r.text()).then(value => {
      if (projectManager.getCurProject() === projectId) {
        projectManager.setCode(value, false);
      }
    });
    return loadingCode;
  },
  setCode: (id, code) => localStorage.setItem(id, code)
});

if (projectManager.getCode() === loadingCode) {
  await projectManager.events.once("codeChange");
}

const firstTranspileMain = transpileMain();
projectManager.events.on("codeChange", value => {
  if (value !== loadingCode) {
    transpileMain();
  }
});
const server = await createServer();
await clientHtmlProm;
const root = document.getElementById("root");

while (root.firstChild) root.removeChild(root.firstChild);

render(() => [_$createComponent(ProjectPane, {
  projectManager: projectManager
}), _$createComponent(EditorPane, {
  projectManager: projectManager
}), _$createComponent(ClientFrame, {
  clientUrl: clientUrl,
  server: server,
  share: share
})], root);

async function getInitialProjects() {
  const projects = JSON.parse(localStorage.getItem("projectList") ?? "[]");

  if (window.location.hash) {
    let hash = window.location.hash.slice(1);
    let url = `https://api.escad.run/${hash}.ts`;
    let ind = projects.findIndex(v => v.type === "remote" && v.url === url);

    if (ind !== -1) {
      projects.splice(ind, 1);
    }

    projects.unshift({
      type: "remote",
      url,
      name: `escad.run/#${hash}`,
      forkName: hash + "-fork"
    });
  }

  return projects;
}

async function createServer() {
  await rendererFileProm;
  await transpiler.transpile(location.origin + rendererFileUrl);
  await firstTranspileMain;
  const server = await _createServer({
    createRendererConnection: () => serializeConnection(workerConnection(worker(getTranspiledUrl(transformUrl(location.origin + rendererFileUrl))))),
    transpilerConnection: brandConnection(transpilerConnection, "b"),
    coreClientUrl: escadLocation + "/playground/client.tsx",
    writeClientRoot: async content => {
      await put(`${clientId}/client.js`, content);
    },
    mapClientPlugins: url => {
      if (url.startsWith(location.origin + "/transpiled/")) {
        return url.slice((location.origin + "/transpiled/").length);
      }

      return url;
    },
    getTranspiledUrl
  });
  server.events.emit("changeObserved", transpiler.on("transpileFinish"));
  return server;
}

async function share() {
  const response = await fetch("https://api.escad.run/create", {
    method: "POST",
    body: JSON.stringify({
      code: projectManager.getCode()
    }),
    headers: {
      "Content-Type": "application/json"
    }
  });

  if (!response.ok) {
    console.error(response);
    return null;
  }

  const {
    short
  } = await response.json();
  window.location;
  history.pushState({}, "Playground", "#" + short);
  return window.location.toString();
}

async function transpileMain() {
  await put(`${clientId}/main.ts`, projectManager.getCode());
  await transpiler.transpile(new URL(`/${clientId}/main.ts`, import.meta.url).toString(), true);
}

function worker(url) {
  return new Worker(url, {
    type: "module"
  });
}

function getClientHtml() {
  return `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta http-equiv="X-UA-Compatible" content="ie=edge">
  <title>escad</title>
</head>
<body>
  <div id="root">
    <style>#l,#l:before,#l:after{box-sizing:border-box}#root,body{background-color:#151820;width:100vw;height:100vh;margin:0;padding:0;display:flex;flex-direction:column;justify-content:center;align-items:center}#l{display:inline-flex;align-items:center;justify-content:center;--size:100px;width:var(--size);height:var(--size);position:absolute}#l:after,#l:before{content:"";display:inline-block;border:calc(var(--size)*.025) solid transparent;border-top-color:#bdc3c7;border-bottom-color:#bdc3c7;border-radius:100%;animation-name:spin;animation-iteration-count:infinite;animation-timing-function:linear;position:absolute}#l:before{animation-duration:2s;width:66.7%;height:66.7%}#l:after{animation-duration:1.333s;animation-direction:reverse;width:44.4%;height:44.4%}@keyframes spin{0%{transform:rotate(0)}100%{transform:rotate(360deg)}}#L{width:300px}</style>
    <svg id="L" style="width:300px" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 2000 2000"><defs><style>.cls-1{fill:#252830;}.cls-1,.cls-2{stroke:#bdc3c7;stroke-linejoin:round;stroke-width:9px;}.cls-1,.cls-2,.cls-3,.cls-4,.cls-5,.cls-6,.cls-7,.cls-8{stroke-linecap:round;}.cls-2,.cls-3,.cls-4,.cls-5,.cls-6,.cls-7,.cls-8{fill:none;}.cls-3,.cls-6{stroke:#0984e3;}.cls-3,.cls-4,.cls-5,.cls-6,.cls-7,.cls-8{stroke-miterlimit:8.192;stroke-width:12px;}.cls-3,.cls-4,.cls-5{opacity:0.5;isolation:isolate;}.cls-4,.cls-7{stroke:#c0392b;}.cls-5,.cls-8{stroke:#2ecc71;}.cls-9{fill:#bdc3c7;}</style></defs><polygon class="cls-1" points="309.341 1398.352 136.738 502.955 998.471 204.741 1860.205 502.955 1687.602 1398.352 998.471 1995.525 309.341 1398.352"/><polygon class="cls-2" points="1000.919 1571.94 572.728 1247.693 506.018 714.752 1000.919 506.048 1495.819 714.752 1429.109 1247.693 1000.919 1571.94"/><polygon class="cls-2" points="1000.919 560.88 567.565 750.285 620.218 1220.277 1000.919 1500.883 1381.619 1220.277 1434.282 750.285 1000.919 560.88"/><line class="cls-2" x1="506.018" y1="714.752" x2="139.185" y2="502.955"/><line class="cls-2" x1="1000.919" y1="1571.94" x2="1000.919" y2="1995.525"/><line class="cls-2" x1="1495.819" y1="714.752" x2="1862.652" y2="502.955"/><line class="cls-3" x1="1000.919" y1="1001.197" x2="1000.919" y2="1362.589"/><line class="cls-4" x1="1001.535" y1="1000.123" x2="1314.521" y2="819.422"/><line class="cls-5" x1="1000.302" y1="1000.123" x2="687.326" y2="819.422"/><polyline class="cls-6" points="1000.919 1001.197 1000.919 560.88 1000.919 506.048 1000.919 204.741 1000.919 5.975"/><polyline class="cls-7" points="1001.535 1000.123 620.218 1220.277 572.728 1247.693 311.788 1398.352 140.08 1498.346"/><polyline class="cls-8" points="1000.302 1000.123 1381.619 1220.277 1429.109 1247.693 1690.049 1398.352 1861.767 1498.346"/><path class="cls-9" d="M1000.919,1000.482h0m0-11.938a11.938,11.938,0,1,0,11.937,11.938,11.934,11.934,0,0,0-11.937-11.938Z"/></svg>
    <div id="l"/>
  </div>
  <script type="module" src="/${clientId}/client.js"></script>
</body>
</html>
  `.trim();
}

function getRendererContent() {
  return `
import { artifactManager, ArtifactStore, logger } from "${escadLocation}/core/mod.ts";
import {
  createMessenger,
  workerConnection,
  serializeConnection,
  logConnection,
} from "${escadLocation}/messaging/mod.ts";
import { createRendererServerMessenger } from "${escadLocation}/server/renderer.ts";
import { VfsArtifactStore } from "${escadLocation}/playground/VfsArtifactStore.ts";

artifactManager.artifactStores.unshift(new VfsArtifactStore());

createRendererServerMessenger(
  logConnection(serializeConnection(workerConnection(self as any))),
  () => import(${JSON.stringify(`/${clientId}/transpiled/main.js`)}),
  logger,
).requestRetry();
	`.trim();
}

function getInitialCode() {
  const base = `
import {
  escad,
  booleanParam,
  numberParam,
  objectParam,
  parametrize,
} from "#escad/core/mod.ts";
import "#escad/3d/register.ts";

const parameters = {
  dimensions: objectParam({
    coreSize: numberParam({ defaultValue: 4 }),
    rodLength: numberParam({ defaultValue: 6 }),
  }),
  options: objectParam({
    roundCore: booleanParam({ defaultValue: false }),
    atAxes: booleanParam({ defaultValue: true }),
  }),
};

function model({
  dimensions: { coreSize: size, rodLength: ext },
  options: { atAxes, roundCore: round },
}) {
  const core = !round
    ? escad.cube({ size })
    : escad.sphere({ radius: size / Math.SQRT2 });

  const cyl = escad.cylinder({
    radius: size / 4,
    height: ext * 2,
  });

  const rod = atAxes ? cyl : cyl.rotateX(angleX());

  let rods = escad.union(
    atAxes
      ? {
        z: rod,
        y: rod.rX(90),
        x: rod.rY(90),
      }
      : [0, 90, 180, 270]
        .map((a) => rod.rotateZ(45 + a)),
  );

  return { core, rods };
}

export default parametrize(parameters, model);

function angleX() {
  return 90 - rad(Math.atan(Math.SQRT1_2));
}

function rad(rad: number) {
  return rad * (180 / Math.PI);
}
`;
  const code = base.replace(/#escad\//g, `${escadLocation}/`);
  console.log(code);
  return code;
}