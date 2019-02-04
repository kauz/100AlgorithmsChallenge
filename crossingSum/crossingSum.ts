function crossingSum(matrix: number[][], a: number, b: number): number {
    let aRowSum = 0;
    let bColSum = 0;

    matrix.forEach((arr, i) => {
        bColSum += arr[b];
        if (i === a) {
            arr.forEach((n, i) => {
                if (i !== b) {
                    aRowSum += n;
                }
            });
        }
    });

    return aRowSum + bColSum;
}

console.log(crossingSum([[1, 1, 1, 1],
    [2, 2, 2, 2],
    [3, 3, 3, 3]], 1, 3));
