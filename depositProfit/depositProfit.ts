function depositProfit(deposit: number, rate: number, threshold: number): number {
    let year: number = 0;

    while (deposit < threshold) {
        deposit += Math.round((rate / 100) * deposit);
        year++;
        console.log(deposit);
    }

    return year;
}

console.log(depositProfit(100, 20, 170));
