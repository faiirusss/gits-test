function sloane(n) {
  const result = [];
  for (let i = 1; i <= n; i++) {
    const value = 1 + (i * (i - 1)) / 2;
    result.push(value);
  }
  return result;
}

console.log(sloane(5));
