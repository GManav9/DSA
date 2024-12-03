let arr = [29, 10, 14, 37, 13];

for (let i = 0; i < arr.length - 2; i++) {
  let min = i;

  for (let j = i + 1; j < arr.length; j++) {
    if (arr[j] < arr[min]) {
      min = j;
    }
  }
  let temp = arr[min];
  arr[min] = arr[i];
  arr[i] = temp;
}
console.log(arr);
