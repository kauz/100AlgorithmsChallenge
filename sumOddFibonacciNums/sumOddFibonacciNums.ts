function sumOddFibonacciNums(num: number): number {
    let a = 1, b = 1;
    let c = 0;
    let sum = 0;

    for (let i = 3; c < num; i++) {
        a = b;
        b = c;
        c = a + b;

        if (c < num && c % 2 !== 0) {
            sum += c;
        }
    }

    return sum;
}

console.log(sumOddFibonacciNums(1000));
console.log(sumOddFibonacciNums(4000000));
console.log(sumOddFibonacciNums(10));
