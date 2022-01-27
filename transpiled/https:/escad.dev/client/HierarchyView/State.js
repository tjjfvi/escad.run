export function getState(stateMemo, path, str) {
    const key = path.flatMap((part) => [
        part.type,
        part.type === "ObjectHierarchyPathPart"
            ? part.key
            : part.type === "ArrayHierarchyPathPart"
                ? part.index
                : part.location,
    ]).concat(str).join("//");
    const state = stateMemo.get(key) ?? { open: false };
    stateMemo.set(key, state);
    return state;
}
