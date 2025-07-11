declare class DataWithResponseInit<D> {
    type: string;
    data: D;
    init: ResponseInit | null;
    constructor(data: D, init?: ResponseInit);
}

type ActionsRecord = Record<
    string,
    () => Promise<DataWithResponseInit<unknown>>
>;

type ResponsesRecord<Actions extends ActionsRecord> = {
    [Action in keyof Actions]: Actions[Action] extends () => Promise<
        DataWithResponseInit<infer Result>
    >
        ? Result
        : never;
};

type ResponsesUnion<Actions extends ActionsRecord> =
    ResponsesRecord<Actions>[keyof Actions];

export async function namedAction<Actions extends ActionsRecord>(
    request: Request,
    actions: Actions
): Promise<DataWithResponseInit<ResponsesUnion<Actions>>> {
    const name = getActionQueryParam(request);
    console.log(name);
    if (name && name in actions) {
        const fn = actions[name];
        if (fn) {
            return fn() as unknown as DataWithResponseInit<
                ResponsesUnion<Actions>
            >;
        }
    }
    throw new ReferenceError(`Action "${name}" not found`);
}

function getActionQueryParam(request: Request) {
    const url = new URL(request.url);

    //Finding a query param that start withs /
    const actionParam = Array.from(url.searchParams.keys()).find((key) =>
        key.startsWith("/")
    );
    if (actionParam) {
        // If we found a query parameter that starts with "/", we return it without the leading "/".
        return actionParam.slice(1);
    }
    throw new ReferenceError(`No action query parameter found`);

    /*
    if (url.searchParams.size === 1) {
        // If there is only one search parameter, it is likely the action.
        // This is a common pattern in named actions to avoid conflicts with other parameters.
        return url.searchParams.keys().next().value;
    } else if (url.searchParams.size === 0) {
        // If there are no search parameters, return undefined.
        return undefined;
    } else if (url.searchParams.size > 1) {
        // If there are multiple search parameters, we expect one of them to be "action".
        // If there is no "action" parameter, return undefined.
        if (!url.searchParams.has("action")) {
            return undefined;
        }
        return url.searchParams.get("action");
    }*/
}
