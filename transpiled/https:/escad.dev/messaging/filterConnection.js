export const filterConnection = (connection, filter) => ({
  send: connection.send,
  onMsg: origCb => connection.onMsg(v => filter(v) && origCb(v)),
  destroy: connection.destroy
});