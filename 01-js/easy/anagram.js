/*
  Write a function `isAnagram` which takes 2 parameters and returns true/false if those are anagrams or not.
  What's Anagram?
  - A word, phrase, or name formed by rearranging the letters of another, such as spar, formed from rasp.
*/

function isAnagram(str1, str2){
  //@dev convert strings to lowercase.
  let Str1 = str1.toLowerCase();
  let Str2 = str2.toLowerCase();
  let Char = false;
  //@dev compare the String lengths.
  if(Str1.length !== Str2.length){
    return false;
  }
  //@dev Itererate over each element of string and compare.
  for(let i=0; i <= Str1.length; i++){

    for(let j=0; j<= Str1.length; j++)
    {
      if(Str1[i] === Str2[j]){
        Char = true;
        break;
      }
    }
    if(!Char){
      return false;
    }
  }
  return Char;
}

module.exports = isAnagram;
