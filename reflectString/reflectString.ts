function reflectString(inputString: string): string {
  const alpabet = 'abcdefghijklmnopqrstuvwxyz'.split('');
  let inputArr = inputString.toLowerCase().split('');

  inputArr = inputArr.map((c: string) => {
    const idx = alpabet.indexOf(c);
    return idx !== -1 ? alpabet.reverse()[idx] : c;
  });

  return inputArr.join('');
}

console.log(reflectString("name"));
