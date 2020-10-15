
let output = document.querySelector("h1")

let generator = document.getElementById("generator")

let check = document.querySelector("input")

let select = document.querySelector("select")


const charset = 'abcdefghijklmnopqrstuvwxyz0123456789!§$%&/()=?#,;.:-_';


function passwordGenerator(length, mixedCase) {
let passWord="";


for (i=1; i <= length; i++) {
    if(mixedCase) {
        if (i % 3 === 0) {
            let char = Math.floor(Math.random() * charset.length);
            passWord += charset.charAt(char).toUpperCase()
        } else {
            let char = Math.floor(Math.random() * charset.length);
            passWord += charset.charAt(char)
        }
       
    } else {
        let char = Math.floor(Math.random() * charset.length);
            passWord += charset.charAt(char)
    }
   
}
return passWord;
}

output.innerHTML = passwordGenerator(20, check.checked)

select.addEventListener("change", (e)=> {
    length = e.target.value
    })

generator.onclick = () => {
    output.innerHTML = passwordGenerator(length, check.checked)
}

select.onchange = () => {
        output.innerHTML = passwordGenerator(length, check.checked)
    }