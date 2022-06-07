import { createResource } from "/transpiled/https://escad.dev/deps/solid.js";
export function fetchArtifact(artifactManager, hash) {
  const [artifact] = createResource(hash, async hash => {
    if (!hash) return null;
    return artifactManager.lookupRaw(hash);
  });
  return artifact;
}