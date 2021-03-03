// Assignment Code

// Targets generate button for later event listener assignment
let generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  // Calls generatePassword function for returned value
  let password = generatePassword();

  // Targets text area to display generatePassword result
  let passwordText = document.querySelector("#password");

  // 
  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

function generatePassword() {
  
  // Initializes finishedString variable at highest scope for later manipulation
  let finishedString = "";
  
  // characterLibrary object to contain base character sets
  let characterLibrary = {
    numbers: `0123456789`,
    lowercaseLetters: `abcdefghiklmnopqrstuvwxyz`,
    uppercaseLetters: `ABCDEFGHIJKLMNOPQRSTUVWXTZ`,
    specialCharacters: `!"#$%&'()*+,-./:;<=>?@[\\]^_\`{|}~`
  };

  // Variable declarations to create strings based off character combinations to pass into characterArray
  let fullCharacters = (characterLibrary.numbers + characterLibrary.lowercaseLetters + characterLibrary.uppercaseLetters + characterLibrary.specialCharacters).split("");

  let noSpecials = (characterLibrary.numbers + characterLibrary.lowercaseLetters + characterLibrary.uppercaseLetters).split("");

  let noLowercase = (characterLibrary.numbers + characterLibrary.uppercaseLetters + characterLibrary.specialCharacters).split("");

  let noUppercase = (characterLibrary.numbers + characterLibrary.lowercaseLetters + characterLibrary.specialCharacters).split("");

  let noNumbers = (characterLibrary.lowercaseLetters + characterLibrary.uppercaseLetters + characterLibrary.specialCharacters).split("");

  let specialsAndLowercase = (characterLibrary.specialCharacters + characterLibrary.lowercaseLetters).split("");

  let specialsAndUppercase = (characterLibrary.specialCharacters + characterLibrary.uppercaseLetters).split("");

  let specialsAndNumbers = (characterLibrary.specialCharacters + characterLibrary.numbers).split("");

  let lowercaseAndUppercase = (characterLibrary.lowercaseLetters + characterLibrary.uppercaseLetters).split("");

  let lowercaseAndNumbers = (characterLibrary.lowercaseLetters + characterLibrary.numbers).split("");

  let uppercaseAndNumbers = (characterLibrary.uppercaseLetters + characterLibrary.numbers).split("");

  let specialsOnly = characterLibrary.specialCharacters.split("");

  let lowercaseOnly = characterLibrary.lowercaseLetters.split("");

  let uppercaseOnly = characterLibrary.uppercaseLetters.split("");

  let numbersOnly = characterLibrary.numbers.split("");
  // END variable declarations

  /* characterArray declaration to contain different combinations for simple index access after evaluations */
  let characterArray = [fullCharacters /* 0 */, noSpecials /* 1 */, noLowercase /* 2 */, noUppercase /* 3 */, noNumbers /* 4 */, specialsAndLowercase /* 5 */, specialsAndUppercase /* 6 */, specialsAndNumbers /* 7 */, lowercaseAndUppercase /* 8 */, lowercaseAndNumbers /* 9 */, uppercaseAndNumbers /* 10 */, specialsOnly /* 11 */, lowercaseOnly /* 12 */, uppercaseOnly /* 13 */, numbersOnly /* 14 */];

  // Initial window prompt to determine password length
  let passwordLength = window.prompt("Enter how long you would like your password: 8-128 characters");
  
  // User hits "Cancel" on password length prompt
  if (!passwordLength) {
    window.alert("No number entered. Please try again.");
    finishedString = "";

  // User enters number outside of 8-128 range
  } else if (
      (Number(passwordLength) < 8) ||
      (Number(passwordLength) > 128)
    ) {
    window.alert("Number out of range! Please try again.");

  // Ensures passwordLength is within 8-128 range before proceeding
  } else if (
      (Number(passwordLength) >= 8) &&
      (Number(passwordLength) <= 128)
  ) {
    passwordLength = Number(passwordLength);

    let passwordIterator = (array, inputLength) => {
      for (let i = 0; i < inputLength; i++) {
        let randomIndex = Math.floor(Math.random() * array.length);
        finishedString += array[randomIndex].toString();
      }
    }

    // Boolean to determine if numbers are used
    let useNumbers = window.confirm("Would you like to include numbers?");

    // Boolean to determine if uppercase letters are used
    let useUpperCase = window.confirm("Would you like to include upper case letters?");

    // Boolean to determine if lowercase letters are used
    let useLowerCase = window.confirm("Would you like to include lower case letters?");

    // Boolean to determine if special characters are used
    let useSpecialCharacters = window.confirm("Would you like to include special characters?");

    // Use all characters to generate password
    if (useNumbers && 
      useUpperCase && 
      useLowerCase && 
      useSpecialCharacters) {
      passwordIterator(characterArray[0], passwordLength);

    } else if (useNumbers && 
      useUpperCase && 
      useLowerCase && 
      !useSpecialCharacters) {
      passwordIterator(characterArray[1], passwordLength);

    } else if (useNumbers && 
      useUpperCase && 
      !useLowerCase && 
      useSpecialCharacters) {
      passwordIterator(characterArray[2], passwordLength);

    } else if (useNumbers && 
      !useUpperCase && 
      useLowerCase && 
      useSpecialCharacters) {
      passwordIterator(characterArray[3], passwordLength);

    } else if (!useNumbers && 
      useUpperCase && 
      useLowerCase && 
      useSpecialCharacters) {
      passwordIterator(characterArray[4], passwordLength);

    } else if (!useNumbers && 
      !useUpperCase && 
      useLowerCase && 
      useSpecialCharacters) {
      passwordIterator(characterArray[5], passwordLength);

    } else if (!useNumbers && 
      useUpperCase && 
      !useLowerCase && 
      useSpecialCharacters) {
      passwordIterator(characterArray[6], passwordLength);

    } else if (useNumbers && 
      !useUpperCase && 
      !useLowerCase && 
      useSpecialCharacters) {
      passwordIterator(characterArray[7], passwordLength);
    
    } else if (!useNumbers && 
      useUpperCase && 
      useLowerCase && 
      !useSpecialCharacters) {
      passwordIterator(characterArray[8], passwordLength);
    
    } else if (useNumbers && 
      !useUpperCase && 
      useLowerCase && 
      !useSpecialCharacters) {
      passwordIterator(characterArray[9], passwordLength);
    
    } else if (useNumbers && 
      useUpperCase && 
      !useLowerCase && 
      !useSpecialCharacters) {
      passwordIterator(characterArray[10], passwordLength);
    
    } else if (!useNumbers && 
      !useUpperCase && 
      !useLowerCase && 
      useSpecialCharacters) {
      passwordIterator(characterArray[11], passwordLength);
    
    } else if (!useNumbers && 
      !useUpperCase && 
      useLowerCase && 
      !useSpecialCharacters) {
      passwordIterator(characterArray[12], passwordLength);
    
    } else if (!useNumbers && 
      useUpperCase && 
      !useLowerCase && 
      !useSpecialCharacters) {
      passwordIterator(characterArray[13], passwordLength);
    
    } else if (useNumbers && 
      !useUpperCase && 
      !useLowerCase && 
      !useSpecialCharacters) {
      passwordIterator(characterArray[14], passwordLength);

    // Catch all in case user says "no" to ALL options
    } else {
      window.alert("No parameters specified. Please try again.");
    }

  }

  // Ensures let password declaration under writePassword is returned a value
  return finishedString;
}