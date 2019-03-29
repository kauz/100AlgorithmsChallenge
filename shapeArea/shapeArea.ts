function shapeArea(n: number): number {
  let area = 1;

  for (let i = 1; i <= n; i++) {
    area += ((i * 4) - 4);
  }
  return area;
}

console.log(shapeArea(1));
console.log(shapeArea(2));
console.log(shapeArea(3));
console.log(shapeArea(4));
console.log(shapeArea(5));
