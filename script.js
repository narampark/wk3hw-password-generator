// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

// Options given to the user when clicked on the Generate Password button
function generatePassword() {
  var passwordLength = prompt("Choose your password length (minimum 8 characters and maximum 128 characters)."); // prompt() to give the prompt
  var 
}

// The different prompts chosen by the user to generate their password
//var passwordPrompts = {
// upperCase: ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"],
// lowerCase: ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"],

//}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

// Options given to the user when clicked on the Generate Password button
function generatePassword() {
  var passwordLength = prompt(
    "Choose your password length (minimum 8 characters and maximum 128 characters)."
  ); // prompt() to give the prompt
  var passwordUpperCase = confirm(
    "Would you like uppercase letters in your password?"
  ); // confirm() gives the option to include the character types in the password
  var passwordLowerCase = confirm(
    "Would you like lowercase letters in your password?"
  ); // confirm() gives the option to include the character types in the password
  var passwordNumeric = confirm(
    "Would you like numeric values in your password?"
  ); // confirm() gives the option to include the character types in the password
  var passwordSpecialChar = confirm(
    "Would you like special characters in your password?"
  ); // confirm() gives the option to include the character types in the password
}

