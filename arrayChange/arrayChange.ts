function arrayChange(inputArray: number[]): number {

    let counter = 0;

    for (let i: number = 0; i < inputArray.length; i++) {
     for (let j: number = i + 1; j <= inputArray.length; j++) {
            if (inputArray[j] <= inputArray[i]) {
                inputArray[j] += 1;
                counter++;
            } else {
                break;
            }
        }
    }

    console.log(inputArray);
    return counter;
}

console.log(arrayChange([1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1]));


// VARIANT 2

// function arrayChange(inputArray: number[]): number {
//
//     let counter = 0;
//
//     for (let i: number = 0; i < inputArray.length; i++) {
//         if (inputArray[i] >= inputArray[i + 1]) {
//             let diff = (inputArray[i] + 1) - inputArray[i + 1];
//             inputArray[i + 1] = inputArray[i] + 1;
//             counter += diff;
//         }
//     }
//
//     console.log(inputArray);
//     return counter;
// }
