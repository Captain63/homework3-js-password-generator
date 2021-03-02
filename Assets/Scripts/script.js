// Assignment Code

// Targets generate button for later event listener assignment
let generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  // Calls generatePassword function for returned value
  let password = generatePassword(128);

  // Targets text area to display generatePassword result
  let passwordText = document.querySelector("#password");

  // 
  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

function generatePassword() {
  let passwordLength = window.prompt("Enter how long you would like your password: 8-128 characters", "8-128");
  passwordLength = Number(passwordLength);
  if (passwordLength >= 8 && passwordLength <= 128) {
    let startingString = window.prompt("Would you like to select a starting word? Leave blank if no.");
    let useSpecialCharacters = window.prompt("Include special characters? Y/N", "Y")
    if (
      (useSpecialCharacters === "Y") ||
      (useSpecialCharacters === "Yes") ||
      (useSpecialCharacters === "y") ||
      (useSpecialCharacters === "yes")
    ) {
      let charactersWithSpecials = `0123456789ABCDEFGHIJKLMNOPQRSTUVWXTZabcdefghiklmnopqrstuvwxyz!"#$%&'()*+,-./:;<=>?@[\\]^_\`{|}~`
      let charactersWithSpecialsArray = charactersWithSpecials.split("");
      var finishedString = "";
      for (let i = 0; i < passwordLength; i++) {
        let randomIndex = Math.floor(Math.random() * charactersWithSpecials.length);
        finishedString += charactersWithSpecialsArray[randomIndex].toString();
      }
    } else {
      let characters = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXTZabcdefghiklmnopqrstuvwxyz"
      let charactersArray = characters.split("");
      var finishedString = "";
      for (let i = 0; i < passwordLength; i++) {
        let randomIndex = Math.floor(Math.random() * characters.length);
        finishedString += charactersArray[randomIndex].toString();
      }
    }
  } else {
    window.alert("Number out of range! Please try again.");
    generatePassword();
  }

  let finishedPassword = finishedString;

  // Ensures let password declaration under writePassword is returned a value
  return finishedPassword;
}