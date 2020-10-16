/*
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
*/

// length <= 20
// mixedCase --> boolean

let passwordLength = document.getElementsByClassName(".passwordLength")
let mixedCaseOption = document.getElementsByClassName(".mixedCaseOption")
let submitDiv = document.getElementsByClassName(".submitDiv")

passwordLength.addEventListener("change", (e)=>{
    console.log(e.target.value)
    lengthInput=e.target.value
})

mixedCaseOption.addEventListener("checked", (e) => {
    console.log(e.target.value)
    if(e === "checked") {
        mixedCase = true
    }
})

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