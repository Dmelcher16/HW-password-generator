// Assignment Code
var generateBtn = document.querySelector("#generate");

function writePassword() { 
  var passwordText = document.querySelector("#password");
  var password = generatePW();

  passwordText.value = password;
}
  

document.getElementById("generate").onclick = function () {
  clickGp();
};

function generatePW() {
  var rndNumber = "0123456789"
  var rndSpecial = "!@#$%^&*()_+"
  var rndUpper = "ABCDEFGHIJKLMNPQRSTUVWXYZ"
  var rndLower = rndUpper.toLowerCase();

  console.log(getRandomValue(generateBtn));
  console.log(getRandomValue(rndUpper));
  console.log(getRandomValue(rndLower));
  console.log(getRandomValue(rndSpecial));

}

function clickGp() {

  var options = {};

  options.generateBtn = parseInt( 
    prompt("How many characters would you like between 8 and 128?") );
    
    if(options.generateBtn < 8 || options.generateBtn > 128 || isNaN(options.length)) {
      alert("Incorrect length")
      return("Invalid parameters")
    }
    
    options.rndNumber = confirm("Would you like to use numbers in your password?");
    
    
    options.rndUpper = confirm("Would you like uppercase letters in your password?");
    
    options.rndLower = confirm("Would you like lower case letters in your password?");
    
    options.rndSpecial = confirm(
      "would you like to use special characters in your password?"
      );

      var password = "";

    for(var i = 0; i < options.generateBtn; i++) {

      if (options.rndNumber) {
        password += getRandomValue(rndNumber)
        
      }
      if (options.rndUpper) {
        password += getRandomValue(rndUpper)

      }
      if (options.rndLower) {
        password += getRandomValue(rndLower)

      }
      if (options.rndSpecial) { 
          password += getRandomValue(rndSpecial)
      }
    }
    return password.substring(0, options.generateBtn);

}

function getRandomValue(str) {
  return str[Math.floor(Math.random() * str.length)];
}

function shuffle(str) {} 


// Write password to the #password input
//function writePassword() {
// var password = generatePassword();
// var passwordText = document.querySelector("#password");

// passwordText.value = password;

//}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
