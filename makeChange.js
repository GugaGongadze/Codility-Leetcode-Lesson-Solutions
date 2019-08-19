const coins = [10, 6, 1];

// Bottom up dynamic programming solution.
// Iteratively compute number of coins for
// larger and larger amounts of change
function makeChange(change) {
  const cache = [0, 1];
  for (let idx = 1; idx <= change; idx++) {
    let minCoins = Number.MAX_VALUE;

    // Try removing each coin from the total
    // and see which requires the fewest
    // extra coins
    for (const coin of coins) {
      if (idx - coin >= 0) {
        let currCoins = cache[idx - coin] + 1;
        minCoins = Math.min(minCoins, currCoins)
      }
    }
    cache[idx] = minCoins;
  }

  return cache[change];
}


console.log(makeChange(12))
