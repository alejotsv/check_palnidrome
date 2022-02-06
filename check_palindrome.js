function checkPalindrome(string) {
  let isPalindrome = true;
  let lowerCase;
  let trimmed;
  
  lowerCase = string.toLowerCase();  
  trimmed = lowerCase.replace(/[^A-z]/g,"");

  // declare variable to hold number of characters to compare
  let j;

  // compare all characters if the length is even
  if (trimmed.length%2 == 0){
    j = trimmed.length/2;
    for (let i=0; i<j; i++){
      if (trimmed[i]!==trimmed[trimmed.length-1-i]){
        isPalindrome = false;
        console.log(`${trimmed[i]} is different from trimmed[trimmed.length-1-i])`);
        console.log(`"${string}" is not a palindrome`);
        break;
      } else {
        console.log(`${trimmed[i]} = ${trimmed[trimmed.length-1-i]}`);
      }
    }

  // compare all characters except the one in the middle if the length is odd 
  } else {
    j = (trimmed.length - 1)/2;
    console.log(j);
    for (let i=0; i<j; i++){
      if (trimmed[i]!==trimmed[trimmed.length-1-i]){
        isPalindrome = false;
        break;
      } 
    }
  }

  if(isPalindrome == true){
    console.log(`"${string}" is a palindrome!`);
  }

}

let toCheck = 'Arepera!!!?';

checkPalindrome(toCheck);