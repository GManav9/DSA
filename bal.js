let str = "({[]})";

function solve() {
  let stack = [];

  for (let x = 0; x < str.length; x++) {
    if (("(", "[", "{".includes(str[i]))) {
      stack.push(str[i]);
    } else {
      let a = stack.pop();
    }
  }
}
console.log(solve());
