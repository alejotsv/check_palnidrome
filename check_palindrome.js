function checkPalindrome(string) {
  let lowerCase;
  let trimmed;

  console.log(string);
  
  // Set initial phrase to lowercase
  lowerCase = string.toLowerCase();
  console.log(lowerCase);

  // Remove non-alphabetical characters (spaces, punctuation, numbers, etc.)
  trimmed = lowerCase.replace(/[^A-z]/g,"");
  console.log(trimmed);

}

let toCheck = 'Esta asfafA ASKJF ~!!!-3';

checkPalindrome(toCheck);