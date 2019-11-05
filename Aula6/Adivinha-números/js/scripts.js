
var valor = 0;
var start = 1;
var end = 50;
var palpite = (start + end) /2;


//Funcitons

function addSimNao(){
    document.querySelector("#ok").style.display = "none";
    document.querySelector("#sim-nao").style.display = "flex";
    verificar();
}


function sim(){
    var valor = 1;
    console.log(valor);
}

function nao(){
    var valor = 2;
    console.log(valor);
}

function verificar(){
    document.querySelector("#frase").innerText = `O seu número é ${Math.round(palpite)}?`;
    
    if(valor == 1){
        document.querySelector("#sim-nao").style.display = "none";
        document.querySelector("#frase").innerText = `Adivinhei o número que você pensou é ${Math.round(palpite)}`;
    }
    if(valor == 2){
        document.querySelector("#frase").innerText = `Seu número é maior que ${Math.round(palpite)}?`;
        if(valor == 1){
            start = Math.round(palpite);
        }else if(valor == 2){
            end = Math.round(palpite);
        }
    }

}


