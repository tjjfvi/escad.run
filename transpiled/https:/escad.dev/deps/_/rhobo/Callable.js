// eslint-disable-next-line @typescript-eslint/class-name-casing
class _Class {
}
export const Callable = (Class) => 
// @ts-ignore
class {
    constructor() {
        let f = (...a) => this.__f.apply(f, a);
        Class.call(f);
        return Object.setPrototypeOf(f, new.target.prototype);
    }
};
