let password = [];

// createPassword
function geraSenha(){
    password.length = document.getElementById('pswLeght').value;
    let  qtyPassword = document.getElementById('pswQtd').value;

    getRandomCaractere();


    // console.log(password);

}

function getRandomCaractere(){
    let lettersLowcase = 'abcdefghijklmnopqrstuvwxyz';
    let lettersUppercase = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    let numbers = '0123456789';
    let symbols = '!#$%&@';

    let conditions = checkConditions();

    switch(conditions){
        case "symbols":
            console.log("letras e simbolos");

        case "number":
            console.log("números e letras");

        case "number":
            console.log("números e letras");


            
    }
    console.log(conditions);    
}

function checkConditions(){
    let symbolsCheckbox = document.getElementById("special");
    let uppercaseCheckbox = document.getElementById("upperCase");
    let numbersCheckbox = document.getElementById("number");

    let conditions = "";

    if (symbolsCheckbox.checked) {
        conditions += "symbols"
    }

    if (numbersCheckbox.checked) {
        conditions += "number"
    }

    if (uppercaseCheckbox.checked) {
        conditions += "uppercase";
    }


    
    return conditions;
}





