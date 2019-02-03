// some sort of stupidity
// function avoidObstacles(inputArray: number[]): number {
//     let path: string[] = new Array(Math.max(...inputArray) + 1).join('0').split('');
//
//     for (let i = 0; i < inputArray.length; i++) {
//         path[inputArray[i] - 1] = '1';
//     }
//
//     path.push('0');
//     let possiblePoints: number[] = [];
//
//     path.forEach((n, i) => {
//         if (n === '0' && i !== path.length - 1) {
//             possiblePoints.push(i + 1);
//         }
//     });
//
//     let maxPoints: any = {};
//
//     for (let j = 0; j < possiblePoints.length; j++) {
//         let step = possiblePoints[j];
//         maxPoints[step] = 0;
//         if (step === 0) {
//             continue;
//         } else {
//             for (let k = 0; k < path.length; k += step) {
//                 let index = k - 1;
//                 if (path[index] === '0') {
//                     maxPoints[step] += 1;
//                 } else if (path[index] === '1') {
//                     maxPoints[step] = 0;
//                 }
//
//             }
//         }
//
//     }
//
//     // @ts-ignore
//     return Object.keys(maxPoints).reduce((a: number, b: number) => maxPoints[a] > maxPoints[b] ? a : b, 0);
// }

function avoidObstacles(inputArray: number[]): number | null {
    inputArray = inputArray.sort((a, b) => a - b);
    let largestVal = inputArray[inputArray.length - 1];

    for (let i = 1; i <= largestVal + 1; i++) {
        if (inputArray.every((element) => element % i !== 0)) {
            return i;
        }
    }

    return null;
}

console.log(avoidObstacles([5, 3, 6, 7, 9]));
