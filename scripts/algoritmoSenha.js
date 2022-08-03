var arrLetras = 'abcdefghijklmnopqrstuvwxyz'.split('');
var arrNumeros = '0123456789'.split('');
var arrCaracteresEspeciais = '!#$%&@'.split('');

var incluirCaractereEspecial = document.getElementById("special");
var incluirMaiusculas = document.getElementById("upperCase");
var incluirNumeros = document.getElementById("number");

function geraSenha(){
    criaVetorSorteio();
}

function criaVetorSorteio(){
    var vetorSorteio = [arrLetras];
    
    if (incluirCaractereEspecial.checked) {
        vetorSorteio = vetorSorteio[0].concat(arrCaracteresEspeciais);
    }

    if (incluirMaiusculas.checked) {
        vetorSorteio = vetorSorteio[0].concat(arrLetras);
    }



    console.log(vetorSorteio)

    


}

// function verificaCheckbox() {
//     let incluirCaractereEspecial = document.getElementById("special");
//     let incluirMaiusculas = document.getElementById("upperCase");
//     let incluirNumeros = document.getElementById("number");

//     if (incluirCaractereEspecial.checked) {
//         arrSorteio.push(arrCaracteresEspeciais);
//     }

//     if (incluirMaiusculas.checked) {
//         arrSorteio.push(arrLetras);
//     }

//     if (incluirNumeros.checked) {
//         arrSorteio.push(arrNumeros);
//     }
// }
