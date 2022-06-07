export const checkTypeProperty = fn => value => (typeof value === "object" || typeof value === "function") && value !== null && "type" in value && fn(value["type"]);

checkTypeProperty.string = type => checkTypeProperty(value => value === type);

checkTypeProperty.id = id => checkTypeProperty(value => value === id);

checkTypeProperty.idScope = scope => checkTypeProperty(value => typeof value === "string" && Id.tryParse(value)?.scope === scope);

import { Id } from "/transpiled/https://escad.dev/core/utils/Id.js";