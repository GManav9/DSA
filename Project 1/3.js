// Search Element in Matrix
// Write a program to search for an element in a matrix. The matrix is sorted row-wise and column-wise.

let Matrix = [
  [1, 4, 7],
  [2, 5, 8],
  [3, 6, 9],
];

let target = 6;

for (let i = 0; i < Matrix.length; i++) {
  for (let j = 0; j < Matrix.length; j++) {
    if (Matrix[i][j] == target) {
      console.log(true);
    } else {
      false;
    }
  }
}
