let arr = [45, 15, 8, 1, 2, 37, 90];

for (let x = 0; x < arr.length - 2; x++) {
  let min = x;
  for (let i = x + 1; i < arr.length; i++) {
    if (arr[i] < arr[min]) {
      min = i;
    }
  }
  let temp = arr[min];
  arr[min] = arr[x];
  arr[x] = temp;
}

console.log(arr);
