export class RenderFunction {
    paramDef;
    func;
    constructor(paramDef, func) {
        this.paramDef = paramDef;
        this.func = func;
    }
}
export const renderFunction = ((paramDef, func) => new RenderFunction(paramDef, func));
