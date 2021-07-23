import { loadBlock } from './registry';

function initFlow(flow: Flow): LoadedFlow | Error {
    const newFlow = flow.map((block): LoadedFlowBlock => {
        return Object.assign({}, block, {run: loadBlock(block.blockName)?.run});
    });

    const missingBlock = newFlow.find(val => !val.run);
    if (missingBlock) {
        return new Error(`E_UNKNOWN_BLOCK: ${missingBlock.blockName}`);
    }
    return newFlow;
}

export async function run(subject: GenericObject, config: Flow): Promise<GenericObject | Error> {
    const loadedFlow = initFlow(config);
    if (loadedFlow instanceof Error) {
        return loadedFlow;
    }
    loadedFlow.forEach(async (block) => {
        subject = await runBlock(subject, block);
    });
    return subject;
}

async function runBlock(subject: GenericObject, block: LoadedFlowBlock): Promise<GenericObject> {
    let config = block.blockConfig;
    if (typeof block.preprocessor === 'function') {
        config = block.preprocessor(subject, config);
    }
    return block.run(subject, config);
}
