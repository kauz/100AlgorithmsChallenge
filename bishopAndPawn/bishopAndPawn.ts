interface boardTemplate {
    [key:string]: number;
}

interface coordinates {
    horizontal: number;
    vertical: number;
}

function bishopAndPawn(bishop: string, pawn: string): boolean {
    let board: boardTemplate = {
        a: 1,
        b: 2,
        c: 3,
        d: 4,
        e: 5,
        f: 6,
        g: 7,
        h: 8
    };

    let bishopCoord: coordinates = {
      horizontal: parseInt(bishop[1]),
      vertical: board[`${bishop[0]}`]
    };

    let pawnCoord: coordinates = {
        horizontal: parseInt(pawn[1]),
        vertical: board[`${pawn[0]}`]
    };

    return (bishopCoord.vertical / bishopCoord.horizontal === pawnCoord.vertical / pawnCoord.horizontal);

}

console.log(bishopAndPawn('a1', 'c3'));
