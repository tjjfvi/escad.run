// @style "./stylus/Loading.styl"
import React from "/transpiled/https://escad.dev/deps/react.js";
export const Loading = ({ className, size }) => (React.createElement("div", { className: "Loading " + (className ?? ""), style: size === undefined ? {} : { "--size": size + "px" } }));
