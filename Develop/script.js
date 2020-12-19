// Assignment Code
var generateBtn = document.querySelector('#generate');



// Write password to the #password input
function writePassword() {  
  var password = generatePassword();
  var passwordText = document.querySelector('#password');

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener('click', writePassword);

function generatePassword(){



        // Possible password options
          var lowerCaseArray = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z']
          var upperCaseArray = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z']
          var numberArray = [0,1,2,3,4,5,6,7,8,9]
          var specialCharacterArray =  ['!',',','@','#','$','%','^','&','*']
          
          // confirms used to create a popup prompting users to select OK(true) or Cancel (false)
          var length = prompt('How many characters do you want your password to be?');
          var shouldIncludeLower = confirm('Do you want password to contain lowercase characters?');
          var shouldIncludeUpper = confirm('Do you want password to contain uppercase characters?');
          var shouldIncludeNumbers = confirm('Do you want password to contain numbers?');
          var shouldIncludeSpecial = confirm('Do you want password to contain special characters?');
              

          //empty array to concat all of userinputs confirmed options to
         var userInput = []

         // empty array for random to be stored
         var randomizedPassword = []
        
          // concat() method used to combine arrays and returns a new array
          //if user selects include lower case letters, add lowerCaseArry to userInput array
          if (shouldIncludeLower = true) {
            userInput = userInput.concat(lowerCaseArray);
          }
          //if user selects upper case letters, add upperCaseArry to userInput array
          if (shouldIncludeUpper = true) {
            userInput = userInput.concat(upperCaseArray);
          }
          //if user selects include lower case numbers, add numbersArray to userInput array
          if (shouldIncludeNumbers = true) {
            userInput = userInput.concat(numberArray);
          }
          //if user selects include special case characters, add specialCharacterArray to userInput array
          if (shouldIncludeSpecial = true) {
            userInput = userInput.concat(specialCharacterArray);
          }
        
          // For loop to run the code over again until the amount the user inputs to achieve desired password length.
          // randomNumber uses math.floor to round any possible decimal index that math.random() * userInput.length may push out. -1 to take into account that index reference always starts at 0
          // temporary is created to temporarily randomized array
          // .push is used to add temporary onto the empty randomizedPassword array
          for (var i = 0; i < length; i++){
              var randomNumber = Math.floor(Math.random() * userInput.length -1)
              var temporary = userInput[randomNumber]
              randomizedPassword.push(temporary);
          }

          console.log(randomizedPassword)
}