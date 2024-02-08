let dialogos = [
  'Olá, seja bem-vindo!',
  'Pronto para jogar Jokenpô?',
  'Escolha Pedra, Papel ou Tesoura e boa sorte!'
];

let numeroTotalDeRodadas;
let rodadasRestantes;
let numeroDaJogada = 1; // Adicionei esta variável para rastrear o número da jogada

function maquinaDeEscrever(texto, numeroDeCaracteres, elementoDoTexto, callback) {
  if (numeroDeCaracteres < texto.length) {
    elementoDoTexto.innerHTML = texto.substring(0, numeroDeCaracteres + 1);
    setTimeout(function () {
      maquinaDeEscrever(texto, numeroDeCaracteres + 1, elementoDoTexto, callback);
    }, 75);
  } else if (callback) {
    setTimeout(callback, 1500);
  }
}

function iniciarDigitacao(dialogos) {
  if (dialogos.length > 0) {
    let dialogo = dialogos.shift();
    let elemento = document.querySelector('.balao-de-dialagos p');
    maquinaDeEscrever(dialogo, 0, elemento, function () {
      iniciarDigitacao(dialogos);
    });
  }
}

function configurarAcoesDoJogo() {

  const computerPoints = document.querySelector(".computerPoints");
  const playerPoints = document.querySelector(".playerPoints");
  const options = document.querySelectorAll(".options button");
  const resultadoDasJogadas = document.querySelector(".resultado__jogadas");
  let computer = document.querySelector(".computer img");
  let player = document.querySelector(".player img");
  let resetarJogadas = document.getElementById("resetButton");

  const mapping = {
    "PEDRA": "stone",
    "PAPEL": "paper",
    "TESOURA": "scissors"
  };

  options.forEach((option) => {
    option.addEventListener("click", () => {
      computer.classList.add("shakeComputer");
      player.classList.add("shakePlayer");

      setTimeout(() => {
        computer.classList.remove("shakeComputer");
        player.classList.remove("shakePlayer");

        const escolhaDoJogador = mapping[option.innerHTML];
        player.src = "./assets/" + escolhaDoJogador + "Player.png";

        const choice = ["stone", "paper", "scissors"];
        let arrayNo = Math.floor(Math.random() * 3);
        let escolhaDaInteligencia = choice[arrayNo];
        computer.src = "./assets/" + escolhaDaInteligencia + "Computer.png";

        let pontosDoComputador = parseInt(computerPoints.innerHTML);
        let pontosDoJogador = parseInt(playerPoints.innerHTML);

        if ((escolhaDoJogador === "stone" && escolhaDaInteligencia === "paper") ||
          (escolhaDoJogador === "scissors" && escolhaDaInteligencia === "stone") ||
          (escolhaDoJogador === "paper" && escolhaDaInteligencia === "scissors")) {

          computerPoints.innerHTML = pontosDoComputador + 1;
          resultadoDasJogadas.textContent = "EU GANHEI!";
        } else if (escolhaDoJogador === escolhaDaInteligencia) {
          resultadoDasJogadas.textContent = "EMPATAMOS!";
        } else {
          playerPoints.innerHTML = pontosDoJogador + 1;
          resultadoDasJogadas.textContent = "VOCÊ GANHOU!";
        }


        rodadasRestantes--;
        atualizarRodadasRestantes(rodadasRestantes);
      }, 700);
    });
  });
}

document.addEventListener('DOMContentLoaded', function() {
  configurarAcoesDoJogo();
  iniciarDigitacao(dialogos);

  document.getElementById('botaoPronto').addEventListener('click', function() {
    const nomeUsuario = document.getElementById('inputNome').value;
    numeroTotalDeRodadas = parseInt(document.getElementById('inputRodadas').value);

    if (nomeUsuario && numeroTotalDeRodadas) {
      rodadasRestantes = numeroTotalDeRodadas;
      const mensagemPersonalizada = `Olá ${nomeUsuario}, você determinou ${numeroTotalDeRodadas} jogadas.`;
      let elemento = document.querySelector('.balao-de-dialagos p');
      maquinaDeEscrever(mensagemPersonalizada, 0, elemento, function() {
        setTimeout(function() {
          document.querySelector('.modal-do-usuario').style.display = 'none';
          document.querySelector('.container-principal').style.display = 'block';
          atualizarRodadasRestantes(rodadasRestantes);
        }, 1800);
      });
    } else {
      alert('Por favor, preencha todos os campos.');
    }
  });

  document.getElementById('fechar__modal').addEventListener("click", function() {
    document.querySelector(".modal-do-usuario").style.display = 'none';
  });

  document.getElementById("tabela").addEventListener("click", function() {
    document.querySelector(".modal").style.display = 'flex';
  });

  document.querySelector('.button-iniciar-jogo').addEventListener('click', function() {
    document.querySelector('.modal-do-usuario').style.display = 'flex';
  });

  // Adicionando a ação de resetar as jogadas
  document.getElementById("resetButton").addEventListener("click", function() {
    resetarJogo();
  });
  
  // Fechar modal ao clicar fora
  document.querySelector('.modal').addEventListener('click', function(e) {
    if (e.target === this) {
      this.classList.remove('mostrar');
    }
  });
});

function resetarJogo() {
  const computerPoints = document.querySelector(".computerPoints");
  const playerPoints = document.querySelector(".playerPoints");
  let computer = document.querySelector(".computer img");
  let player = document.querySelector(".player img");
  
  // Resetando os pontos
  computerPoints.innerHTML = '0';
  playerPoints.innerHTML = '0';
  
  // Resetando as imagens para o estado inicial
  computer.src = "./assets/stoneComputer.png";
  player.src = "./assets/stonePlayer.png";
  
  // Resetar rodadas restantes e número da jogada
  rodadasRestantes = numeroTotalDeRodadas; 
  numeroDaJogada = 1;
  atualizarRodadasRestantes(rodadasRestantes);
  
  // Limpando a tabela de resultados, se necessário
  limparTabelaDeJogadas();
}

function limparTabelaDeJogadas() {
  const container = document.querySelector('.tabela-de-jogadas');
  // Limpa e recria os cabeçalhos da tabela
  container.innerHTML = '<div class="header">Jogada</div><div class="header">Sua Escolha</div><div class="header">Escolha da IA</div><div class="header">Resultado</div>';
}

// Implemente as outras funções necessárias aqui (configurarAcoesDoJogo, iniciarDigitacao, etc.)





function atualizarRodadasRestantes(rodadas) {
  let elemento = document.querySelector('.balao-de-dialagos p');
  if (rodadas > 0) {
    let mensagemRodadasRestantes = `você tem ${rodadas} jogadas`;
    maquinaDeEscrever(mensagemRodadasRestantes, 0, elemento);
  } else {
    let mensagemFimDeJogo = "Fim do jogo! Clique em 'Reiniciar jogada' para jogar novamente.";
    maquinaDeEscrever(mensagemFimDeJogo, 0, elemento);
    desabilitarOpcoesDeJogo();
  }
}





