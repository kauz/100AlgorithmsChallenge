function fermactor(n: number): number[] {

    if (n > 0) {
        for (let x = 1; x < n; x++) {
            for (let y = 1; y < x; y++) {
                if ((x - y) * (x + y) === n) {
                    return [x, y];
                }
            }
        }
    }

    return [0];
}

console.log(fermactor(15));
