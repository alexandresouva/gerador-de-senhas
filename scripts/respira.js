var arrMaiusculas = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');
var arrNumeros = '0123456789'.split('');
var arrSimbolos = '!#$%&@'.split('');
var arrSorteio = [];


var arrSenha = [];

function geraSenha() {
    let tamanhoSenha = document.getElementById('pswLeght').value;
    let qtdSenhas = document.getElementById('pswQtd').value;

    arrSenha.length = tamanhoSenha;
    console.log(arrSenha);

    verificaCheckbox();

    for(let i = 0; i < arrSenha.length; i++ ){
        var digito = Math.floor(Math.random() * 10);
        digito += arrSorteio[digito];
    }
    console.log(digito);
}

function verificaCheckbox() {
    let simbolos = document.getElementById("special");
    let numero = document.getElementById("number");
    let maiuscula = document.getElementById("upperCase");

    arrSorteio = 'abcdefghijklmnopqrstuvwxyz'.split('');
    if (simbolos.checked) {
        arrSorteio = arrSorteio.concat(arrSimbolos);
    }

    if (numero.checked) {
        arrSorteio = arrSorteio.concat(arrNumeros);
    }

    if (maiuscula.checked) {
        arrSorteio = arrSorteio.concat(arrMaiusculas);
    }
    
}

function sorteiaCaractereEspecial() {

    for (let i = 0; i < 1; i++) {
        var caractere = Math.floor(Math.random() * arrCaracteresEspeciais.length);
        caractere = arrCaracteresEspeciais[caractere];
    }
    return caractere;
}

function criaVetorSorteio(x){

    var arrMaiusculas = 'abcdefghijklmnopqrstuvwxyz'.split('');
    var arrNumeros = '0123456789'.split('');
    var arrsimbolos = '!#$%&@'.split('');


}


