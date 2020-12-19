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
          var shouldIncludeLower = confirm('Do you want password to contain lowercase characters?');
          var shouldIncludeUpper = confirm('Do you want password to contain uppercase characters?');
          var shouldIncludeNumbers = confirm('Do you want password to contain numbers?');
          var shouldIncludeSpecial = confirm('Do you want password to contain special characters?');

          //empty array to concat userInput data to
          var userInput = []

          // concat() method used to combine arrays and returns a new array
          //if user selects include lower case letters, add lowerCaseArry to new array
          if (shouldIncludeLower = true) {
          userInput = userInput.concat(lowerCaseArray);
          }
          //if user selects upper case letters, add upperCaseArry to new array
          if (shouldIncludeUpper = true) {
          userInput = userInput.concat(upperCaseArray);
          } 
          //if user selects include lower case numbers, add numbersArray to new array
          if (shouldIncludeNumbers = true) {
          userInput = userInput.concat(numberArray);
          }
          //if user selects include special case characters, add specialCharacterArray to new array
          if (shouldIncludeSpecial = true) {
          userInput = userInput.concat(specialCharacterArray);
          }    
          // logs all possible options based off of userinput
          console.log(userInput);
        }        