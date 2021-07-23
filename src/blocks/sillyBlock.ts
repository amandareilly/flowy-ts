interface SillyBlockConfig extends GenericObject {
    mySillyWord: string,
}

interface SillySubject extends GenericObject {
    inputSillyWord: string,
}

export default async function (subject: SillySubject, config: SillyBlockConfig): Promise<SillySubject> {
    const newSubject = Object.assign({}, subject, {
        sillySentence: `My silly word is ${config.mySillyWord}, but the input silly word is ${subject.inputSillyWord}.`,
    });
    return newSubject;
}
