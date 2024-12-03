let arr = [1, 3, 5, 7, 9, 11];
let target = 7;
let result = -1;

for (let x = 0; x < arr.length; x++) {
  if (arr[x] == target) {
    result = x;
  }
}

console.log(result);
