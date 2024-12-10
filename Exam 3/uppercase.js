let str = "hello world";

function uppercase(str) {
  let news = "";
  for (let i = 0; i < str.length; i++) {
    if (i == 0 || str[i - 1] == " ") {
      news += str[i].toUpperCase();
    } else {
      news += str[i];
    }
  }
  console.log(news);
}

uppercase(str);
