import { Timer } from "/transpiled/https://escad.dev/core/utils/Timer.js";
const ids = new Set();
export const idRegex = /^(?<packageName>(?:@[\w-]+\/)?[\w-]+)\/(?<scope>\w+)\/(?<name>\w+)$/;
export const Id = {
  create: (_filepath, packageName, scope, name) => {
    const id = `${packageName}/${scope}/${name}`;

    if (!idRegex.test(id)) {
      throw new Error("Invalid id passed to Id.create: " + id);
    } // TODO: use filepath / validate packageName


    if (ids.has(id)) {
      throw new Error(`Duplicate ids created under ${id}`);
    }

    ids.add(id);
    return id;
  },
  tryParse: id => {
    const match = idRegex.exec(id);
    if (!match?.groups) return null;
    return match.groups;
  },
  parse: id => {
    const result = Id.tryParse(id);

    if (!result) {
      throw new Error("Invalid id passed to Id.parse");
    }

    return result;
  },
  isId: Timer.create().timeFn(id => typeof id === "string" && idRegex.test(id))
};