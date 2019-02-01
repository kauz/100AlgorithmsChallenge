function allLongestStrings(inputArray: string[]): string[] {
    let longest: number = 0;
    for (let i: number = 0; i < inputArray.length - 1; i++) {
        longest = inputArray[i].length > inputArray[i + 1].length
            ? inputArray[i].length
            : inputArray[i + 1].length;
    }

    return inputArray.filter((n: string) => n.length === longest);
}

console.log(allLongestStrings(["aba", "aa", "ad", "vcd", "aba"]));
