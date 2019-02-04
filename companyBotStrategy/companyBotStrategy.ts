function companyBotStrategy(trainingData: number[][]): number {

    let correctAnswers = trainingData.filter((subArr: number[]) => subArr[1] === 1);

    if (!correctAnswers.length) {
        return correctAnswers.length;
    }

    let sum = 0;

    correctAnswers.forEach((subArr: number[]) => {
        sum += subArr[0];
    });

    return sum / correctAnswers.length;
}

console.log(companyBotStrategy([[3, 1], [6, 1], [4, 1], [5, 1]]));
console.log(companyBotStrategy([[4, 1], [4, -1], [0, 0], [6, 1]]));
console.log(companyBotStrategy( [[4, -1], [0, 0], [5, -1]]));
