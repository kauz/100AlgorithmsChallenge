function arrayMaximalAdjacentDifference(inputArray: number[]): number {
    let resArr: number[] = [];

    for (let i: number = 0; i < inputArray.length; i++) {

        if (i === 0) {
            resArr.push(Math.abs(inputArray[i] - inputArray[i + 1]))
        } else {
            resArr.push(Math.abs(inputArray[i] - inputArray[i - 1]));
        }
    }

    return Math.max(...resArr);
}

console.log(arrayMaximalAdjacentDifference([2, 4, 1, 0]));
