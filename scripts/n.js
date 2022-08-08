var opcoesSenha;
var senha = [];
var arrSorteia = [];

function geraSenha() {
    let tamanhoSenha = document.getElementById('pswLeght').value;
    let qntSenhas = document.getElementById('pswQtd').value;

    senha.length = tamanhoSenha;

    for (let i = 0; i < senha.length; i++) {
        senha[i] = sorteiaLetra();
    }

    verificaCheckbox();
    algoritmoSenha();

    // switch (opcoesSenha) {
    //     case 0:
    //         for (let i = 0; i < senha.length; i++) {
    //             senha[i] = sorteiaLetra();
    //         }
    //         break;

    //     case 1:
    //         for (let i = 0; i < senha.length; i++) {
    //             senha[i] = sorteiaLetra();
    //             senha[i] = senha[i].toUpperCase();
    //         }

    //     case 2:
    //         console.log("Opção 2");
    //         break;

    //     case 3:
    //         console.log("Opção 3");
    //         break;

    //     default:
    //         console.log("Opção inválida");
    //         break;

    // }
    console.log(senha);



    // // Converte para letras maiúsculas
    // for(i = 0; i < arrLetras.length; i++){
    //     arrLetras[i] = arrLetras[i].toUpperCase();
    // }

    // // Sorteia letras
    // for(i = 0; i < senha.length; i++){
    //     let caractere = Math.floor(Math.random() * arrLetras.length);
    //     senha[i] = arrLetras[caractere];
    // }

    // console.log(sorteiaCaractereEspecial());
    // console.log(sorteiaNúmero());


    // console.log(senha);


    // let arrSenhas = [];
    // arrSenhas.length = qntSenhas;
}

function sorteiaCaractereEspecial() {
    let arrCaracteresEspeciais = ' !#$%&@'.split('');
    for (let i = 0; i < 1; i++) {
        var caractere = Math.floor(Math.random() * arrCaracteresEspeciais.length);
        caractere = arrCaracteresEspeciais[caractere];
    }
    return caractere;
}

function sorteiaNúmero() {
    let arrNumeros = '0123456789'.split('');
    for (let i = 0; i < 1; i++) {
        var caractere = Math.floor(Math.random() * arrNumeros.length);
        caractere = arrNumeros[caractere];
    }
    return caractere;
}

function sorteiaLetra() {
    let arrLetras = 'abcdefghijklmnopqrstuvwxyz'.split('');
    for (let i = 0; i < 1; i++) {
        var caractere = Math.floor(Math.random() * arrLetras.length);
        caractere = arrLetras[caractere];
    }
    return caractere;
}

function verificaCheckbox() {
    let incluirCaractereEspecial = document.getElementById("special");
    let incluirMaiusculas = document.getElementById("number");
    let incluirNumeros = document.getElementById("upperCase");

    opcoesSenha = 0;

    if (incluirCaractereEspecial.checked) {
        arrSorteia.push = sorteiaCaractereEspecial;
        console.log(arrSorteia)
    }

    if (incluirMaiusculas.checked) {
        opcoesSenha++;
    }

    if (incluirNumeros.checked) {
        opcoesSenha++;
    }
}

function algoritmoSenha(){
    let x = 0;
    let y = 0;
    let z = 0; 

    for(let i = 0; i < opcoesSenha.length; i++){

    }

    switch (opcoesSenha) {
        case 0:
            for (let i = 0; i < senha.length; i++) {
                senha[i] = sorteiaLetra();
            }
            break;

        case 1:
            for (let i = 0; i < senha.length; i++) {
                // while ((x + y) != senha.length){
                //     x = Math.floor(Math.random() * 3) + 1;
                //     y = Math.floor(Math.random() * 20) + 1;
                // }
                // console.log(`x = ${x} e y ${y}`);
                senha[i] = sorteiaCaractereEspecial();
            }

        case 2:
            for (let i = 0; i < senha.length; i++) {
                senha[i] = sorteiaNúmero();
            }
            break;

        case 3:
            for (let i = 0; i < senha.length; i++) {
                senha[i] = sorteiaLetra();
                senha[i] = senha[i].toUpperCase();
            }
            break;

        default:
            console.log("Opção inválida");
            break;

    }
}