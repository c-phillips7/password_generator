// Array of special characters to be included in password
var specialCharacters = [
  '@',
  '%',
  '+',
  '\\',
  '/',
  "'",
  '!',
  '#',
  '$',
  '^',
  '?',
  ':',
  ',',
  ')',
  '(',
  '}',
  '{',
  ']',
  '[',
  '~',
  '-',
  '_',
  '.'
];
// Array of numeric characters to be included in password
var numericCharacters = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
// Array of lowercase characters to be included in password
var lowerCasedCharacters = [
  'a',
  'b',
  'c',
  'd',
  'e',
  'f',
  'g',
  'h',
  'i',
  'j',
  'k',
  'l',
  'm',
  'n',
  'o',
  'p',
  'q',
  'r',
  's',
  't',
  'u',
  'v',
  'w',
  'x',
  'y',
  'z'
];
// Array of uppercase characters to be included in password
var upperCasedCharacters = [
  'A',
  'B',
  'C',
  'D',
  'E',
  'F',
  'G',
  'H',
  'I',
  'J',
  'K',
  'L',
  'M',
  'N',
  'O',
  'P',
  'Q',
  'R',
  'S',
  'T',
  'U',
  'V',
  'W',
  'X',
  'Y',
  'Z'
];

var generateBtn = document.querySelector("#generate");

// global variables

var userChoices = {
  length: 0,
  selectedChars: [],
  upperCase: false,
  lowerCase: false,
  special: false,
  numeric: false,
};


function getUserOptions() {
/* Cheking for:
* length of password
    check if NaN
    check if integer 
    check if in range

* Ask if you want to use LowerCase

* Ask if you want to use UpperCase

* Ask if you want to use Numbers

* Ask if you want to use Special Characters
*/


// ask for length
  var length = prompt('How long would you like your password to be?')

  console.log(parseInt(length));

  // check if non numbers used
  if (isNaN(length)) {
    alert("Input is not a number");
    console.error("Input is NaN")
    return;
  }

  // check if integer
  else if (Number.isInteger(length)){
    alert("Only use integers, please only use whole numbers.");
    console.error("Input is not Integer")
    return;
  }

  // check if number is too large
  else if (!(length >= 8  && length <= 128)) {
    alert("Pick a number between 8-128 characters");
    console.error("Value out of range")
    return;
  }
  else {
    userChoices.length = length;
  }


// ask for LowerCase
  var userLowerCase = confirm('Would you like LowerCase letters')

// sign to userOptions
  if (userLowerCase){
    userChoices.selectedChars.push(lowerCasedCharacters);
    userChoices.lowerCase = true;
    }
    else userChoices.lowerCase = false;


  // ask for UpperCase
  var userUpperCase = confirm('Would you like UpperCase letters?')

// sign to userOptions
  if (userUpperCase){
  userChoices.selectedChars.push(upperCasedCharacters);
  userChoices.upperCase = true;
  }
  else userChoices.upperCase = false;


 // ask for numeric Characters
 var userNumericCharacters = confirm('Would you like numbers?')

 // sign to userOptions
   if (userNumericCharacters){
  userChoices.selectedChars.push(numericCharacters);
  userChoices.numeric = true
   }
   else userChoices.numeric = false;
   

// ask for Special Characters
var userSpecialCharacters = confirm('Would you like special characters?')

// sign to userOptions
  if (userSpecialCharacters){
    userChoices.selectedChars.push(specialCharacters);
    userChoices.special = true;
  }
  else userChoices.special = false;
  

// if all no, give error
  if(!userLowerCase && !userUpperCase && !userNumericCharacters && !userSpecialCharacters ){
    alert("Please select at least one character type")
    console.error("Character types were not selected")
  }

  console.log(userChoices);

}



function generatePassword () {
var selectedChars = userChoices.selectedChars;
var length = userChoices.length;

userChoices.selectedChars = userChoices.selectedChars.flat();

// Function to check if password contains all selected character types, if not reRolls password
  function reRoll() {

    newPassword = [];

    for (var i=0; i < userChoices.length; i++){
    newPassword.push(userChoices.selectedChars[Math.floor(Math.random() * userChoices.selectedChars.length)])
    }
    console.log(newPassword);
    
  // guarentee at least one of each type slected

    if(userChoices.lowerCase){
      if(!newPassword.some(x => lowerCasedCharacters.indexOf(x) > -1)) {
      console.log("reRoll");
        return reRoll();
      }
    }

    if(userChoices.upperCase){
      if(!newPassword.some(x => upperCasedCharacters.indexOf(x) > -1)) {
        return reRoll();
      }
    }

    if(userChoices.numeric){
      if(!newPassword.some(x => numericCharacters.indexOf(x) > -1)) {
        return reRoll();
      }
    }

    return newPassword.join('')
  }

  return reRoll();
}



function writePassword() {

  // get user optons
  var userOptions = getUserOptions()

  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);



// Alternative attempt for reRoll using for loop, did not work as checked each index individually.

/* if (userChoices.upperCase) {
  for (var i = 0; i < newPassword.length; i++) {
    if (upperCasedCharacters.indexOf(newPassword[i]) > -1) {
      break;
    }
    else{
      console.log("reroll");
      return reRoll();

    }
  }
}
if (userChoices.lowerCase) {
  for (var i = 0; i < newPassword.length; i++) {
    if (lowerCasedCharacters.indexOf(newPassword[i]) > -1) {
      break;
    }
    else{
      console.log("reroll");
      return reRoll();
    }
  }
} */