// we have one array and one Target we have to Find that Target , If target present than we have to return its index else -1
let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let target = 8;
// let output = 7;

let arr1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let target1 = 11;
// let output = -1;

let bag = -1;

// for (let x = 0; x < arr.length; x++) {
//   if (arr[x] == target) {
//     bag = x;
//   }
// }
// console.log(bag);

for (let x = 0; x < arr.length; x++) {
  if (arr1[x] == target1) {
    bag = x;
  }
}
console.log(bag);
