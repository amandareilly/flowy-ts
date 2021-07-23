const registry = {
    blocks: {},
};

/**
 * Register a block for use in a workflow.
 *
 * @param name A unique name to refer to the block.
 * @param run The block's run function.
 */
export function registerBlock (name: string, run: RunFn) {
    const blockDef: RegistryBlock = {
        run,
    };

    registry.blocks[name] = blockDef;
}

/**
 * Load a block from the registry for use.
 *
 * @param name The unique name of the block to load.
 */
export function loadBlock(name: string): RegistryBlock | null {
    if (registry.blocks[name]) {
        return registry.blocks[name];
    }
    return null;
}
