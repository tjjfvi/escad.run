export let TreeTextPart;

(function (_TreeTextPart) {
  const String = _TreeTextPart.String = string => ({
    kind: "string",
    string
  });

  const Ellipsis = _TreeTextPart.Ellipsis = target => ({
    kind: "ellipsis",
    target
  });

  const RangeStart = _TreeTextPart.RangeStart = component => ({
    kind: "rangeStart",
    component
  });

  const RangeEnd = _TreeTextPart.RangeEnd = () => ({
    kind: "rangeEnd"
  });
})(TreeTextPart || (TreeTextPart = {}));