let password = [];

// createPassword
function geraSenha(){
    password.length = document.getElementById('pswLeght').value;
    let  qtyPassword = document.getElementById('pswQtd').value;

    // checkPasswordLenght();
    passwordAlgorithm()


    // console.log(password);

}

function passwordAlgorithm(){

    let arrCaracteres = checkConditions();
    let numRandom;
    let numRandom2;
    let lastPosition = arrCaracteres.length;

    for(let i = 0; i < password.length; i++){
        for (let j = 0; j < lastPosition - 1; j++){
            numRandom = Math.floor(Math.random() * arrCaracteres[j].length);
            numRandom2 = Math.floor(Math.random() * password.length);
            password [numRandom2] = arrCaracteres[j].substring(numRandom, numRandom + 1);
            console.log(numRandom);
        }

        // Tem um bug com letra maiúscula e caractere
        
        if (password[i] != ''){
            numRandom = Math.floor(Math.random() * arrCaracteres[lastPosition - 1].length);
            password [i] = arrCaracteres[lastPosition - 1].substring(numRandom, numRandom + 1);
        }
    }
    
    console.log(arrCaracteres);
    // console.log(lastPosition);
    // console.log(numRandom);
    console.log(password);

  
}

// function checkPasswordLenght (){
//     let msgWarning;
//     if(password.length < 4){
//         msgWarning = "Uma senha tão curta não é segura! Tente com outro valor";
//         return msgWarning;
//     } else if (password.length > 20){
//         msgWarning = "Sua senha é muito longa, você pode esquecer... Tente com um número menor.";
//         return msgWarning;
//     }; 
//     console.log(msgWarning);

// };

function checkConditions(){
    
    let symbolsCheckbox = document.getElementById("special");
    let uppercaseCheckbox = document.getElementById("upperCase");
    let numbersCheckbox = document.getElementById("number");

    let lettersLowcase = 'abcdefghijklmnopqrstuvwxyz';
    let lettersUppercase = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    let numbers = '0123456789';
    let symbols = '!#$%&@';

    let arrCaracteres = [lettersLowcase];

    if (symbolsCheckbox.checked) {
        arrCaracteres.push(symbols);
    }

    if (numbersCheckbox.checked) {
        arrCaracteres.push(numbers);
    }

    if (uppercaseCheckbox.checked) {
        arrCaracteres.push(lettersUppercase);
    }

    var temp = '';
    for(let i = 0; i < arrCaracteres.length; i++){
        temp += arrCaracteres[i];
    }

    arrCaracteres.push(temp);

    return arrCaracteres;
}





