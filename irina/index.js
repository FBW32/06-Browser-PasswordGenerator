
let form = document.querySelector('form');
let mixedCases = document.getElementById('mixedCases');
let length = document.getElementById('length');
let output = document.getElementById('output');
output.style.cssText = "border: 1px solid grey; height: 3rem; width: 80%";
let submit = document.querySelector('button');
submit.style.cssText = "background-color: green; width: 80%; height: 2.5rem; color: #f1f1f1"

form.addEventListener('submit',(e) => {
    e.preventDefault()
    const charset = 'abcdefghijklmnopqrstuvwxyz0123456789!§$%&/()=?#,;.:-_';
    const number = +length.value;
    let password = "";
    if(mixedCases.checked) {
            let  counter = 1;
            for(let i =0; i < number ; i++) {
            let char = Math.floor(Math.random()*charset.length + 1);
            if (counter % 3 === 0) {
            password += charset.charAt(char).toUpperCase();
            counter ++;
        }
        else{
           
            password += charset.charAt(char);
            counter++;
            }
        }
           console.log(password);
        }
        else {
            for(let i =0; i < number ; i++) {
            let char = Math.floor(Math.random()*charset.length + 1);
            password += charset.charAt(char);
        }
       console.log(password);
    }
    output.innerHTML = password
})
