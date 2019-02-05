function houseOfCats(legs: number): number[] {
    let guess: number[] = [];

    for (let i = legs; i > 0; i -= 4) {
        if (i > 0 && i % 2 === 0) {
            guess.unshift(i / 2)
        }
    }

    // all cats
    if (legs % 4 === 0) {
        guess.unshift(0);
    }


    return guess;
}

console.log(houseOfCats(8));
console.log(houseOfCats(6));
console.log(houseOfCats(2));
console.log(houseOfCats(4));
