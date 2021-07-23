type GenericObject = {
    /* eslint-disable-next-line @typescript-eslint/no-explicit-any */
    readonly [key: string]: any,
}

type RunFn = (subject: GenericObject, config?: GenericObject) => Promise<GenericObject>;
