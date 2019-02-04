function factorializeANumber(num: number): number {
    let factorial = 1;
    for (let i = 1; i <= Math.abs(num); i++) {
        factorial *= i;
    }
    return factorial;
}

console.log(factorializeANumber(5));
console.log(factorializeANumber(10));
