function minimalNumberOfCoins(coins: number[], price: number): number {
  let counter = 0;

  for (let i = price; i > 0; i = greedySpendCoin(i, coins)) {
    counter++;
  }

  return counter;
}

function greedySpendCoin(currentStep: number, availableCoins: number[]): number {
  let maxCoin = Math.max(...availableCoins);
  if (currentStep < maxCoin) {
    availableCoins.pop();
    maxCoin = Math.max(...availableCoins);
  }

  return currentStep - maxCoin;
}

console.log(minimalNumberOfCoins([1, 2, 10], 28));
console.log(minimalNumberOfCoins([1, 10], 28));
