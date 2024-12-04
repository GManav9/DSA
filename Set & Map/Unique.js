let input = [1, 2, 2, 3, 4, 4, 5];
let output = [1, 2, 3, 4, 5];
let ans = [];

const myMap = new Set(input);

for (let value of myMap) {
  ans.push(value);
}
console.log(ans);
