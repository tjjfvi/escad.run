import { filterConnection } from "/transpiled/https://escad.dev/messages/filterConnection.js";
import { transformConnection } from "/transpiled/https://escad.dev/messages/transformConnection.js";
export const brandConnection = (connection, brand) => transformConnection(filterConnection(connection, (v) => typeof v === "object" && !!v && "brand" in v &&
    v["brand"] === brand && "value" in v), (value) => ({ brand, value }), ({ value }) => value);
