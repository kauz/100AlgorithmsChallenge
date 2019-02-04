function containsDuplicates(a: number[]): boolean {
    let truthy = false;

    a.sort((a, b) => a - b).forEach((n: number, i: number, arr: number[]) => {
        if (n === arr[i + 1]) {
            truthy = true;
        }
    });

    return truthy;
}

console.log(containsDuplicates([1, 2, 3, 1]));
console.log(containsDuplicates([3, 1]));
