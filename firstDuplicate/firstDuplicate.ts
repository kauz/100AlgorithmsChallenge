// interface uniqueNums {
//     [key:number]: number;
// }
//
// function firstDuplicate(a: number[]): number {
//     let unique: uniqueNums = {};
//
//     for (let n of a) {
//         if (unique.hasOwnProperty(n)) {
//             return n;
//         }
//         unique[n] = n;
//     }
//     return -1;
// }

function firstDuplicate(a: number[]): number {

    for (let i = 0; i < a.length; i++) {
        for (let j = i + 1; j < a.length - 1; j++) {
            if (a[i] === a[j]) {
                return a[j];
            }
        }
    }

    return -1;
}

console.log(firstDuplicate([2, 1, 3, 5, 3, 2]));
console.log(firstDuplicate([2, 4, 3, 5, 1]));
