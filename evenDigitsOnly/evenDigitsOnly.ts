function evenDigitsOnly(n: number): boolean {
    return (n + '').split('').every((n: string) => parseInt(n) % 2 === 0);
}

console.log(evenDigitsOnly(248622));
console.log(evenDigitsOnly(642386));
