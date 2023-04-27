
// Perguntar o nome ao Usuario
const user = prompt("Qual o seu nome?")
const userName = document.querySelector('.user-name');
userName.textContent = user;

//Cria a variavel que vai ser usando dentro da funcao para saber qual botao esta sendo pressionado 
let mensagem;
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
botao.onclick = function() { document.getElementById("popup").style.display = "block"; 
mensagem = `${opcoesSelecionadas[0].getAttribute('onclick').split(",")[1]} com ${opcoesSelecionadas[1].getAttribute('onclick').split(",")[1]} de ${opcoesSelecionadas[2].getAttribute('onclick').split(",")[1]}`.replace(/'/g, '').replace(/\(|\)/g, '');
// Envio da mensagem para a variavel mensagem
exibirMensagem(mensagem);
}
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

function exibirMensagem(novaMensagem) {
    mensagem = novaMensagem;
    console.log(mensagem);
    atualizarMensagemHTML();
  }
  
function atualizarMensagemHTML() {
// Atualiza o conteúdo do elemento HTML
const enviarmensagem = document.querySelector('.enviarmensagem');
enviarmensagem.textContent = mensagem;
}