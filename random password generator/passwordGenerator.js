
function generatePassword(){

        const length = document.getElementById("passwordLength");
        const lowerCase = document.getElementById("includeLowercase");
        const upperCase = document.getElementById("includeUppercase");
        const number = document.getElementById("includeNumber");
        const Symbols = document.getElementById("includeSymbols");

        const passwordLength = Number(length.value);
        const includeLowercase = lowerCase.checked;
        const includeUppercase = upperCase.checked;
        const includeNumber = number.checked;
        const includeSymbols = Symbols.checked;

        const lowerCaseChars = "abcdefghijklmnopqrstuvwxyz";
        const upperCaseChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
        const numberChars = "0123456789";
        const symbolChars = "!@#$%^&*=_+";

        let allowedChars = "";
        let password = "";

        allowedChars += includeLowercase ? lowerCaseChars :"";
        allowedChars += includeUppercase ? upperCaseChars :"";
        allowedChars += includeNumber ? numberChars :"";
        allowedChars += includeSymbols ? symbolChars :"";

        if(passwordLength <=0){
            return `password length must be atleast 1`
        }
        if(allowedChars.length === 0){
            return `Atleast 1 set of character need to be selected`;
        }

        for(let i=0;i<passwordLength;i++){
            const index = Math.floor(Math.random() * allowedChars.length);
            password += allowedChars[index];
        }

    return password;
}


const passwBtn = document.getElementById("passwBtn");


passwBtn.onclick = function(){
    const result = document.getElementById("result");
    const password = generatePassword();
    result.textContent = password;
    
} 




