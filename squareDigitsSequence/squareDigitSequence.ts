function squareDigitsSequence(a0: number): number {
  let sequence: number[] = [a0];
  let idx = 0;

  while(true) {
    let curNum = 0;

    sequence[idx].toString()
      .split('')
      .filter((c) => c !== '0')
      .map((a) => {
        curNum += Math.pow(Number(a), 2);
      });

    if (sequence.includes(curNum)) {
      sequence.push(curNum);
      break;
    }

    sequence.push(curNum);
    idx++;
  }

  console.log(sequence);
  return sequence.length;
}


console.log(squareDigitsSequence(16));
console.log(squareDigitsSequence(103));
