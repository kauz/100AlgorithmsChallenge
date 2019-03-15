function makeArrayConsecutive2(statues: number[]): number {
  let counter = 0;
  let sortedStatues = statues.sort((a, b) => a - b);
  const min = sortedStatues[0];
  const max = sortedStatues[sortedStatues.length - 1];

  for(let i = min; i < max; i++) {
    if(!statues.includes(i)) {
      statues.push(i);
      counter++
    }
  }

  return counter;
}

console.log(makeArrayConsecutive2([6, 2, 3, 8]));