export const createConnectionPair = () => {
  const aListeners = new Set();
  const bListeners = new Set();
  const a = {
    send: value => aListeners.forEach(fn => fn(value)),
    onMsg: cb => {
      bListeners.add(cb);
      return () => bListeners.delete(cb);
    }
  };
  const b = {
    send: value => bListeners.forEach(fn => fn(value)),
    onMsg: cb => {
      aListeners.add(cb);
      return () => aListeners.delete(cb);
    }
  };
  return [a, b];
};