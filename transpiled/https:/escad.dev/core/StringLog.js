import { checkTypeProperty } from "/transpiled/https://escad.dev/core/checkTypeProperty.js";
import { Id } from "/transpiled/https://escad.dev/core/Id.js";
const stringLogId = Id.create(import.meta.url, "@escad/core", "Log", "StringLog");
export const StringLog = {
    id: stringLogId,
    create: (message, level) => ({
        type: stringLogId,
        message,
        level,
    }),
    isStringLog: checkTypeProperty.id(stringLogId),
};
