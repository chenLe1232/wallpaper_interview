export function detectDevTools() {
    if (process.env.NODE_ENV !== 'production') return;
    let currentTime = new Date().getTime();
    // 检查链接中是否有 debug=1
    const hasDebugFlag = window.location.search.includes('debug=1');
    if (hasDebugFlag) return;
    const timeout = setInterval(() => {
        (new Function('debugger'))();
        const newDate = new Date().getTime()
        if (newDate - currentTime > 100) {
            clearInterval(timeout);
            console.log('DevTools detected');

            window.open('about:blank', '_self', '');

        } else {
            currentTime = newDate
        }
    }, 100);
}