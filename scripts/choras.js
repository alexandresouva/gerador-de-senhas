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
    let lastPosition = arrCaracteres.length - 1;
    
    let sequencyOfPassword = numbersNotRepeat(password.length, password.length);
    let getCaracterers = numbersNotRepeat(password.length, arrCaracteres[lastPosition].length);
    



    console.log(sequencyOfPassword);
    console.log(getCaracterers);
    console.log(arrCaracteres);
    let x;
    let y;
    let z;
    let a;

    // for(let i = 0; i < lastPosition; i++){
    //     z = numbersNotRepeat(lastPosition, arrCaracteres[i].length);
    //     console.log(z);
    // }


    for(let i = 0; i < password.length; i++){
        x = sequencyOfPassword[i];
        y = getCaracterers[i];

        while(z < lastPosition){
            password[x] = arrCaracteres[z].substring(y, y + 1);
            z++;
        }
        
        if(password[x] == ''){
            password[x] = arrCaracteres[lastPosition].substring(y, y + 1);
        }

        //  for (let j = 0; j < lastPosition; j++){ 
            
        //     if(password[x] == ''){
        //         password[x] = arrCaracteres[lastPosition].substring(y, y + 1);
        //     } else{
        //         j--;
        //     }
        //     console.log("num 1 " + numRandom);
        //     numRandom2 = Math.floor(Math.random() * 9);

        //     consolkke.log("num 2 " + numRandom2);
        //     numRandom2 = Math.floor(Math.random() * password.length);
        //     password [numRandom2] = arrCaracteres[j].substring(numRandom, numRandom + 1);
        //     console.log(numRandom);
        // }
    }

    console.log(password);
    // let numRandom;    
    // let arrNumRandom = [Math.floor(Math.random() * lastPosition - 1)];
    // for(let i = 1; i < lastPosition - 1; i++){
    //     numRandom = Math.floor(Math.random() * lastPosition - 1);
    //         for (let j = 0; j < lastPosition -1; j++){
    //             if(numRandom != numRandom){}
    //         }
    //     }
    // }



    for(let i = 0; i < password.length; i++){
           
        if( i < lastPosition - 1){
            // for (let j = 0; j < (lastPosition - 1); j++){
                numRandom = Math.floor(Math.random() * password.length);

                // console.log("volta" + i);
                // password[i] = numRandom;
                // console.log(password);
            

                
                // if(password[numRandom] == ''){
                //     password[numRandom] = "oi";
                // } else{
                //     j--;
                // }
                // console.log("num 1 " + numRandom);
                // numRandom2 = Math.floor(Math.random() * 9);
    
                // consolkke.log("num 2 " + numRandom2);
                // numRandom2 = Math.floor(Math.random() * password.length);
                // password [numRandom2] = arrCaracteres[j].substring(numRandom, numRandom + 1);
                // console.log(numRandom);
            // }


        }
        

        // Tem um bug com letra maiúscula e caractere
        
        // if (password[i] != ''){
        //     numRandom = Math.floor(Math.random() * arrCaracteres[lastPosition - 1].length);
        //     // password [i] = arrCaracteres[lastPosition - 1].substring(numRandom, numRandom + 1);
        // }
    }
    
    // console.log(arrCaracteres);
    // console.log(lastPosition);
    // console.log(numRandom);


  
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

// console.log("Número aleatório: " + getRandomNumber(25));

function getRandomNumber(maxNumber){
    let randomNumber = Math.floor(Math.random() * maxNumber);
    return randomNumber;
}

function numbersNotRepeat (arrLength, maxNumber){
    // let arrNumbersUniques = [getRandomNumber(maxNumber)];
    
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





