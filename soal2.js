function denseRangking(scores, gitsScores) {
  const uniqueScores = [...new Set(scores)].sort((a, b) => b - a);

  const result = [];

  for (const gitsScore of gitsScores) {
    while (
      uniqueScores.length > 0 &&
      gitsScore >= uniqueScores[uniqueScores.length - 1]
    ) {
      uniqueScores.pop();
    }
    result.push(uniqueScores.length + 1);
  }
  return result;
}

console.log(denseRangking([100, 100, 50, 40, 40, 20, 10], [5, 25, 50, 120]));
