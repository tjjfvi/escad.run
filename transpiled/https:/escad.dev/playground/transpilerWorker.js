import { brandConnection, parentWorkerConnection } from "/transpiled/https://escad.dev/messaging/mod.js";
import { createTranspiler, createTranspilerServerMessenger } from "/transpiled/https://escad.dev/server/transpiler.js";
import { transformUrl } from "/transpiled/https://escad.dev/server/transformUrl.js";
import { getTranspiledUrl } from "/transpiled/https://escad.dev/playground/getTranspiledUrl.js";
import { put } from "/transpiled/https://escad.dev/playground/swApi.js";
const transpiler = createTranspiler({
  cache: {
    has: async url => {
      return (await fetch(`/transpiled/${transformUrl(url)}`)).ok;
    },
    set: async (url, content) => {
      await put(getTranspiledUrl(url).slice((location.origin + "/").length), content);
    }
  },
  transformUrl: getTranspiledUrl
});
createTranspilerServerMessenger(transpiler, brandConnection(parentWorkerConnection(), "a"));
createTranspilerServerMessenger(transpiler, brandConnection(parentWorkerConnection(), "b"));