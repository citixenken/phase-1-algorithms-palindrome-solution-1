function reverseString(word) {
  //create an array of input strings
  // let splitWord = word.split("");

  // //reverse the array
  // let reversedWordArray = splitWord.reverse();

  // //create a reversed string from the reversed array
  // let reversedWord = reversedWordArray.join("");

  // return reversedWord;

  //shorthand
  //==========
  return word.split("").reverse().join("");
}

function isPalindrome(word) {
  // Write your algorithm here
  let reversedWord = reverseString(word);

  // return word === reversedWord;
  if (word === reversedWord) {
    return true;
  } else {
    return false;
  }
}

/* 
  Add your pseudocode here
  ========================
  reverse input string

  if reversed string is equivalent to input
    return true
  else 
    return false
*/

/*
  Add written explanation of your solution here
  ==============================================
  1. Split the word argument into individual letters. Using <split("")> will return an array.
  2. Reverse the array using the reverse bult-in function. <reverse()>
  3. Join the letters in the array into a string using the bult-in join function. <join("")>
  4. Using strict equality, compare original and reversed words. If equal, return true; else return false.
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));
}

module.exports = isPalindrome;
