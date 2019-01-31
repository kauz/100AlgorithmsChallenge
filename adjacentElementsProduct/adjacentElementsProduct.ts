// i've forgotten, that we need largest for adjacent numbers.
function biggestElementsProduct(inputArray: number[]): number {

    let x: number = Math.max(...inputArray);
    let y: number = 0;
    let i: number = 0;

    while (i < 2) {
        y = Math.max(...inputArray);
        inputArray = inputArray.filter(n => n !== y);
        i++;
    }

    return x * y;
}

console.log(biggestElementsProduct([3, 6, -2, -5, 7, 3, 9]));

function adjacentElementsProduct(inputArray: number[]): number {
    let largestProduct = inputArray[0] * inputArray[1];

    for (let i = 1; i < inputArray.length - 1; i++) {
        let product = inputArray[i] * inputArray[i + 1];

        largestProduct = largestProduct < product ? product : largestProduct;
    }

    return largestProduct;
}

console.log(adjacentElementsProduct([3, 6, -2, -5, 7, 3, 9]));
