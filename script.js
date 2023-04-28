
// -----------------------------------------------------------------------------------------------------
const urlAPI = "https://mock-api.driven.com.br/api/v4/shirts-api/shirts";


// Perguntar o nome ao Usuario
const user = prompt("Qual o seu nome?")
const userName = document.querySelector('.user-name');
userName.textContent = user;

let azul = false;
let estampaescolhida = './PHOTOS/Blusa1.png';

//Verificar se o link é valido
function isImage(url) {
    azul = /\.(jpg|jpeg|png|webp|avif|gif|svg)$/.test(url);
    if (azul !== true) {
        alert(`Envie um link válido`);
        return false
    } else {
        estampaescolhida = url;
        validar();
    }
}



// -----------------------------------------------------------------------------------------------------

//Cria a variavel que vai ser usando dentro da funcao para saber qual botao esta sendo pressionado 
let mensagem;
let contador;
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
    const opcoesSelecionadas = document.querySelectorAll('.selecionarroupas .circulo[style*="purple"]');
    if (opcoesSelecionadas.length === 3) {
        contador = 3;
        mensagem = `${opcoesSelecionadas[0].getAttribute('onclick').split(",")[1]} com ${opcoesSelecionadas[1].getAttribute('onclick').split(",")[1]} de ${opcoesSelecionadas[2].getAttribute('onclick').split(",")[1]}`.replace(/'/g, '').replace(/\(|\)/g, '');
        exibirMensagem(mensagem);
        validar();
    } else {
        if (opcoesSelecionadas.length === 2) {
            contador = 2;
        }
        else {
            if (opcoesSelecionadas.length === 1) {
                contador = 1;
            }
            else {
                contador = 0;
            }
        }
    }
}

// Funcao para validar o botao
function validar() {
    const botao = document.querySelector('.comprar');
    if (contador === 3 && azul === true) {
        botao.style.backgroundColor = '#404EED';
        botao.onclick = Click();
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

function comprado() {
    document.getElementById("popup").style.display = "none";
    document.getElementById("direita").style.display = "flex";
    document.getElementById("direita2").style.display = "none";
    document.getElementById("selecao").style.display = "none";
    document.getElementById("comprarealizada").style.display = "flex";

    //--------------------------------------------------------------------------------------------------------------
    let soonome = document.querySelector(".soonome");
    document.getElementById("soonome").style.display = "block";
    soonome.innerHTML = "";
    soonome.innerHTML += `<img src="${estampaescolhida}" alt="estampaescolhida" class="pogchamp" />`;
    //acionar outra funcao que vai retomar a pagina incial
    Tempinho();
}

function Tempinho() {
    setTimeout(function () {
        document.getElementById("selecao").style.display = "block";
        document.getElementById("comprarealizada").style.display = "none";
    }, 10000);
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

function receberFoto() {
    const promise = axios.get(`${urlAPI} `);
    promise.then(mostrarfoto);
}

function mostrarfoto(resposta) {
    let containerfotos = document.querySelector(".maiorcriador");
    document.getElementById("maiorcriador").style.display = "flex";
    containerfotos.innerHTML = "";
    for (let i = 0; i < resposta.data.length; i++) {
        const photo = resposta.data[i];
        console.log(photo.image);
        const photoimage = resposta.data[i].image;
        console.log(photoimage);
        containerfotos.innerHTML += `<div class="criador" onclick="chamaClick('${photo.image}')"> <img src="${photo.image}" class="camisa"/> <div><a>Criador: </a>${photo.author}</div></div> `;
    }
}

function chamaClick(photo){
    estampaescolhida = photo;
    Click();
}

function Click() {
    let popup = document.querySelector(".popup");
    document.getElementById("popup").style.display = "block";
    popup.innerHTML = "";
    popup.innerHTML += `            
    <div class="general">
<img src="${estampaescolhida}" alt={estampaescolhida} class="esquerda"/>
<div class="direita" id="direita">
    <div><a class="enviarmensagem">${mensagem}</a></div>
    <div>Criador: <a>${user}</a></div>
    <div onclick="trocarpopup()" class="confirmarpedido">
        <p>Confirmar</p>
        <p>pedido</p>
    </div>
    <div onclick="hide()" class="cancel"><a>Cancelar</a></div>
</div>
<div class="direita2" id="direita2">
    <div><a>Pedido feito</a><a> com sucesso!</a></div>
    <div onclick="comprado()" class="Close">
        <p>Fechar</p>
    </div>
</div>
</div>`;
}

receberFoto();
