export function sleep() {
    return new Promise(resolve => setTimeout(()=> resolve('Hello Promise'), 2500));
}
