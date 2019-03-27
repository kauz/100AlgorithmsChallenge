function properNounCorrection(noun: string): string {
   const nounArr = noun.toLowerCase().split('');
   nounArr[0] = nounArr[0].toUpperCase();
   return nounArr.join('');
}

console.log(properNounCorrection('pARiS'));
console.log(properNounCorrection('John'));
