function almostIncreasingSequence(sequence: number[]): boolean {
    let counter: number = 0;

    for (let i: number = 0; i < sequence.length - 1; i++) {
        counter += sequence[i] < sequence[i + 1] ? 0 : 1;
        if (counter > 1) {
            return false;
        }
    }

    return counter <= 1;
}

console.log(almostIncreasingSequence([1, 3, 1, 1]));
console.log(almostIncreasingSequence([1, 3, 2]));
