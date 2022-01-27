import { useValue } from "/transpiled/https://escad.dev/deps/_/rhobo/useValue.js";
import React from "/transpiled/https://escad.dev/deps/react.js";
export const use_ = (f) => {
    let core = (clear) => (...a) => {
        let r = useValue(() => f(...a));
        if (clear) {
            React.useEffect(() => () => {
                r.kill();
            }, []);
        }
        return r;
    };
    // @ts-ignore
    return Object.assign(core(true), {
        use: (...a) => core(true)(...a).use(),
        preserve: Object.assign(core(false), { use: (...a) => core(false)(...a).use() }),
    });
};
