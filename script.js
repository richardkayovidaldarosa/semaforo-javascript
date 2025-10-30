//Seleciona os elementos das luzes
const luzVermelha = document.getElementById("vermelho");
const luzAmarelo = document.getElementById("amarelo");
const luzVerde = document.getElementById("verde");
// Botões
const btnVermelho = document.getElementById("btnVermelho")
const btnAmarelo = document.getElementById("btnAmarelo")
const btnVerde = document.getElementById("btnVerde")
const btnAuto = document.getElementById("btnAuto")
const btnParar = document.getElementById("btnParar")
// Variável para o modo automático
let intervalo;

function limpar(){
    luzVermelha.className = "luz";
    luzAmarelo.className = "luz";
    luzVerde.className = "luz";
}

function acenderVermelho(){
    // limpar():
    luzVermelha.classList.add("acesa", "vermelha");

}