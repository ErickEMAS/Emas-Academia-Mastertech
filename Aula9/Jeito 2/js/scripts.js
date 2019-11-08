
function tirarImg (a){
    a.style.display = "none";
}

function trocarCor (a, cor){
    a.style.backgroundColor = cor;
}

function resetar(a, b, c, d){
    a.style.display = "block";
    b.style.display = "block";

    divUm.classList.toggle("div-1");
    divDois.classList.toggle("div-2");
}

function alternar(){
    imgUm.classList.toggle("img-1");
    imgDois.classList.toggle("img-2");
}

let imgUm = document.querySelector("#img-1");
let imgDois = document.querySelector(".img-2");
let divUm = document.querySelector(".div-1");
let divDois = document.querySelector(".div-2");
let reset = document.querySelector("#btn")


imgUm.onclick = function() {tirarImg(imgUm)};
imgDois.onclick = function() {tirarImg(imgDois)};

divUm.onclick = function() {trocarCor(divUm, "red")};
divDois.onclick = function() {trocarCor(divDois, "blue")};

reset.onclick = function() {resetar(imgUm, imgDois, divUm, divDois)};