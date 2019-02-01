function alphabeticShift(inputString: string): string {

    let arr: number[] = [];
    inputString.split('').forEach((char: string, idx: number) => {
        arr[idx] = char.charCodeAt(0) + 1;
        arr[idx] = arr[idx] > 122 ? 97 : arr[idx];
    });

    return String.fromCharCode(...arr);
}

console.log(alphabeticShift('crazy'));
