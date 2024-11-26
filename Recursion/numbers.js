function numbers(n) {
  if (n == 0) {
    return;
  }
  numbers(n - 1);
  console.log(n);
}
numbers(5);
