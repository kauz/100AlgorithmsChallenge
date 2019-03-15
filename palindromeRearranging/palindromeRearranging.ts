interface ICounter {
  [key: string]: number
}

function palindromeRearranging(inputString: string): boolean {
  if (inputString.length === 1) {
    return true;
  }

  if (inputString.length === 2 && inputString[0] !== inputString[1]) {
    return false;
  }

  let arrStr = inputString.split('');
  let counter: ICounter = {};

  for (let char of arrStr) {
    if (counter.hasOwnProperty(char)) {
      counter[char]++
    } else {
      counter[char] = 1;
    }
  }

  console.log(counter);
  return Object.values(counter).filter(n => n % 2 !== 0).length <= 1;
}

console.log(palindromeRearranging('a'));
console.log(palindromeRearranging('ab'));
console.log(palindromeRearranging('abc'));
console.log(palindromeRearranging('aabb'));
console.log(palindromeRearranging('aabbo'));