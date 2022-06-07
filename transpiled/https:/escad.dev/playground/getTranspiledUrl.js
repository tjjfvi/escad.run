import { clientId } from "/transpiled/https://escad.dev/playground/swApi.js";
export const getTranspiledUrl = url => {
  if (url.startsWith(location.origin + `/${clientId}/`)) {
    return location.origin + `/${clientId}/transpiled/` + url.slice((location.origin + `/${clientId}/`).length);
  }

  return location.origin + "/transpiled/" + url;
};