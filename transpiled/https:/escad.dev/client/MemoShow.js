import { children, createMemo } from "/transpiled/https://escad.dev/deps/solid.js";
export const MemoShow = props => {
  const when = createMemo(() => props.when);
  const condition = createMemo(() => !!when());
  let lastVal = null;
  const val = createMemo(() => lastVal = when() || lastVal);
  const memo = createMemo(() => {
    const cond = condition();

    if (cond) {
      return children(() => props.children(val));
    } else {
      return props.fallback;
    }
  });
  return memo;
};