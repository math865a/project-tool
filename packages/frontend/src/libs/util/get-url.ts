export function getUrl(...urls: (string | undefined)[]) {
    return urls.filter((d) => d).join('/');
}

export function getNamedAction(action: string, ...url: string[]) {
    return getUrl(...url) + '?/' + action;
}
