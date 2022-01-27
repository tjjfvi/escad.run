import React from "/transpiled/https://escad.dev/deps/react.js";
/**
 * Correctly handles hover & click logic when nested
 */
export const NestableSpan = ({ className, onClick, children }) => {
    const [hovered, setHovered] = React.useState(false);
    return (React.createElement("span", { className: (className ?? "") + (hovered ? " hover" : ""), onClick: onClick && ((event) => {
            if (!onClick)
                return;
            event.stopPropagation();
            onClick(event);
        }), onMouseOver: (event) => {
            const newHovered = !handledMoverOverEvents.has(event.nativeEvent);
            if (hovered !== newHovered)
                setHovered(newHovered);
            handledMoverOverEvents.add(event.nativeEvent);
        }, onMouseLeave: () => hovered && setHovered(false), children: children }));
};
const handledMoverOverEvents = new WeakSet();
