interface iCounter {
  [key: string]: number
}

function mostFrequentDigitSum(n: number): number {
  let frequency: iCounter = {};

  for (let i = n; i > 0; i = i - step(i)) {
    if (frequency[step(i)]) {
      frequency[step(i)]++;
    } else {
      frequency[step(i)] = 1;
    }
  }

  console.log(frequency);
  return Object.keys(frequency).reduce((k, nk) => frequency[k] > frequency[nk] ? Number(k) : Number(nk), 0)

}

function step(i: number) {
  return String(i).split('').reduce((a, b) => a + Number(b), 0);
}

console.log(mostFrequentDigitSum(88));
console.log(mostFrequentDigitSum(8));