function firstDigit(inputString: string): string {
    let strArr = inputString.split('');

    for (let i = 0; i < strArr.length; i++) {
        if (!isNaN(Number(strArr[i]))) {
            return strArr[i];
        }
    }

    return '';
}

console.log(firstDigit('var_1__Int'));
console.log(firstDigit('q2q-q'));
console.log(firstDigit('0ss'));
console.log(firstDigit('sss'));
