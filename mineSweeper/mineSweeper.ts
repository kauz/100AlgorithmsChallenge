function minesweeper(matrix: boolean[][]): number[][] {
    let setup: number[][] = [];

    for (let i = 0; i < matrix.length; i++) {
        setup.push([]);
        for (let j = 0; j < matrix[i].length; j++) {
            let cnt: number = 0;
            if (i > 0) {
                if (matrix[i - 1][j]) {
                    cnt += 1;
                }
                if (matrix[i - 1][j + 1]) {
                    cnt += 1;
                }
                if (matrix[i - 1][j - 1]) {
                    cnt += 1;
                }
            }
            if (i < matrix.length - 1) {
                if (matrix[i + 1][j]) {
                    cnt += 1;
                }
                if (matrix[i + 1][j + 1]) {
                    cnt += 1;
                }
                if (matrix[i + 1][j - 1]) {
                    cnt += 1;
                }
            }

            if (matrix[i][j + 1]) {
                cnt += 1;
            }
            if (matrix[i][j - 1]) {
                cnt += 1;
            }
            setup[i].push(cnt)
        }
    }
    return setup
}

console.log(minesweeper([[true, false, false],
    [false, true, false],
    [false, false, false]]));
