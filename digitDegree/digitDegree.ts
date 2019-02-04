function digitDegree(n: number): number {
    let count = 0;
    let curNum = n;

    if (n <= 9) {
        return count;
    } else {
        while (true) {
            count++;
            curNum = digDigit(curNum);
            if (curNum <= 9) {
                break;
            }
        }
    }

    return count;
}


function digDigit(n: number) {
    return n.toString().split('').reduce((a: any, b: any) => parseInt(a) + parseInt(b), 0);
}

console.log(digitDegree(5));
console.log(digitDegree(10));
console.log(digitDegree(91));
