let arr = [
  [1, 2, 3, 4],
  [5, 6, 7, 8],
  [9, 10, 11, 12],
];

function rowSum(arr) {
  for (let x = 0; x < arr.length; x++) {
    let sum = 0;
    for (let y = 0; y < arr[x].length; y++) {
      sum += arr[x][y];
    }
    console.log(sum);
  }
}

rowSum(arr);
