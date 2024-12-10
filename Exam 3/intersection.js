let arr1 = [1, 2, 3, 4];
let arr2 = [3, 4, 5, 6];

function intersection(a1, a2) {
  let newset = new Set(a1);
  let newarr = [];

  for (let char of a2) {
    {
      if (newset.has(char)) {
        newarr.push(char);
      }
    }
  }
  console.log(newarr);
}

intersection(arr1, arr2);
