let input = [1, 2, 2, 3, 3, 3];

const myMap = new Map();

for (let value of input) {
  if (myMap.has(value)) {
    myMap.set(value, myMap.get(value) + 1);
  } else {
    myMap.set(value, 1);
  }
}
console.log(myMap);
