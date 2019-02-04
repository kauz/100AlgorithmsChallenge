function extractMatrixColumn(matrix: number[][], column: number): number[] {
    let res: number[] = [];

    // matrix.forEach(arr => {
    //     arr.forEach((n, i) => {
    //         if (i === column) {
    //             res.push(n);
    //         }
    //     });
    // });

    matrix.forEach(arr => {
        res.push(arr[column]);
    });

    return res;
}

console.log(extractMatrixColumn([[1, 1, 1, 2], [0, 5, 0, 4], [2, 1, 3, 6]], 2));
