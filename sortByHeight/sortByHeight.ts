function sortByHeight(a: number[]): number[] {
  let res: number[] = [];
  let filtered = a.filter(n => n !== -1 || isNaN(n)).sort((a, b) => a - b);
  let j = 0;

  for (let i = 0; i < a.length; i++) {
    if (a[i] === -1) {
      res[i] = a[i];
    } else {
      res[i] = filtered[j];
      j++;
    }
  }

  return res;
}

console.log(sortByHeight([-1, 150, 190, 170, -1, -1, 160, 180]));
