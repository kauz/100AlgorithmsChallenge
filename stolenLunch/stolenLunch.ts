function stolenLunch(note: string): string {
  let alphabet = 'abcdefghijklmnopqrstuvwxyz'.split('');
  let digits = '0123456789';
  let len = note.length;
  const decipher = note.split('');

  for (let i = 0; i < len; i++) {
    const alphIdx = alphabet.indexOf(note[i]);
    const digIdx = digits.indexOf(note[i]);
    if (alphIdx !== -1) {
      decipher[i] = digits[alphIdx] || note[i];
    } else if (digIdx !== -1) {
      decipher[i] = alphabet[digIdx] || note[i];
    }
  }

  return decipher.join('');
}

console.log(stolenLunch("you'll n4v4r 6u4ss 8t: cdja"));
