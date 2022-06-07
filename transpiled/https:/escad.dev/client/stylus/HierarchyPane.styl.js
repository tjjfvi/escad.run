
let el = document.createElement("link");
el.type = "text/css";
el.rel = "stylesheet";
el.href = "/transpiled/https://escad.dev/client/stylus/HierarchyPane.css";
document.head.appendChild(el);
await new Promise(r => el.onload = r)
  