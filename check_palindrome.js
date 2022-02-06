function checkPalindrome(string) {
  let isPalindrome = true;
  let lowerCase;
  let trimmed;

  console.log(string);
  lowerCase = string.toLowerCase();
  console.log(lowerCase);
  trimmed = lowerCase.replace(/[^A-z]/g,"");
  console.log(trimmed);

  console.log(trimmed.length);

  let j;

  // compare all characters if the length is even
  if (trimmed.length%2 == 0){
    j = trimmed.length/2;
    for (let i=0; i<j; i++){
      if (trimmed[i]!==trimmed[trimmed.length-1-i]){
        isPalindrome = false;
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
      } else {
        console.log(`${trimmed[i]} = ${trimmed[trimmed.length-1-i]}`);
      }
    }
  }

}

let toCheck = 'Salas';

checkPalindrome(toCheck);