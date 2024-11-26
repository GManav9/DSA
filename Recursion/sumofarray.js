function a(arr, n) {
  if (n == 0) {
    return 0;
  }
  return arr[n - 1] + a(arr, n - 1);
}

console.log(a([1, 2, 3, 4, 5], 5));
