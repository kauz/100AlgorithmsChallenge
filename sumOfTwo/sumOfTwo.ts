function sumOfTwo(a: number[], b: number[], v: number): boolean {
  const iLen = a.length, jLen = b.length;

  for (let i = 0; i < iLen; i++) {
    for (let j = 0; j < jLen; j++) {
      if (a[i] + b[j] === v) {
        return true;
      }
    }
  }

  return false;
}

console.log(sumOfTwo([1, 2, 3], [10, 20, 30, 40], 42));
