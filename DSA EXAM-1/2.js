let arr = [0, 1, 0, 3, 12];
let blank = [];

for (let i = 0; i < arr.length; i++) {
  if (arr[i] === 0) {
    continue;
  }
  blank.push(arr[i]);
}

for (let i = 0; i < arr.length; i++) {
  if (arr[i] !== 0) {
    continue;
  }
  blank.push(arr[i]);
}

console.log(blank);
