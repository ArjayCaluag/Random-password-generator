# **Random Password Generator**

The purpose of this project is to put our knowledge of Javascript to use. We are given a starter file and it's our job to get the password generator up and running while following the guidelines provided. I was able to complete this project with the use of arrays, conditional statements, and built-in Javascript methods. 

<br><br>

![image](https://user-images.githubusercontent.com/52800632/102680589-76300a80-416e-11eb-98e8-f0d29dc3859b.png)

# **Installation**


Link javascript to html file
```html
<script src="script.js"></script>
```

Clone repository from github, track changes and push onto your own Github Repository.

```bash
git clone [sshkeyurl]
```

```bash
git add .
```
```bash
git commit -m "message"
```
```bash
git push origin main
```

# **Built With**

<ul>
    <li> Javascript - scripting language that allows implementation of complex web features
    <li> HTML - The standard markup language for web pages </li>
    <li> CSS - used to describe the presentation of markup langauges such as HTML </li>
</ul>

# **Code Snippet**

```js
// Must select between 8-128 characters, otherwise stops function
        var length = prompt('Password length can be between 8-128 chracters, how many characters would you like it to be?');
          if (length < 8 || length > 128) {
          alert("Password length must be 8-128 characters");
          return;
          }
```
```js
 
        // concat() method used to combine arrays and returns a new array
          //if user selects include lower case letters, add lowerCaseArry to userInput array
          if (shouldIncludeLower == true) {
            userInput = userInput.concat(lowerCaseArray);
          }
          //if user selects upper case letters, add upperCaseArry to userInput array
          if (shouldIncludeUpper == true) {
            userInput = userInput.concat(upperCaseArray);
          }
          //if user selects include lower case numbers, add numbersArray to userInput array
          if (shouldIncludeNumbers == true) {
            userInput = userInput.concat(numberArray);
          }
          //if user selects include special case characters, add specialCharacterArray to userInput array
          if (shouldIncludeSpecial == true) {
            userInput = userInput.concat(specialCharacterArray);
          }
        
```
# **Deployed Link**

https://arjaycaluag.github.io/random-password-generator/

# **Author**

Ron-Arjay Caluag

[Linkedin](https://www.linkedin.com/in/ron-arjay-caluag-00b29b182/)
<br>
[Github](https://github.com/ArjayCaluag)

# **License**

The MIT License (MIT)

Copyright (c) 2011-2020 Twitter, Inc.

Copyright (c) 2011-2020 The Bootstrap Authors

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
