function highestPalindrome(s, k) {
  const arr = s.split("");
  const n = arr.length;
  const changed = new Array(n).fill(false);

  function minPalindrome(left, right, k) {
    if (left >= right) return k;

    if (arr[left] !== arr[right]) {
      const maxDigit = arr[left] > arr[right] ? arr[left] : arr[right];
      arr[left] = arr[right] = maxDigit;
      changed[left] = changed[right] = true;
      k -= 1;
    }
    if (k < 0) return -1;
    return minPalindrome(left + 1, right - 1, k);
  }

  function maximize(left, right, k) {
    if (left > right) return;
    if (left === right) {
      if (k > 0) arr[left] = "9";
      return;
    }

    if (arr[left] !== "9") {
      const need = changed[left] || changed[right] ? 1 : 2;
      if (k >= need) {
        arr[left] = arr[right] = "9";
        k -= need;
      }
    }
    maximize(left + 1, right - 1, k);
  }

  const result = minPalindrome(0, n - 1, k);
  if (result < 0) return "-1";

  maximize(0, n - 1, result);
  return arr.join("");
}
