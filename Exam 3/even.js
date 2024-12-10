let input = [5, 2, 3, 4, 7, 8];
let count = 0;
for (let x = 0; x < input.length; x++) {
  if (input[x] % 2 == 0) {
    count++;
  }
}
console.log(count);
