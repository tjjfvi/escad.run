export const transformConnection = (connection, serialize, deserialize) => ({
  send: v => connection.send(serialize(v)),
  onMsg: origCb => connection.onMsg(v => origCb(deserialize(v))),
  destroy: connection.destroy
});