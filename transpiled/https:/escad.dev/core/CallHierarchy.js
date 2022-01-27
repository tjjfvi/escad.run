import { checkTypeProperty } from "/transpiled/https://escad.dev/core/checkTypeProperty.js";
export const CallHierarchy = {
    create: ({ operator, operands, result, composable, linkedProducts = result?.linkedProducts, }) => ({
        type: "CallHierarchy",
        operator,
        operands,
        result,
        composable,
        linkedProducts,
    }),
    isCallHierarchy: checkTypeProperty.string("CallHierarchy"),
};
