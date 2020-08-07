// Assignment Code
var generateBtn = document.querySelector("#generate");
var rndNumber = "0123456789";
var rndSpecial = "!@#$%^&*()_+";
var rndUpper = "ABCDEFGHIJKLMNPQRSTUVWXYZ";
var rndLower = rndUpper.toLowerCase();
var password = "";

function writePassword() {
  var passwordText = document.querySelector("#password");
  console.log(password);
  passwordText.value = password;
}

function generatePW() {
  console.log(getRandomValue(rndUpper));
  console.log(getRandomValue(rndLower));
  console.log(getRandomValue(rndSpecial));
  console.log(getRandomValue(rndNumber));
}

function clickGp() {
  var options = {};

  options.length = parseInt(
    prompt("How many characters would you like between 8 and 128?")
  );

  if (options.length < 8 || options.length > 128) {
    alert("Incorrect length");
    return;
  }

  options.rndNumber = confirm(
    "Would you like to use numbers in your password?"
  );

  options.rndUpper = confirm(
    "Would you like uppercase letters in your password?"
  );

  options.rndLower = confirm(
    "Would you like lower case letters in your password?"
  );

  options.rndSpecial = confirm(
    "would you like to use special characters in your password?"
  );

  for (var i = 0; i < options.length; i++) {
    if (options.rndNumber) {
      password += getRandomValue(rndNumber);
    }
    if (options.rndUpper) {
      password += getRandomValue(rndUpper);
    }
    if (options.rndLower) {
      password += getRandomValue(rndLower);
    }
    if (options.rndSpecial) {
      password += getRandomValue(rndSpecial);
    }
  }
  console.log(options.length);
  password = password.substring(0, options.length);
  return password;
}

function getRandomValue(str) {
  return str[Math.floor(Math.random() * str.length)];
}

function shuffle(str) {}

generateBtn.addEventListener("click", function () {
  clickGp();
  writePassword();
});
