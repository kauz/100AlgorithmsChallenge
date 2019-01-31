function addTwoDigits(n: number): any {
    return (n + '').split('').reduce((accumulator: number, currentValue: string) => accumulator + Number(currentValue), 0);
}

console.log(addTwoDigits(29));
