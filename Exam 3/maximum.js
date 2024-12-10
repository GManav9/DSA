let input = [6, 12, 3, 45, 7, 23, 9];
let max = -Infinity;
output = 45;

for (let x = 0; x < input.length; x++) {
  if (input[x] >= max) {
    max = input[x];
  }
}
console.log(max);
