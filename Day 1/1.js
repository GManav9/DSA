// we have one array and one Target we have to Find that Target , If target present than we have to return its index else -1
let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let target = 8;
// let output = 7;
let bag = -1;

for (let x = 0; x < arr.length; x++) {
  if (arr[x] == target) {
    bag = x;
  }
}
console.log(bag);
