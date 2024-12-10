8;
let str = "A man, a plan, a canal: Panama";

function Palindrome(str) {
  let specialChar = [":", " ", ","];
  let newStr1 = "";
  let newStr2 = "";

  for (let char of str) {
    if (specialChar.includes(char) == false) {
      newStr1 += char.toLowerCase();
    }
  }

  for (let i = str.length - 1; i >= 0; i--) {
    if (specialChar.includes(str[i]) == false) {
      newStr2 += str[i].toLowerCase();
    }
  }

  for (let j = 0; j < newStr1.length; j++) {
    if (newStr1[j] != newStr2[j]) {
      return false;
    }
  }

  return true;
}

console.log(Palindrome(str));
