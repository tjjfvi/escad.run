/* istanbul ignore next: covered by types, noisy to test */
export const logConnection = (connection, ...label) => {
  const off = connection.onMsg(value => {
    console.log(...label, "recv", ...[].concat(value));
  });
  return {
    send: value => {
      console.log(...label, "send", ...[].concat(value));
      connection.send(value);
    },
    onMsg: cb => {
      return connection.onMsg(cb);
    },
    destroy: () => {
      off();
      connection.destroy?.();
    }
  };
};