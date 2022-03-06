import { transformConnection } from "/transpiled/https://escad.dev/messaging/transformConnection.js";
/* istanbul ignore next: covered by types, noisy to test */
export const logConnection = (connection) => transformConnection(connection, (value) => {
    console.log("send", ...[].concat(value));
    return value;
}, (value) => {
    console.log("recv", ...[].concat(value));
    return value;
});
