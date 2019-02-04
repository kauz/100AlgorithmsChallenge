function fancyRide(l: number, fares: number[]): string {
    const BONUS_MONEY = 20;
    const RIDES: string[] = ["UberX", "UberXL", "UberPlus", "UberBlack", "UberSUV"];

    let index = 0;

    fares.forEach((fare, i, arr) => {
        if (fare === Math.max(...arr.filter(n => n * l < BONUS_MONEY))) {
            index = i;
        }
    });

    return RIDES[index];
}


// function fancyRide(l: number, fares: number[]): string {
//     const BONUS_MONEY = 20;
//     const RIDES: string[] = ["UberX", "UberXL", "UberPlus", "UberBlack", "UberSUV"];
//
//     for (let i = fares.length - 1; i >= 0; i--) {
//         if (fares[i] * l <= BONUS_MONEY) {
//             return RIDES[i];
//         }
//     }
//
// }


console.log(fancyRide(30, [0.3, 0.5, 0.7, 1, 1.3]));
