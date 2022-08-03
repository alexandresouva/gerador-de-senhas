var arrLetras = 'abcdefghijklmnopqrstuvwxyz'.split('');
var arrNumeros = '0123456789'.split('');
var arrCaracteresEspeciais = '!#$%&@'.split('');
var saidaSenhas = document.getElementById("answer");

var senha = [];
var imprimeSenha = '';

function geraSenha() {
    let tamanhoSenha = document.getElementById('pswLeght').value;
    let qntSenhas = document.getElementById('pswQtd').value;

    senha.length = tamanhoSenha;

    // for (let i = 0; i < senha.length; i++) {
    //     senha[i] = sorteiaLetra();
    // }

    verificaCheckbox();
    sorteiaCaractere()

    imprimeSenha = '';
    // console.log(senha);

}

function sorteiaCaractere(){    
    let temNumero;
    let temCaractereEspecial;
    let temLetraMaiuscula;

    // while (){

    // }
    for(let i = 0; i < senha.length; i++){
        let numRandom = Math.floor(Math.random() * arrSorteio.length);
        var caractere = Math.floor(Math.random() * arrSorteio[numRandom].length);
        caractere = arrSorteio[numRandom][caractere];
        senha [i] = caractere;
        imprimeSenha += caractere;
    }  

    saidaSenhas.value = imprimeSenha;

    console.log(senha);

    // for(let i = 0; i < senha.length; i++){

    //     console.log(typeof(senha[i]));
    // }
}

function verificaCheckbox() {
    let incluirCaractereEspecial = document.getElementById("special");
    let incluirMaiusculas = document.getElementById("upperCase");
    let incluirNumeros = document.getElementById("number");

    arrSorteio = [arrLetras];

    if (incluirCaractereEspecial.checked) {
        arrSorteio.push(arrCaracteresEspeciais);
    }

    if (incluirMaiusculas.checked) {
        arrSorteio.push(arrLetras);
    }

    if (incluirNumeros.checked) {
        arrSorteio.push(arrNumeros);
    }

    console.log(arrSorteio);
}

function sorteiaCaractereEspecial() {

    
    for (let i = 0; i < 1; i++) {
        var caractere = Math.floor(Math.random() * arrCaracteresEspeciais.length);
        caractere = arrCaracteresEspeciais[caractere];
    }
    return caractere;
}
