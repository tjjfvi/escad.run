import { createMessenger } from "/transpiled/https://escad.dev/messages/Messenger.js";
/* istanbul ignore next: covered by types, not much to test */
export const createEventEmitter = () => createMessenger({
    impl: {},
    connection: {
        send: () => { },
        onMsg: () => () => { },
    },
});
