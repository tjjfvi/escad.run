import "/transpiled/https://escad.dev/client/stylus/Pane.styl.js";
import React from "/transpiled/https://escad.dev/deps/react.js";
import { useObservable } from "/transpiled/https://escad.dev/deps/rhobo.js";
export const Pane = ({ name, className = name, children, right = false, left = !right, defaultWidth = 500, resizable = true, defaultOpen = false, minWidth = 100, }) => {
    const width = useObservable.use(defaultWidth);
    const open = useObservable.use(defaultOpen);
    const resizing = useObservable.use(false);
    if (!resizing() && width() < minWidth) {
        width(minWidth);
    }
    return (React.createElement("div", { className: "Pane " +
            (left ? "left " : "right ") +
            (open() ? "open " : "") +
            (resizing() ? "resizing " : "") +
            (resizable && open() ? "resizable " : "") +
            className, style: { maxWidth: open() ? Math.max(width(), minWidth) : 50 } },
        React.createElement("div", { className: "border", onMouseDown: () => {
                if (!resizable || !open())
                    return;
                resizing(true);
                const mouseMoveHandler = (e) => {
                    if (e.buttons) {
                        width(width() + e.movementX * (left ? 1 : -1));
                    }
                    else {
                        document.documentElement.removeEventListener("mousemove", mouseMoveHandler);
                        resizing(false);
                    }
                };
                document.documentElement.addEventListener("mousemove", mouseMoveHandler);
            } }),
        React.createElement("div", { className: "side", onClick: () => open(!open()) },
            React.createElement("span", null, name)),
        React.createElement("div", { className: "content", style: { minWidth: Math.max(width(), minWidth) - 50 } }, children)));
};
