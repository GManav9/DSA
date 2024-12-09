let arr = [1, 1, 2, 2, 3, 4, 4, 5];
let output = 5;

function RemoveDuplicate() {
  let i = 0;

  for (let x = 0; x < arr.length; x++) {
    if (arr[i] != arr[x]) {
      i++;
      arr[i] = arr[x];
    }
  }
  //   console.log(arr);
  return i + 1;
}
console.log(RemoveDuplicate());
