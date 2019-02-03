function centuryFromYear(year: number): number {
    let century = year / 100;
    return (
        century !== Math.floor(century)
            ? Math.floor(century) + 1
            : century
    );

}

console.log(centuryFromYear(1905));
console.log(centuryFromYear(1700));
