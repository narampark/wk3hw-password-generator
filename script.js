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

var upperCase = [
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "I",
  "J",
  "K",
  "L",
  "M",
  "N",
  "O",
  "P",
  "Q",
  "R",
  "S",
  "T",
  "U",
  "V",
  "W",
  "X",
  "Y",
  "Z",
]; // uppercase letters used in the password generator
var lowerCase = [
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
]; // lowercase letters used in the password generator
var numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]; // numbers used in the password generator
var specialChar = [" ", "!", "\"", "#", "$", "%", "%", "&", "'", "(", ")", "*", "+", ",", "-", ".", "/", ":", ";", "<", "=", ">", "?", "@", "[", "\\", "]", "^", "_", "`", "{", "|", "}", "~"]; // special characters used in the password generator
// backslash added before " and \ so I can put them in the array without causing an error

function generatePassword() {
  var password = ""; // variable password and assigning an empty string
  var passwordLength = prompt(
    "Choose your password length (minimum 8 characters and maximum 128 characters)."
  ); // prompt() to give the prompt
  if (passwordLength < 8 || passwordLength > 128) {
    alert(
      "Invalid Entry. Choose a password length (mininum 8 characters and maximum 128 characters)." // alert message letting the user know what the problem is (minimum 8 characters and maximum 128 characters)
    );
    return "Try again."; // try again message in the column that generates the password
  }

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

  var confirmIncluded = ""; // variable confirmIncluded and assigning an empty string
  if (passwordUpperCase == true) {
    confirmIncluded += upperCase.join("");
  } // if uppercase is included it gets added to the string of characters
  if (passwordLowerCase == true) {
    confirmIncluded += lowerCase.join("");
  } // if lowercase is included it gets added to the string of characters
  if (passwordNumeric == true) {
    confirmIncluded += numbers.join("");
  } // if numbers is included it gets added to the string of characters
  if (passwordSpecialChar == true) {
    confirmIncluded += specialChar.join("");
  } // if special characters is included it gets added to the string of characters
  if (confirmIncluded === "") {
    alert("Invalid Entry. One or more character types must be included.");
    return "Try again."; // if none of the character types are included then a try again message comes up on the column that generates the password
  }
  for (i = 0; i < passwordLength; i++) {
    var randomPassword = Math.floor(Math.random() * confirmIncluded.length);
    password += confirmIncluded.charAt(randomPassword);
  }
  return password; // links the outcome to the password variable defined in the writePassword function
}
