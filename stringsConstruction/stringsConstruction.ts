function stringsConstruction(a: string, b: string): number {

    let A: any = {};
    a.split('').forEach(char => {A[char] = 0});
    let B: string[] = b.split('');

    for (let i = 0; i < B.length; i++) {
        if (A.hasOwnProperty(B[i])) {
            A[B[i]]++;
        }
    }

    // @ts-ignore
    return Math.min(...Object.values(A));
}

console.log(stringsConstruction('abc', 'abccba'));
console.log(stringsConstruction('abc', 'abccbacccc'));
