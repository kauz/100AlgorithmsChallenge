function circleOfNumbers(n: number, firstNumber: number): number {
    let res: number[] = [];
    let opposite = firstNumber < n / 2 ? firstNumber + n / 2: firstNumber - n / 2;

    for (let i = 0; i < n; i++) {
        res.push(i);
    }

    return res[opposite];
}

console.log(circleOfNumbers(10, 2));
