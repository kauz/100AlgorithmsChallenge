function compareIntegers(a: string, b: string): string {
    let aNum = parseInt(a);
    let bNum = parseInt(b);

    if (isNaN(aNum) || isNaN(bNum)) {
        return 'bullshit';
    }

    return aNum === bNum
        ? 'equal'
        : aNum < bNum
            ? 'less'
            : 'greater';
}

console.log(compareIntegers('n', '13'));
console.log(compareIntegers('12', '13'));
console.log(compareIntegers('875', '799'));
console.log(compareIntegers('1000', '1000'));
