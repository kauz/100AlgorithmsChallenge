function arrayPreviousLess(items: number[]): number[] {
    let resArr: number[] = [];

    for (let i = items.length - 1; i >= 0; i--) {
        for (let j = i; j >= 0; j--) {
            if (items[i] > items[j]) {
                resArr.unshift(items[j]);
                break;
            } else if (j === 0) {
                resArr.unshift(-1);
            }
        }
    }

   return resArr;
}

console.log(arrayPreviousLess([3, 5, 2, 4, 5]));
