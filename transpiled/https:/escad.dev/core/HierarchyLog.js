import { checkTypeProperty } from "/transpiled/https://escad.dev/core/checkTypeProperty.js";
import { Id } from "/transpiled/https://escad.dev/core/Id.js";
const hierarchyLogId = Id.create(import.meta.url, "@escad/core", "Log", "HierarchyLog");
export const HierarchyLog = {
    id: hierarchyLogId,
    create: (hierarchy, level) => ({
        type: hierarchyLogId,
        hierarchy,
        level,
    }),
    isHierarchyLog: checkTypeProperty.id(hierarchyLogId),
};
