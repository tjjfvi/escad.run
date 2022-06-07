export function parametrize(paramDef, fn) {
  const newFn = fn;
  newFn.paramDef = paramDef;
  return newFn;
}