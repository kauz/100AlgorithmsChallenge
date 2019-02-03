function arrayMaxConsecutiveSum(inputArray: number[], k: number): number | null {
    let kArr: number[] = [];
    for (let i: number = 0; i < inputArray.length - 1; i++) {
        if (inputArray[i + k - 1]) {
            let sliced: number[] = inputArray.slice(i, i + k);
            kArr.push(sliced.reduce((accumulator: number, currentValue: number) => accumulator + currentValue, 0));
        }
    }

    return kArr.length ? Math.max(...kArr) : null;
}

console.log(arrayMaxConsecutiveSum([2, 3, 5, 1, 6], 2));
