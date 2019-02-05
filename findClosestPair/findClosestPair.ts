function findClosestPair(numbers: number[], sum: number): number {

    let distance;

    for (let i = 0; i < numbers.length; i++) {
        for (let j = 0; j < i; j++) {
            if (numbers[i] + numbers[j] === sum) {
                console.log(i, j);
                let path = Math.abs(i - j);
                if (!distance) {
                    distance = path;
                } else {
                    distance = path < distance ? path : distance;
                }
            }
        }
    }

    return distance || -1;
}

console.log(findClosestPair([1, 0, 2, 4, 3, 0], 5));
console.log(findClosestPair([1, 0, 2, 4, 3, 4], 5));
console.log(findClosestPair([1, 0, 0, 0, 0, 4], 5));
console.log(findClosestPair([2, 3, 7], 8));
