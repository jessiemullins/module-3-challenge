// Assignment Code
var generateBtn = document.querySelector("#generate");

// Declare variables
var enter;
var confirmLowercase;
var confirmUppercase;
var confirmNumber;
var confirmCharacter;
var confirmPasswordlength;

//Define variables
//this section was incorrect
//var get = document.querySelector("#generate");

//get.addEventListener("click", function () {
//    ps = generatePassword();
//    document.getElementById("password").placeholder = ps;
//});


//Define variables
// Notes from tutor session: gather all info from user to generate the object. object stores all of users option selections, then return that object
// add error message if input does not match 
// need to make sure 8-128 is range not subtraction
// learned a new word-concatenate!
function generatePassword() {
var choices = [];
var passwordLength = [""];
var lowercase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var uppercase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var number = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
var character = [" ", "!", "#", "$", "%", "&", "(", ")", "*", "+", ",", "-", ".", "/", ":", ";", "<", "=", ">", "?", "@", "[", "]", "^", "_", "`", "{", "|", "}", "~"];
  console.log("Hey! You clicked the button");
  //  a. Password length between 8-128
  enter = prompt("Choose a length between 8-128 characters");
    if (!enter) {
      alert("You must enter a value here");
    } else if (enter <= 8 || enter >= 128) {
      enter = prompt("You must choose a value between 8 and 128");
    
    //  b. Lowercase, uppercase, special characters, numbers
    } else {
      confirmNumber = confirm("Do you want to include numeric characters?");
      confirmLowercase = confirm("Do you want to include lowercase characters?");
      confirmUppercase = confirm("Do you want to include uppercase characters?");
      confirmCharacter = confirm("Do you want to include special characters?");
    };

    //2. Validate for user input
    if (!confirmCharacter && !confirmNumber && !confirmUppercase && !confirmLowercase) {
      choices = alert("You must choose your criteria");
    }
// else if for all 4 
//troubleshooting: this line works
    else if (confirmCharacter && confirmNumber && confirmUppercase && confirmLowercase) {

    choices = character.concat(number, uppercase, lowercase);
    }
// else if for only 3 
//troubleshooting: this line works
    else if (confirmCharacter && confirmLowercase && confirmUppercase) {

      choices = character.concat(character, uppercase, lowercase);
    }
//troubleshooting = ts: this line works
    else if (confirmCharacter && confirmLowercase && confirmUppercase) {

      choices = character.concat(character, lowercase, uppercase);
    }
//ts: this line works
    else if (confirmCharacter && confirmUppercase && confirmNumber) {

      choices = character.concat(character, uppercase, number);
    }
//ts: this line works
    else if (confirmCharacter && confirmLowercase && confirmNumber) {

      choices = character.concat(character, lowercase, number);
    }
//ts: this line works
    else if (confirmUppercase && confirmNumber && confirmLowercase) {
      choices = (uppercase, number, lowercase);
    }

    // else if for only 2
//ts: this line works
    else if (confirmCharacter && confirmNumber) {

      choices = character.concat(character, number);
    }
//ts: this line works
    else if (confirmCharacter && confirmLowercase) {

      choices = character.concat(character, lowercase);
    }
//ts: this line works
    else if (confirmCharacter && confirmUppercase) {

      choices = character.concat(character, uppercase);
    }
//ts: this line works
    else if (confirmLowercase && confirmNumber) {

      choices = character.concat(lowercase, number);
    }
//ts: this line works
    else if (confirmLowercase && confirmUppercase) {

      choices = character.concat(lowercase, uppercase);
    }
//ts: this line works
    else if (confirmNumber && confirmUppercase) {

      choices = character.concat(number, uppercase);
    }

// else if for only 1
//ts: this line works
    else if (confirmCharacter) {

      choices = character;
    }

//ts: this line works
    else if (confirmNumber) {

      choices = number;
    }
//ts: this line works
    else if (confirmLowercase) {

      choices = lowercase;
    }
//ts: this line works
    else if (confirmUppercase) {

      choices = uppercase;
    }
// 3. Generate password based on criteria
    //pickChoices is 0 to last option, then randomizing into the array
    for (let i = 0; i < enter; i++) {
      var pickChoices = Math.floor(Math.random() * choices.length -1);
      passwordLength[i]=choices[pickChoices];
  
    }
// 4. Display generated password on the page
// Write password to the #password input
console.log(passwordLength);
    let returnPassword = passwordLength.join("");
    
return returnPassword;
}


function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}


// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);


