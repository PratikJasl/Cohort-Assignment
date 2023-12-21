/*
  Implement a function `countVowels` that takes a string as an argument and returns the number of vowels in the string.
  Note: Consider both uppercase and lowercase vowels ('a', 'e', 'i', 'o', 'u').

  Once you've implemented the logic, test your code by running
*/

function countVowels(str) {
    let count = 0;
    let vowels = ['a', 'e', 'i', 'o', 'u'];
    str = str.toLowerCase();
    let input = str.split('');
    console.log("Input", input);
    for(let i = 0; i <input.length; i ++)
    {
      for(let j = 0; j<vowels.length; j++){
        if(input[i] == vowels[j]){
          count = count + 1;
        }
      }
    }
    return count
}

module.exports = countVowels;