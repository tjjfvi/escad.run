import React from "/transpiled/https://escad.dev/deps/react.js";
export const usePromise = (func, deps) => {
    const [value, setValue] = React.useState();
    let current = true;
    React.useEffect(() => {
        setValue(undefined);
        func().then((value) => current && setValue(value));
        return () => {
            current = false;
        };
    }, deps);
    return value;
};
