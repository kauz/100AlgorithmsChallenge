function fareEstimator(ride_time: number, ride_distance: number, cost_per_minute: number[], cost_per_mile: number[]): number[] {
    let res: number[] = [];

    cost_per_minute.length === cost_per_mile.length && cost_per_minute.forEach(((c, i) => {
        res.push(Number((c * ride_time + cost_per_mile[i] * ride_distance).toFixed(1)));
    }));


    return res;
}

console.log(fareEstimator(30, 7, [0.2, 0.35, 0.4, 0.45], [1.1, 1.8, 2.3, 3.5]));
