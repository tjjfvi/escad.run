export const debounce = (fn, amount) => {
    let timer = null;
    return () => {
        if (timer)
            clearTimeout(timer);
        timer = setTimeout(fn, amount);
    };
};
