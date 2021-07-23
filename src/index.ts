import { registerBlock } from './lib/registry';
import { run } from './lib/flow';
import sillyBlock from './blocks/sillyBlock';
import numberGenerator from './blocks/numberGenerator';

registerBlock("mySillyBlock", sillyBlock);
registerBlock("numberGenerator", numberGenerator)
async function test() {
    const preObj = {
        inputSillyWord: "supercalifragilisticexpialidocious",
    };
    const postObj = await run(preObj, [
        {
            blockName: "mySillyBlock",
            blockConfig: {mySillyWord: "blahhhh"},
        },
        {
            blockName: "numberGenerator",
            blockConfig: {
                repeat: 5,
                targetProperty: "myNumbers",
                replace: false,
            },
        },

        {
            blockName: "numberGenerator",
            blockConfig: {
                repeat: 57,
                targetProperty: "myNumbers",
                replace: false,
            },
        }
    ]);
    console.log(postObj);
}

test();

export * as Registry from './lib/registry';
export * as Flow from './lib/flow';
