export const registeredPlugins = new Set();
export const registerPlugin = (url) => {
    registeredPlugins.add(url.toString());
};
