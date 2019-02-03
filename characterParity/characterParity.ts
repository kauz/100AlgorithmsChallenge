function characterParity(symbol: string): string {

    let parsed: number = parseInt(symbol);

    return isNaN(parsed)
        ? 'not a digit'
        : parsed % 2 === 0
            ? 'even'
            : 'odd';
}

console.log(characterParity('5'));
console.log(characterParity('8'));
console.log(characterParity('q'));
