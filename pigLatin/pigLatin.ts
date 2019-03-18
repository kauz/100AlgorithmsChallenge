function pigLatin(str: string): string {
  str = str.toLowerCase();
  const consonantsReg = () => /^(?=[a-z])[^aeiouy]+/; // The letter Y can represent a consonant / semivowel (yes, yard) or a vowel (mystery, try, play).
  let consonant = consonantsReg().exec(str);

  if (!consonant) {
      str += 'way';
  } else {
    console.log(consonant);
    str = str.substr(consonant[0].length) + consonant[0] + 'ay';
  }

  return str;
}

console.log(pigLatin("glove"));
console.log(pigLatin("eight"));

