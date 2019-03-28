function seatsInTheater(nCols: number, nRows: number, col: number, row: number): number {
  return (nRows - row) * (nCols - col + 1);
}

console.log(seatsInTheater(16, 11, 5, 3));
