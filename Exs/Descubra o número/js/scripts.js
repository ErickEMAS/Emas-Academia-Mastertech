function sortear(){
    var aleatorio = Math.floor(Math.random() * 49); 
    console.log(aleatorio)
    var tentativas = Number(prompt(`Digite quantas tentativas você deseja ter?`));

    for(let indice = 0; indice < tentativas; indice++){
        var palpite = Number(prompt(`Digite seu ${indice + 1}° palpite`))

        if(palpite == aleatorio && indice <= 3){
            alert(`Parabén você acertou na ${indice + 1}° tentativa!`);
            indice = tentativas;
        }else if(palpite == aleatorio){
            alert(`Parabén você acertou!`);
            indice = tentativas;
        }else if(palpite != aleatorio && indice <= 3){
            alert(`Resposta errada, ${palpite} não é o número escolhido, tente novamente`);

            let dica = confirm("Deseja uma dica?");

            if(dica = true){
                if(palpite < aleatorio){
                    alert(`O número escolhido é maior que ${palpite}`);
                }else if(palpite > aleatorio){
                    alert(`O número escolhido é menor que ${palpite}`);
                }
            }
        }else if(indice == tentativas){
            alert(`Suas ${tentativas} acabaram, o número escolhido era ${aleatorio}`);
        }

    }
}