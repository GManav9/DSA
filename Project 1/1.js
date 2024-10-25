// Sum of Diagonal Elements
// Write a program to find the sum of the diagonal elements of a square matrix.

let input = [
  [2, 3, 4],
  [5, 6, 7],
  [8, 9, 1],
];
let sum = 0;

for (let i = 0; i < input.length; i++) {
  for (let j = 0; j < input[i].length; j++) {
    if (i == j) {
      sum += input[i][j];
    }
  }
}
console.log(sum);
