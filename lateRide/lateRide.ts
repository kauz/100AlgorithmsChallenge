function lateRide(n: number): number {
    let minutes = n % 60;
    let hours = (n - minutes) / 60;

    if (hours > 24) {
        hours = hours % 24;
    }

    return hours.toString().concat(minutes.toString()).split('').reduce((a, b) => a + Number(b), 0);
}

console.log(lateRide(240));
console.log(lateRide(808));
console.log(lateRide(8000));
