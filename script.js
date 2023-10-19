// Assignment code here


// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

generateBtn.addEventListener ('click', function() {
  var userInput = prompt ('How many characters would you like the password to have in total?');
  console.log(userInput);
})




// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
