function uniqueDigitProducts(a: number[]): number {
    let tmp: number[] = [];
    for (let n of a) {
        if (n.toString().length === 1) {
            tmp.push(n);
        } else {
            tmp.push(n.toString().split('').reduce((a, b) => a * Number(b), 1));
        }
    }

    return tmp.filter(onlyUnique).length;
}

function onlyUnique(value: number, index: number, self: number[]) {
    return self.indexOf(value) === index;
}

console.log(uniqueDigitProducts([2, 8, 121, 42, 222, 23]));
