function differentSymbolsNaive(s: string): number {
    return s.split('').sort().filter((n, i, arr) => n !== arr[i + 1]).length;
}

// with new Set();
// function differentSymbolsNaive(s: string): number {
//     let unique = new Set();
//     s.split('').forEach(c => {
//        unique.add(c);
//     });
//
//     return unique.size;
// }

console.log(differentSymbolsNaive('cabca'));
