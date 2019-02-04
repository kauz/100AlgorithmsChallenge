function factorializeANumber(num: number): number {
    let sequence: number[] = [];
    let counter = 1;

    while (true) {
        if (counter > Math.abs(num)) {
            break;
        } else {
            sequence.push(counter);
            counter++;
        }
    }

    // console.log(sequence.reduce((a, b) => `${a} ${b}`, `${num}! =`));
    return sequence.reduce((a, b) => a * b, 1);
}

console.log(factorializeANumber(-5));
console.log(factorializeANumber(10));
