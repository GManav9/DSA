// Reverse the Array

function Reverse(rev, arr) {
  for (let x = arr.length - 1; x >= 0; x--) {
    rev.push(arr[x]);
  }
  console.log(rev);
}
Reverse([], [1, 4, 57, 78, 97, 9]);
