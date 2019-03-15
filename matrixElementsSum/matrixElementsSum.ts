function matrixElementsSum(matrix: any[][]): number {
    let totalPrice = 0;

    matrix.forEach((arr, arrIdx) => {
        for (let i = 0; i < arr.length; i++) {
            if (arr[i] === 0) {
                continue;
            } else if (matrix[arrIdx - 1] && matrix[arrIdx - 1][i] === 0) {
                continue;
            }
            totalPrice += arr[i];
        }
    });

    return totalPrice;
}

console.log(matrixElementsSum(
    [[0, 1, 1, 2],
    [0, 5, 0, 0],
    [2, 0, 3, 3]]
));
