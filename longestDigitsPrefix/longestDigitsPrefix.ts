function longestDigitsPrefix(inputString: string): string {
  let strArr = inputString.split(/\D/).filter(n => n !== '');

  return strArr.reduce((a, b) => a.length > b.length ? a : b, '')
}

console.log(longestDigitsPrefix('123aa1'));
console.log(longestDigitsPrefix('123aa1df3452345'));
console.log(longestDigitsPrefix('123aa1df9999999fd324523sd098#$lsd'));