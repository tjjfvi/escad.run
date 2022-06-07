import { createSignal } from "/transpiled/https://escad.dev/deps/solid.js";
export function getState(stateMemo, path, str) {
  const key = path.flatMap(part => [part.type, part.type === "ObjectHierarchyPathPart" ? part.key : part.type === "ArrayHierarchyPathPart" ? part.index : part.location]).concat(str).join("//");
  const state = stateMemo.get(key) ?? createState();
  stateMemo.set(key, state);
  return state;
}

function createState() {
  const [open, setOpen] = createSignal(false);
  return {
    get open() {
      return open();
    },

    set open(value) {
      setOpen(value);
    }

  };
}