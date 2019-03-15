function missingLetters(str: string): string | null | undefined{
  let cstr = str.toLowerCase()
    .split('')
    .map((c) => c.charCodeAt(0))
    .sort((a, b) => a - b)
    .filter(n => !(n < 97 || n > 122));
  let iterations = cstr.length;

  for (let i = 0; i < iterations; i++) {
    if (cstr[i + 1] && cstr[i + 1] - 1 !== cstr[i]) {
      return String.fromCharCode(cstr[i] + 1);
    }
  }

  return undefined;
}
console.log(missingLetters("bce"));
console.log(missingLetters("ABCE"));
console.log(missingLetters("1A##@@B=CE"));
console.log(missingLetters("abcdefghjklmno"));
console.log(missingLetters("abcdefghijklmnopqrstuvwxyz"));