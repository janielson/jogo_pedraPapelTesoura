
// VARIAVEIS GLOBAIS
var iniciarJogoButton = document.querySelector(".button");
var pedraButton = document.querySelector(".content__jogo__imgs__button__one");
var papelButton = document.querySelector(".content__jogo__imgs__button__tow");
var tesouraButton = document.querySelector(".content__jogo__imgs__button__three");
var jogadasRestantes = 10;
var suaPontuacao = 0;
var pontuacaoInteligencia = 0;

// EVENTOS DE CLIQUE
iniciarJogoButton.addEventListener("click", openSectionOfPlay);
pedraButton.addEventListener("click", jogarPedra);
papelButton.addEventListener("click", jogarPedra);
tesouraButton.addEventListener("click", jogarPedra);



// FUNÇOES DA APLICAÇÃO
function openSectionOfPlay() {

  var secaoDeJogos = document.querySelector(".content-jogo");  
  secaoDeJogos.style.display = "block";
  secaoDeJogos.scrollIntoView({ behavior: "smooth" });
}




function atualizarJogadasRestantes() {
  jogadasRestantes -= 1;
  var jogadasRestantesElement = document.querySelector(
    ".content-jogo-boasorte"
  );
  jogadasRestantesElement.innerHTML =
    "BOA SORTE! VOCÊ TEM " + jogadasRestantes + " JOGADAS";
}

// Função para atualizar a pontuação
function atualizarPontuacao() {
  var suaPontuacaoElement = document.querySelector(
    ".content-jogo-resut-my-resuts span"
  );
  var pontuacaoInteligenciaElement = document.querySelector(
    ".content-jogo-resut-inteligence span"
  );

  suaPontuacaoElement.innerHTML = suaPontuacao;
  pontuacaoInteligenciaElement.innerHTML = pontuacaoInteligencia;
}

// Função para jogar pedra
function jogarPedra() {
  atualizarJogadasRestantes();
  var escolhaInteligencia = Math.floor(Math.random() * 3); // 0: pedra, 1: papel, 2: tesoura

  if (escolhaInteligencia === 0) {
    // Empate
    alert("Empate! Você escolheu pedra e a inteligência escolheu pedra.");
  } else if (escolhaInteligencia === 1) {
    // Perdeu
    alert("Você perdeu! Você escolheu pedra e a inteligência escolheu papel.");
    pontuacaoInteligencia++;
  } else {
    // Ganhou
    alert(
      "Você ganhou! Você escolheu pedra e a inteligência escolheu tesoura."
    );
    suaPontuacao++;
  }

  atualizarPontuacao();
}


