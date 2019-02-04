function confirmEnding(str: string, target: string): boolean {
    return str.substr(-target.length) === target;
}

console.log(confirmEnding("Abstraction", "action"));
console.log(confirmEnding("Open sesame", "pen"));
