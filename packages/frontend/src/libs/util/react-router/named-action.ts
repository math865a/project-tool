function getActionName(request: Request) {
    const searchParams = new URL(request.url).searchParams;
    for (let key of searchParams.keys()) {
        if (key.startsWith("/")) return key.slice(1);
    }
    return null;
}

interface Actions {
    [name: string]: () => Promise<any> | any;
}

export async function namedAction(request: Request, actions: Actions) {
    const name = getActionName(request);

    if (name !== null) {
        const action = actions[name];

        if (action) {
            return await action();
        }
    } else if ("default" in actions) {
        return await actions["default"]();
    }
    throw new ReferenceError(`Action ${name} not found`);
}
