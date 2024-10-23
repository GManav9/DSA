// Find the maximum Element  from the Array;

let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// let maximum = 10;

let max = -Infinity;

for (let x = 0; x < arr.length; x++) {
  if (max < arr[x]) {
    max = arr[x];
  }
}

console.log(max);
