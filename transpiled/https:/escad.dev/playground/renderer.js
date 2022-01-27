import { escadLocation } from "/transpiled/https://escad.dev/playground/escadLocation.js";
import { clientId } from "/transpiled/https://escad.dev/playground/swApi.js";
import { put } from "/transpiled/https://escad.dev/playground/swApi.js";
import { transpiler } from "/transpiled/https://escad.dev/playground/transpiler.js";
export async function getRendererWorkerUrl() {
    await put(`${clientId}/renderer.ts`, `
import { artifactManager, ArtifactStore, logger } from "${escadLocation}/core/mod.ts";
import {
  createMessenger,
  workerConnection,
  serializeConnection,
  logConnection,
} from "${escadLocation}/messages/mod.ts";
import { createRendererServerMessenger } from "${escadLocation}/renderer/mod.ts";
import { VfsArtifactStore } from "${escadLocation}/playground/VfsArtifactStore.ts";

artifactManager.artifactStores.unshift(new VfsArtifactStore());

createRendererServerMessenger(
  logConnection(serializeConnection(workerConnection(self as any))),
  () => import(${JSON.stringify(`/${clientId}/transpiled/main.js`)})
  logger,
).requestRetry();
`);
    await transpiler.transpile(location.origin + `/${clientId}/renderer.ts`);
    return `/${clientId}/transpiled/renderer.js`;
}
