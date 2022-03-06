import { Id } from "/transpiled/https://escad.dev/core/utils/mod.js";
const objectParamId = Id.create(import.meta.url, "@escad/core", "Parameter", "ObjectParam");
export const ObjectParam = {
    create: (children) => ({
        type: objectParamId,
        children: mapObj(children, (v, k) => ({ name: nameFromKey(k), ...v })),
        defaultValue: mapObj(children, (v) => v.defaultValue),
    }),
    id: objectParamId,
};
export const objectParam = ObjectParam.create;
const mapObj = (o, f) => Object.assign({}, ...Object.entries(o).map(([k, v]) => ({ [k]: f(v, k) })));
const nameFromKey = (key) => {
    let x = key.split(/([A-Z][A-Z]+)|(?=[A-Z])|(\d+)/).join(" ").replace(/ +/g, " ");
    return x[0].toUpperCase() + x.slice(1);
};
