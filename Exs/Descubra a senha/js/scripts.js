function sortear(){
    var numero = Math.floor(Math.random() * 10);

    return numero;
}

function iniciar(){
    var numeros = [] 
        for(let ind = 0; ind < 5; ind++){
            numeros.push(sortear()) 
        }
    var senha= "";

    for(let indi = 0; indi < 5; indi++){
        senha += numeros[indi]
        
    }

    console.log(numeros, senha)

    
    

    for(let indice = 10; indice > 0; indice--){
        console.log(indice)
        var palpite = prompt("Digite o seu palpite com 5 digitos");
        var senhaDividida = palpite.split("");

        if(palpite == senha){
            alert(`Você acertou ${palpite} é a senha criada!`)
            indice = -1;
        }else{
            var saida = "";
            
            console.log(senhaDividida, palpite)
            for(let i = 0; i < 5; i++){
                if(senhaDividida[i] == numeros[i]){
                    saida += "O";
                }else if(senhaDividida[i] != numeros[i]){
                    var existe = false;
                    for(let e = 0; e < senhaDividida.length; e++){
                        if(senhaDividida[i] == numeros[e]){
                            saida += "_";
                            existe = true
                        }
                    }
                    if(existe == false){
                        saida += "X";
                    }
                }
            }
    
            if(indice > 0){
                alert(`Senha incorreta ${palpite} não é a senha criada, tente novamente! [Dica] ${saida}`)
            } else{
                alert(`Número de tentativas esgotado a senha correta era ${senha}`)
            }
        }

    }
    
    
}