// VARIAVEIS GLOBAIS
let iniciarJogoButton = document.querySelector(".button").addEventListener("click", abrirModalDeJogo);

let myResult = document.querySelector(".content-jogo-resut-my-resuts");
let inteligenciaResult = document.querySelector(".content-jogo-resut-inteligence");
let jogadasRestantes = document.querySelector(".jogada__restantes");


iniciarJogo();

function iniciarJogo() {
  const suaPontuacao = 0;
  const pontuacaoInteligencia = 0;
  let buttonGame = document.querySelectorAll(".button__game");


  for (let i = 0; i < buttonGame.length; i++) {
    buttonGame[i].addEventListener("click", () => {
      const escolhaDoUsuario = buttonGame[i].querySelector(".content-jogo-imgs__pedra").innerHTML;
       console.log(escolhaDoUsuario)
      const escolhaDaInteligencia = gerarEscolhaAleatoria();

      const vencedor = calcularVencedor(
        escolhaDoUsuario,
        escolhaDaInteligencia);
      // atualizarPontuacoes(vencedor, suaPontuacao, pontuacaoInteligencia);
      // exibirResultados(suaPontuacao, pontuacaoInteligencia);
      // checarResultado(suaPontuacao, pontuacaoInteligencia);
    });
  }
}

// FUNÇOES DA APLICAÇÃO
function abrirModalDeJogo() {
  let secaoDeJogos = document.querySelector(".content-jogo");
  secaoDeJogos.style.display = "block";
  secaoDeJogos.scrollIntoView({ behavior: "smooth" });
}

function gerarEscolhaAleatoria() {
  return ["pedra", "papel", "tesoura"][Math.floor(Math.random() * 3)];
}

function calcularVencedor(escolhaDoUsuario, escolhaDaInteligencia) {
  if (escolhaDoUsuario === escolhaDaInteligencia) {
    return "empate";
  } else if (
    escolhaDoUsuario === "pedra" &&
    escolhaDaInteligencia === "tesoura"
  ) {
    return "jogador";
  } else if (
    escolhaDoUsuario === "papel" &&
    escolhaDaInteligencia === "pedra"
  ) {
    return "jogador";
  } else if (
    escolhaDoUsuario === "tesoura" &&
    escolhaDaInteligencia === "papel"
  ) {
    return "jogador";
  } else {
    return "computador";
  }
}

function atualizarPontuacoes(vencedor, suaPontuacao, pontuacaoInteligencia) {
  if (vencedor === "jogador") {
    suaPontuacao++;
  } else if (vencedor === "computador") {
    pontuacaoInteligencia++;
  }
}

function exibirResultados(suaPontuacao, pontuacaoInteligencia) {
  myResult.innerHTML = suaPontuacao;
  inteligenciaResult.innerHTML = pontuacaoInteligencia;
}

function checarResultado(suaPontuacao, pontuacaoInteligencia) {
  if (suaPontuacao > pontuacaoInteligencia) {
    console.log("Você venceu");
  } else if (suaPontuacao < pontuacaoInteligencia) {
    console.log("Você perdeu");
  } else {
    console.log("empate");
  }
}

function trocaImagemDoPlacar(resultadoJogador, resultadoInteligencia) {
  const imgPlayer = document.querySelector(".moves__img-player");
  const imgInteligence = document.querySelector(".movies__img-inteligence");

  if (resultadoJogador == "papel") {
    imgPlayer.src = "&#x270B; &#x1F3FB;";
  } else if (resultadoJogador == "pedra") {
    imgPlayer.src = "&#x1F44A; &#x1F3FB;";
  } else if (resultadoJogador == "tesoura") {
    imgPlayer.src = "&#x1F44A; &#x1F3FB;";
  }

  if (resultadoInteligencia === "papel") {
    imgInteligence.src = "&#x270B; &#x1F3FB;";
  } else if (resultadoInteligencia === "pedra") {
    imgInteligence.src = "&#x1F44A; &#x1F3FB;";
  } else if (resultadoInteligencia === "tesoura") {
    imgInteligence.src = "&#x1F44A; &#x1F3FB;";
  }
}
