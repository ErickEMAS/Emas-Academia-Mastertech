function iniciar(){
    var nome = prompt("Digite seu nome");
    var invertido = nome.split('').reverse().join('');

    var criar = document.createElement("h2");                 
    var novoTexto = document.createTextNode(invertido);         
    criar.appendChild(novoTexto);                             
    document.querySelector("#resultado").appendChild(criar);
}