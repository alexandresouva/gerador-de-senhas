let password = [];

function createPassword(){
    password.length = document.getElementById("pswLeght").value;
    let  qtyPassword = document.getElementById("pswQtd").value;

    for(let i = 0; i < password.length; i++){
        password[i] = "";
    }

    let answer = document.getElementById("answer");
    answer.value = "";
    passwordAlgorithm();

    // var arrPasswords = [];

    // for(let i = 0; i < qtyPassword; i++){
    //     passwordAlgorithm();
    //     arrPasswords.push(password);
    // }
    // answer.value = arrPasswords;

    for(let i = 0; i < password.length; i++){
        answer.value += password[i];
    }
}

function passwordAlgorithm(){
    let caracteres = checkConditions();
    let lastPosition = caracteres.length - 1;
    
    let passwordSequency = numbersNotRepeat(password.length, password.length);
    let caracteresSequency = numbersNotRepeat(password.length, caracteres[lastPosition].length);

    let pS;
    let cS;
    let enter = true;

    for(let i = 0; i < password.length; i++){

        pS = passwordSequency [i];
        cS = caracteresSequency[i];        

        if(enter){
            for(let j = 0; j < lastPosition; j++){
                pS = passwordSequency[j];
                let temp = caracteres[j].length;
                let temp2 = getRandomNumber(temp);
                password[pS] = caracteres[j].substring(temp2, temp2 + 1);
            }
            enter = false;
        }

        if(password[pS] == ""){
            password[pS] = caracteres[lastPosition].substring(cS, cS + 1);
        }
    }
}

function checkConditions(){
    
    let symbolsCheckbox = document.getElementById("special");
    let uppercaseCheckbox = document.getElementById("upperCase");
    let numbersCheckbox = document.getElementById("number");

    let lowcaseLetters = 'abcdefghijklmnopqrstuvwxyz';
    let uppercaseLetters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    let numbers = '0123456789';
    let symbols = '!#$%&@';

    let caracteres = [lowcaseLetters];

    if (symbolsCheckbox.checked) {
        caracteres.push(symbols);
    }

    if (numbersCheckbox.checked) {
        caracteres.push(numbers);
    }

    if (uppercaseCheckbox.checked) {
        caracteres.push(uppercaseLetters);
    }

    let temp = '';
    for(let i = 0; i < caracteres.length; i++){
        temp += caracteres[i];
    }

    caracteres.push(temp);

    return caracteres;
}   

function getRandomNumber(maxNumber){
    let randomNumber = Math.floor(Math.random() * maxNumber);
    return randomNumber;
}

function numbersNotRepeat (arrLength, maxNumber){    
    let randomNumber;
    let numbersNotRepeat = [];

    for (let i = 0; i < arrLength; i++){
        randomNumber = getRandomNumber(maxNumber);

        if(numbersNotRepeat.indexOf(randomNumber) == -1){
            numbersNotRepeat.push(randomNumber);
        } else {
            i--;
        }
    }

    return numbersNotRepeat;
}