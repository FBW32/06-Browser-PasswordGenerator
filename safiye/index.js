const charset = 'abcdefghijklmnopqrstuvwxyz0123456789!§$%&/()=?#,;.:-_'; 
//console.log(charset.length);//53
const alphabet=charset.slice(0,26);
console.log(alphabet);

let passwordpara=document.querySelector(".passwordpara")
let button=document.querySelector("button");
let numberbox=document.querySelector(".numberbox")
let checkbox=document.querySelector("#mixedCases")


function generatePassword(length,mixedCase){
    if (length==""){
        length=20;
    }
    //generate password
    let getRandomInt=()=>{ return  Math.floor(Math.random()*52)}
    let passwordArray=[];
    for(i=0;i<length;i++){
        
     let charToAdd=charset.charAt(getRandomInt())
     passwordArray.push(charToAdd)
    }
    let password=passwordArray.join("");

    //3. If the second argument is true, use uppercase for every third character:
    if (mixedCase==true){
        for(i=2;i<passwordArray.length;i+=3)
       {if (alphabet.includes(password.charAt(i))==true){
           let charInUppercase=password.charAt(i).toUpperCase();
           passwordArray.splice(i,1,charInUppercase);
        }
    password=passwordArray.join("");
        }
    }

    passwordpara.innerHTML=password;
}

//Generate the first password as soon as the page is loaded, using a default length of 20.
generatePassword(20,true)

button.addEventListener("click",()=>{
    //erase the last password
    passwordpara.innerHTML="";
    //define the length
    let length=numberbox.value;
    //define the mixedcase
    let mixedCase;
   checkbox.checked==true? mixedCase=true: mixedCase=false;
    generatePassword(length,mixedCase)});

//numberbox.addEventListener("change",generatePassword);
//checkbox.addEventListener("change",generatePassword);