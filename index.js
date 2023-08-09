function reverse(word) {
  const wordArray = word.split('');
  const reversedWordArray = wordArray.reverse();
  const reversedWord = reversedWordArray.join('');
  return reversedWord;
}

function isPalindrome(word){
  const reversedWord = reverse(word);
  if(word === reversedWord){
    return true;
  } else{
    return false;
  }
}
/* 
  Add your pseudocode here
//write function isPalindrome, taking strng as argument//
//if the string is same word as in reverse, return true
else return false.

/*
  Add written explanation of your solution here
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));

  console.log("Expecting: false");
  console.log("=>", isPalindrome("tod"));

  console.log("Expecting: true");
  console.log("=>", isPalindrome("dad"));
}

module.exports = isPalindrome;
