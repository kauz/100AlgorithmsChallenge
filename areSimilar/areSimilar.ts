function areSimilar(a: number[], b: number[]): boolean {

    if (a.toString() === b.toString()) {
        return true;
    }

    let c: number[] = [];
    let d: number[] = [];

    for (let i: number = 0; i < a.length; i++) {
        if (a[i] !== b[i]) {
            c.push(a[i]);
            d.push(b[i]);
        }
    }

    d = d.reverse();

    console.log(c, d);

    return c.length === 2 && (c.toString() === d.toString());

}

console.log(areSimilar([1, 2, 3], [1, 2, 3]));
console.log(areSimilar([1, 2, 3], [2, 1, 3]));
console.log(areSimilar([1, 2, 3], [3, 2, 1]));
console.log(areSimilar([1, 2, 2], [2, 1, 1]));
