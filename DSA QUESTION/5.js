let arr = [4, 7, 1, 9];
target = 5;

function call() {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] == target) {
      return true;
    }
  }
  return false;
}
console.log(call());
