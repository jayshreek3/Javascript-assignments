/*
  Implement a function `isPalindrome` which takes a string as argument and returns true/false as its result.
  Note: the input string is case-insensitive which means 'Nan' is a palindrome as 'N' and 'n' are considered case-insensitive.
*/

function isPalindrome(str) {
  if(str === ''){
    return true;
  }
  const sortedStr = str.toLowerCase();
  for(let i =0; i<sortedStr.length/2; i++){
    
  if(sortedStr[i] === sortedStr[sortedStr.length-1-i]){
    return true; // palindrome
  }
}

  return false;
}

module.exports = isPalindrome;
