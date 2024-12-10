let str = "hello";

function reverse(str) {
  let news = "";
  for (let i = str.length - 1; i >= 0; i--) {
    news += str[i];
  }
  console.log(news);
}

reverse(str);
