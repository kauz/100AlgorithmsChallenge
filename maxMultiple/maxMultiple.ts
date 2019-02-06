function maxMultiple(divisor: number, bound: number): number  {
  // 1st solution

  // let n = divisor;
  //
  // for (let i = bound; i > 0; i--) {
  //   if(i % divisor === 0) {
  //     return i;
  //   }
  // }
  //
  // return n;


  // 2nd solution

  let remainder = bound % divisor;
  return bound - remainder;
}

console.log(maxMultiple(3,10));
