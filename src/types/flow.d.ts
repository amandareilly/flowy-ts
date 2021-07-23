interface FlowBlock {
    readonly blockName: string,
    readonly blockConfig: GenericObject,
    readonly preprocessor?: (subjectObject: GenericObject, blockConfig: GenericObject) => GenericObject,
}

interface LoadedFlowBlock extends FlowBlock {
    readonly run: RunFn,
}

type Flow = FlowBlock[];

type LoadedFlow = LoadedFlowBlock[];
