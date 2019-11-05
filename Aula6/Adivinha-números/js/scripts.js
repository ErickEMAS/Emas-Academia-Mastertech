
//var valor = 0;

var resultado = false;


//Funcitons

function addSimNao(){
    document.querySelector("#ok").style.display = "none";
    document.querySelector("#frase").innerText = `.`;
    //document.querySelector("#sim-nao").style.display = "flex";
    verificar();
}

/*
function sim(){
    var valor = 1;
    console.log(valor);
}

function nao(){
    var valor = 2;
    console.log(valor);
}
*/

function verificar(){
    let start = 1;
    let end = 50;
    

    while(resultado == false){
        let palpite = (start + end) /2;
        
        let resposta1 = confirm(`O seu número é ${Math.round(palpite)}? Se sim clique em "OK" se não "cancelar"`);
        console.log(resposta1);
        if(resposta1 == true){
            document.querySelector("#frase").innerText = `Adivinhei o número que você pensou é ${Math.round(palpite)}`;
            resultado = true;
        }else{
            let resposta2 = confirm(`O seu número é maior que ${Math.round(palpite)}? Se sim clique em "OK" se não "cancelar"`);
            if(resposta2 == true){
                start = palpite;
                palpite = (start + end) /2;
            }else{
                end = palpite;
                palpite = (start + end) /2;
            }
        }
    }
    
    
    /*document.querySelector("#frase").innerText = `O seu número é ${Math.round(palpite)}?`;
    
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
    }*/

}


