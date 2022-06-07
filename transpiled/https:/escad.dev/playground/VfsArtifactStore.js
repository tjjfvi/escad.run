import { $wrappedValue, Hash, Id } from "/transpiled/https://escad.dev/core/mod.js";
import { iterateReader, readerFromStreamReader } from "/transpiled/https://escad.dev/deps/streams.js";
import { join } from "/transpiled/https://escad.dev/deps/path.js";
import { put } from "/transpiled/https://escad.dev/playground/swApi.js";
export class VfsArtifactStore {
  async storeRaw(hash, value) {
    const path = this.getPathRaw(hash);
    let chunks = [];

    for await (let chunk of $wrappedValue.serialize(value)) {
      chunks.push(chunk);
    }

    await put(path, new Blob(chunks));
  }

  async storeRef(loc, hash) {
    const path = this.getPathRef(loc);
    await put(path, hash);
  }

  async lookupRaw(hash) {
    const response = await fetch(this.getPathRaw(hash));
    if (!response.ok || !response.body) return null;
    return await $wrappedValue.deserializeAsync(iterateReader(readerFromStreamReader(response.body.getReader())));
  }

  async lookupRef(loc) {
    const response = await fetch(this.getPathRef(loc));
    if (!response.ok) return null;
    return this.lookupRaw(await response.text());
  }

  getPathRaw(hash) {
    return `/artifacts/raw/` + hash;
  }

  getPathRef(loc) {
    const path = join("/artifacts", ...loc.map(x => Id.isId(x) ? x.replace(/\//g, "-") : Hash.create(x)));
    return path;
  }

}