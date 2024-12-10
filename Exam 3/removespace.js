let str = "hello world python";

function removespace(str) {
  let news = "";
  for (let i = 0; i < str.length; i++) {
    if (str[i] !== " ") {
      news += str[i];
    }
  }
  console.log(news);
}

removespace(str);
