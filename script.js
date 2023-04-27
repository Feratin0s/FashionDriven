
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
botao.style.backgroundColor = 'purple';
botao.onclick = function() { alert('TESTANDO TESTANDO APAGAR DEPOIS'); }
} else {
botao.style.backgroundColor = 'gray';
botao.onclick = null;
}
}
