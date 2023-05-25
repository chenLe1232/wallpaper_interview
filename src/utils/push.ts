export function push(url: string, state?: any) {
    window.history.pushState(state, '', url);
}
