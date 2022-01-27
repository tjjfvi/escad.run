export var TreeTextPart;
(function (TreeTextPart) {
    // eslint-disable-next-line @typescript-eslint/ban-types
    TreeTextPart.String = (string) => ({
        kind: "string",
        string,
    });
    TreeTextPart.Ellipsis = (target) => ({
        kind: "ellipsis",
        target,
    });
    TreeTextPart.RangeStart = (range) => ({
        kind: "rangeStart",
        range,
    });
    TreeTextPart.RangeEnd = () => ({
        kind: "rangeEnd",
    });
})(TreeTextPart || (TreeTextPart = {}));
export var TreeTextRange;
(function (TreeTextRange) {
    TreeTextRange.Dummy = () => ({
        kind: "dummy",
    });
    TreeTextRange.Selectable = (path) => ({
        kind: "selectable",
        path,
    });
})(TreeTextRange || (TreeTextRange = {}));
