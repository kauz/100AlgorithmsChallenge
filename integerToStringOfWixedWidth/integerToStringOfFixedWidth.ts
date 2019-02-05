function integerToStringOfFixedWidth(number: number, width: number): string {
    let numStr: string = number.toString();

    if (numStr.length < width) {
        numStr = '0'.repeat(width - numStr.length) + numStr;
    } else if (numStr.length > width) {
        numStr = numStr.slice(width - numStr.length);
    }

    return numStr;
}

console.log(integerToStringOfFixedWidth(1234, 2));
console.log(integerToStringOfFixedWidth(1234, 4));
console.log(integerToStringOfFixedWidth(1234, 5));
