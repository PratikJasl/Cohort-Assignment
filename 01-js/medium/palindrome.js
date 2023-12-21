/*
  Implement a function `isPalindrome` which takes a string as argument and returns true/false as its result.
  Note: the input string is case-insensitive which means 'Nan' is a palindrom as 'N' and 'n' are considered case-insensitive.
*/

function isPalindrome(str) {
  str = str.toLowerCase().replace(/[^a-z0-9]/g, '');
  let str2 = str.split('').reverse().join('');
  console.log(str2);
  if(str.length != str2.length)
  {
    return false
  }
  else{
    for(let i = 0; i<str.length; i++){
      if(str[i] != str2[i])
      {
        return false;
      }
    }
    return true;
  }
}

let str = 'civic'
let result = isPalindrome(str);
console.log(result);
module.exports = isPalindrome;
