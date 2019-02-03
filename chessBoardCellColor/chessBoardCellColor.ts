function chessBoardCellColor(cell1: string, cell2: string): boolean {
    let board: boardTemplate = {
        "A": 1,
        "B": 2,
        "C": 3,
        "D": 4,
        "E": 5,
        "F": 6,
        "G": 7,
        "H": 8
    };

    let sum1 = board[cell1[0]] + parseInt(cell1[1]);
    let sum2 = board[cell2[0]] + parseInt(cell2[1]);

    return sum1 % 2 === sum2 % 2;
}

console.log(chessBoardCellColor('A1', 'C3'));
console.log(chessBoardCellColor('A1', 'H3'));
