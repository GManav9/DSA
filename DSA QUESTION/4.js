let arr = [1, 2, 3, 2, 4];
let target = 2;

function call() {
  for (let i = arr.length - 1; i >= 0; i--) {
    if (target == arr[i]) {
      return i;
    }
  }
}
console.log(call());
