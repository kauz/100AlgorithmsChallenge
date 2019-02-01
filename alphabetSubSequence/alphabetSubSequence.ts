function alphabetSubsequence(s: string): boolean {
    let arr: number[] = [];

    s.toLowerCase().split('').forEach((char: string, idx: number) => {
        arr[idx] = char.charCodeAt(0);
    });

    for (let i: number = 0; i < arr.length - 1; i++) {
        if (arr[i] < 97 || arr[i] > 122 || arr[i] >= arr[i + 1]) {
            return false;
        }
    }

    return true;
}
console.log(alphabetSubsequence('zab'));
console.log(alphabetSubsequence('effg'));
console.log(alphabetSubsequence('cdce'));
console.log(alphabetSubsequence('ace'));
console.log(alphabetSubsequence('bxz'));
