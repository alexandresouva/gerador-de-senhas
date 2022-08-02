// var senha = 

function pswGenerate(){
    let tamanhoSenha = document.getElementById('pswLeght').value;
    let qntSenhas = document.getElementById('pswQtd').value;  

    let senha = [];
    senha.length = tamanhoSenha;
    
    for(i = 0; i < senha.length; i++){
        console.log(senha.length);
        // Resolver bug com o loop infinito
        senha[i] = sorteiaLetra();
    }


    // // Converte para letras maiúsculas
    // for(i = 0; i < arrLetras.length; i++){
    //     arrLetras[i] = arrLetras[i].toUpperCase();
    // }

    // Sorteia letras
    for(i = 0; i < senha.length; i++){
        console.log(i)
        let caractere = sorteiaNumero();
        senha[i] = caractere;
    }

    // console.log(sorteiaCaractereEspecial());
    // console.log(sorteiaNúmero());



    console.log(senha);


    // let arrSenhas = [];
    // arrSenhas.length = qntSenhas;
}

function sorteiaCaractereEspecial(){
    let arrCaracteresEspeciais = ' !#$%&@'.split('');
    for(i = 0; i < 1; i++){
        let caractere = Math.floor(Math.random() * arrCaracteresEspeciais.length);
        caractere = arrCaracteresEspeciais[caractere];
    }
    return caractere;
}

function sorteiaNumero(){
    let arrNumeros = '0123456789'.split('');
    for(i = 0; i < 1; i++){
        let caractere = Math.floor(Math.random() * arrNumeros.length);
        caractere = arrNumeros[caractere];
    }
    return caractere;
}

function sorteiaLetra(){
    let arrLetras = 'abcdefghijklmnopqrstuvwxyz'.split('');
    
    for(i = 0; i < 1; i++){
        let caractere = Math.floor(Math.random() * arrLetras.length);
        caractere = arrLetras[caractere];
    }
    return caractere;
}