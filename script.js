
// Perguntar o nome ao Usuario
const user = prompt("Qual o seu nome?")
const userName = document.querySelector('.user-name');
userName.textContent = user;

//Para mudar a borda quando clicar na roupa pra selecionar imagem
function mudarBorda() {
    var divs = document.querySelectorAll('.circulo');
    divs.forEach(function(div) {
      div.addEventListener('click', function() {
        this.style.border = '2px solid purple';
      });
    });
  }
  