let q1 = [];
let q2 = [];

function check(a) {
  q2.push(a);
  while (q1.length > 0) {
    q2.push(q1.shift());
  }
  [q1, q2] = [q2, q1];
}

function pop() {
  return q1.shift();
}

check(10)
check(20)
check(30)
check(40)
check(50)

console.log(pop());
