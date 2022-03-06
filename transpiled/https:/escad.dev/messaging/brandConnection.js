import { filterConnection } from "/transpiled/https://escad.dev/messaging/filterConnection.js";
import { transformConnection } from "/transpiled/https://escad.dev/messaging/transformConnection.js";
export const brandConnection = (connection, brand) => transformConnection(filterConnection(connection, (v) => typeof v === "object" && !!v && "brand" in v &&
    v["brand"] === brand && "value" in v), (value) => ({ brand, value }), ({ value }) => value);
