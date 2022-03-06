export const registeredPlugins = new Set();
export const registerClientPlugin = (url) => {
    registeredPlugins.add(url.toString());
};
