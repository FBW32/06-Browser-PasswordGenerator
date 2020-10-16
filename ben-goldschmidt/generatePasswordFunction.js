/*
# Password Generator

Description:

- This app generates passwords.
- There should be a Generate Password button which the user can click to show a new password using all letters and different characters. 
- By default, the password generated should use mixed cases (both lowercase and uppercase).

Create a password generator WebApp with the following instructions:

// –––––––––– Function Creation ––––––––––
1. Use the constant "charset" in your function (move it there). It contains all characters to use.
    const charset = 'abcdefghijklmnopqrstuvwxyz0123456789!§$%&/()=?#,;.:-_';
2. Your function should have 2 arguments:
   - length (Number) The length of the password
   - mixedCase (Boolean) Whether or not to use mixed cases (lowercase + uppercase)
3. If the second argument is true, use uppercase for every third character.
4. Use the function `getRandomInt()` to generate random numbers where you need them.

function generatePassword (length, mixedCase){
    if(mixedCase === true){
        if(i % 3 === 0){
            string.toUpperCase()
        }
        else{
            string.toLowerCase()
        }
    }
}

// –––––––––– Browser Integration ––––––––––
5. Register an onClick event for the button to generate a new password.
6. Update the generated password inside of the "output" element.
7. Generate the first password as soon as the page is loaded, using a default length of 20.



Examples for generated passwords: - 876FocMkcCv98teXc(Ov - %lfXcrLt-#ke3r6R5§-? - Nd1Z\$yRx

Bonus version: 
1. Add an input field to define the length of the password. 

2. Add a checkbox to define if the password should use mixed cases. 

3. Generate a new password on change of the input elements.

4. **Optional:** Free free to use Bootstrap for styling.

> Hint: Refer to the representation below, for an idea of what your result should look like.

![demo](demo.gif)
*/

// length <= 20
// mixedCase --> boolean

function generatePassword (lengthInput, mixedCase){
    const charset = 'abcdefghijklmnopqrstuvwxyz0123456789!§$%&/()=?#,;.:-_';

    // –––––––––– Length check ––––––––––
    if (lengthInput > 20){
        return 'Your password needs to be less than 20 characters';
    }
    if(lengthInput < 6) {
        return `Your password needs to be at least 6 characters`;
    }

    // –––––––––– Boolean check ––––––––––
    if (mixedCase === undefined) {
        return `Please check to have either mixed case or unmixed cases letters`;
    }

    // –––––––––– Empty password string ––––––––––
    let generatedPassword = "";
    for (let i = 1, n = charset.length; i <= lengthInput; ++i) {
        if(mixedCase === true){
            if(i % 3 === 0){
                generatedPassword += charset.charAt(Math.floor(Math.random() * n)).toUpperCase()
            }
            else{
                generatedPassword += charset.charAt(Math.floor(Math.random() * n)).toLowerCase();
            }
        } 
        else {
            generatedPassword += charset.charAt(Math.floor(Math.random() * n));
        }
    }
    return generatedPassword;
}
console.log()
console.log("Boolean --> True")
console.log(generatePassword(20, true))
console.log()
console.log("Boolean --> False")
console.log(generatePassword(20, false))
console.log()
console.log("Boolean --> undefined")
console.log(generatePassword(20, undefined))
console.log()
console.log("Length --> Too long")
console.log(generatePassword(21, true))
console.log()
console.log("Length --> Too short")
console.log(generatePassword(4, false))
console.log()