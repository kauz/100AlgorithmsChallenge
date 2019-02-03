function arrayConversion(inputArray: number[]): number {

    let even = false;

    while (inputArray.length !== 1) {
        let i: number = 0;

        if (even) {

            for (i = 0; i < inputArray.length - 1; i++) {
                inputArray[i] *= inputArray[i + 1];
                inputArray.splice(i + 1, 1);
            }
            even = !even;

        } else {

            for (i = 0; i < inputArray.length - 1; i++) {
                inputArray[i] += inputArray[i + 1];
                inputArray.splice(i + 1, 1);
            }
            even = !even;

        }
    }

    return inputArray[0];

}

console.log(arrayConversion([1, 2, 3, 4, 5, 6, 7, 8]));
