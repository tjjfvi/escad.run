import { checkTypeProperty, Id } from "/transpiled/https://escad.dev/core/utils/mod.js";
const hierarchyLogId = Id.create(import.meta.url, "@escad/core", "Log", "HierarchyLog");
export const HierarchyLog = {
  id: hierarchyLogId,
  create: (hierarchy, level) => ({
    type: hierarchyLogId,
    hierarchy,
    level
  }),
  isHierarchyLog: checkTypeProperty.id(hierarchyLogId)
};