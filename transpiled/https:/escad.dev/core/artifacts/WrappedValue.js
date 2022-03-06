const wrappedValueMemo = new WeakMap();
export const WrappedValue = {
    create: (value) => {
        if (value === null || typeof value !== "object" && typeof value !== "function") {
            return { value };
        }
        const existing = wrappedValueMemo.get(value);
        if (existing)
            return existing;
        const wrappedValue = { value };
        wrappedValueMemo.set(value, wrappedValue);
        return wrappedValue;
    },
};
