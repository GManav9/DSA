//  Sort the Array with any sorting Algorithm

let Input = [5, 6, 8, 7, 4, 6, 3, 9, 2, 1];

for (let x = 0; x < Input.length - 2; x++) {
  let min = x;
  for (let i = x + 1; i < Input.length; i++) {
    if (Input[i] < Input[min]) {
      min = i;
    }
  }
  let temp = Input[min];
  Input[min] = Input[x];
  Input[x] = temp;
}

console.log(Input);
