interface NumberConfig {
    repeat: number,
    targetProperty: string,
    replace: boolean,
}

export default async function (subject: GenericObject, config: NumberConfig): Promise<GenericObject> {
    const {repeat, targetProperty, replace} = config;
    const targetObj = {};
    targetObj[targetProperty] = subject[targetProperty] || [];
    if (replace && targetObj[targetProperty].length) {
        targetObj[targetProperty] = [];
    }
    for (let i = 0; i < repeat; i++) {
        targetObj[targetProperty].push(Math.floor(Math.random() * 10));
    }
    return Object.assign({}, subject, targetObj);
}
