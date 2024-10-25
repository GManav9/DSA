// . Transpose of a MatrixGiven a matrix, write a function to find its transpose.

let Input = [
  [1, 2],
  [3, 4],
];
let New = [];

for (let i = 0; i < Input.length; i++) {
  New[i] = [];
  for (let j = 0; j < Input.length; j++) {
    if (i != j) {
      New[i][j] = Input[j][i];
    } else {
      New[i][j] = Input[i][j];
    }
  }
  console.log(New[i]);
}
