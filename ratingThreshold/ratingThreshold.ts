function ratingThreshold(threshold: number, ratings: number[][]): number[] {
    const indexes: number[] = [];
    const avg = (arr: number[]): number => {
        const sum = arr.reduce((a, b) => a + b, 0);
        return sum / arr.length;
    };

    ratings.forEach((arr, idx) => {
        if (avg(arr) < threshold) {
            indexes.push(idx);
        }
    });

    return indexes;
}

console.log(ratingThreshold(3.5, 
    [[3, 4],
    [3, 3, 3, 4],
    [4],
    [1, 1]]));
