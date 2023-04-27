
// Perguntar o nome ao Usuario
const user = prompt("Qual o seu nome?")
const userName = document.querySelector('.user-name');
userName.textContent = user;

//Para mudar a borda quando clicar na roupa pra selecionar imagem
function mudarBorda(elemento) {
const grupoRoupas = elemento.parentElement.parentElement;
const opcoesRoupas = grupoRoupas.querySelectorAll('.circulo');
for (let i = 0; i < opcoesRoupas.length; i++) {
if (opcoesRoupas[i] === elemento) {
opcoesRoupas[i].style.border = '2px solid purple';
} else {
opcoesRoupas[i].style.border = 'none';
}
}

const botao = document.querySelector('.comprar');
const opcoesSelecionadas = document.querySelectorAll('.selecionarroupas .circulo[style*="purple"]');
if (opcoesSelecionadas.length === 3) {
botao.style.backgroundColor = '#404EED';
botao.onclick = function() { document.getElementById("popup").style.display = "block"; }
} else {
botao.onclick = null;
}
}

// Esconder os POP-UPS

function hide() {
    document.getElementById("popup").style.display = "none";
    document.getElementById("direita").style.display = "flex";
    document.getElementById("direita2").style.display = "none";
  }

function trocarpopup() {
document.getElementById("direita").style.display = "none";
document.getElementById("direita2").style.display = "flex";
}