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
  const computer = document.querySelector(".computer img");
  const player = document.querySelector(".player img");
  const computerPoints = document.querySelector(".computerPoints");
  const playerPoints = document.querySelector(".playerPoints");
  const options = document.querySelectorAll(".options button");
  const resetButton = document.querySelector("#resetButton");

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

        const playerChoice = mapping[option.innerHTML];
        player.src = "./assets/" + playerChoice + "player.png";

        const choice = ["stone", "paper", "scissors"];
        let arrayNo = Math.floor(Math.random() * 3);
        let computerChoice = choice[arrayNo];
        computer.src = "./assets/" + computerChoice + "Computer.png";

        let cPoints = parseInt(computerPoints.innerHTML);
        let pPoints = parseInt(playerPoints.innerHTML);

        if (playerChoice === "stone") {
          if (computerChoice === "paper")
            computerPoints.innerHTML = cPoints + 1;
          else if (computerChoice === "scissors")
            playerPoints.innerHTML = pPoints + 1;
        } else if (playerChoice === "paper") {
          if (computerChoice === "scissors")
            computerPoints.innerHTML = cPoints + 1;
          else if (computerChoice === "stone")
            playerPoints.innerHTML = pPoints + 1;
        } else {
          if (computerChoice === "stone")
            computerPoints.innerHTML = cPoints + 1;
          else if (computerChoice === "paper")
            playerPoints.innerHTML = pPoints + 1;
        }

        // Atualiza o número de rodadas restantes
        rodadasRestantes--;
        atualizarRodadasRestantes(rodadasRestantes);
      }, 900);
    });
  });

  resetButton.addEventListener("click", () => {
    computerPoints.innerHTML = '0';
    playerPoints.innerHTML = '0';
    computer.src = "./assets/stoneComputer.png";
    player.src = "./assets/stonePlayer.png";
    rodadasRestantes = numeroTotalDeRodadas;
    atualizarRodadasRestantes(rodadasRestantes);
    habilitarOpcoesDeJogo();
  });
}

document.addEventListener('DOMContentLoaded', function () {
  configurarAcoesDoJogo();
  iniciarDigitacao(dialogos);

  document.getElementById('botaoPronto').addEventListener('click', function () {
    const nomeUsuario = document.getElementById('inputNome').value;
    numeroTotalDeRodadas = parseInt(document.getElementById('inputRodadas').value);

    if (nomeUsuario && numeroTotalDeRodadas) {
      rodadasRestantes = numeroTotalDeRodadas;
      const mensagemPersonalizada = `Olá ${nomeUsuario}, você determinou ${numeroTotalDeRodadas} jogadas.`;
      let elemento = document.querySelector('.balao-de-dialagos p');
      maquinaDeEscrever(mensagemPersonalizada, 0, elemento, function () {
        setTimeout(function () {
          document.querySelector('.modal-do-usuario').style.display = 'none';
          document.querySelector('.container-principal').style.display = 'block';
          atualizarRodadasRestantes(rodadasRestantes);
        }, 1800); // Aumentei o tempo para 1800ms
      });
    } else {
      alert('Por favor, preencha todos os campos.');
    }
  });

  document.getElementById('fechar__modal').addEventListener("click", function () {
    let modalUsuario = document.querySelector(".modal-do-usuario");
    modalUsuario.style.display = 'none';
  });

  document.getElementById("tabela").addEventListener("click", function () {
    let tabela = document.querySelector(".modal");
    tabela.style.display = 'flex';
  });

  // Resto do código permanece o mesmo
});

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

function desabilitarOpcoesDeJogo() {
  const options = document.querySelectorAll(".options button");
  options.forEach((option) => {
    option.disabled = true;
  });
}

function habilitarOpcoesDeJogo() {
  const options = document.querySelectorAll(".options button");
  options.forEach((option) => {
    option.disabled = false;
  });
}

function validateNumber(input) {
  if (input.value > 10) {
    input.value = 10;
  } else if (input.value < 1) {
    alert("Digite um valor de 1 a 10");
  }
}

const botao = document.querySelector('.button-iniciar-jogo');
botao.addEventListener('click', function () {
  const modalUsuario = document.querySelector('.modal-do-usuario');
  modalUsuario.style.display = 'flex';
});

let tabelaDeResultado = document.getElementById("tabela");
tabelaDeResultado.addEventListener("click", function () {
  let tabela = document.querySelector(".modal");
  tabela.style.display = 'flex';
});

// script para atualizar a tabela;

document.addEventListener('DOMContentLoaded', function () {

  document.querySelectorAll('.options button').forEach(opcao => {
    opcao.addEventListener('click', function () {
      const escolhaJogador = this.getAttribute('data-escolha');
      jogar(escolhaJogador);
    });
  });

  document.querySelector('.modal').addEventListener('click', function (e) {
    if (e.target === this) {
      this.classList.remove('mostrar');
    }
  });
});

function jogar(escolhaJogador) {
  const escolhas = ['PEDRA', 'PAPEL', 'TESOURA'];
  const escolhaIA = escolhas[Math.floor(Math.random() * escolhas.length)];
  const resultado = determinarVencedor(escolhaJogador, escolhaIA);

  adicionarJogada(numeroDaJogada, escolhaJogador, escolhaIA, resultado);
  numeroDaJogada++;
}

function adicionarJogada(jogadaNum, escolhaJogador, escolhaIA, resultado) {
  const container = document.querySelector('.tabela-de-jogadas');
  container.append(criarDivComTexto(`Jogada ${jogadaNum}`));
  container.append(criarDivComTexto(escolhaJogador));
  container.append(criarDivComTexto(escolhaIA));
  container.append(criarDivComTexto(resultado));
}

function criarDivComTexto(texto) {
  const div = document.createElement('div');
  div.textContent = texto;
  return div;
}

function determinarVencedor(jogador, ia) {
  if (jogador === ia) return 'EMPATE';
  if ((jogador === 'PEDRA' && ia === 'TESOURA') ||
    (jogador === 'PAPEL' && ia === 'PEDRA') ||
    (jogador === 'TESOURA' && ia === 'PAPEL')
    || (jogador === 'PAPEL' && ia === 'TESOURA')) {
    return 'VOCÊ GANHOU';
  } else {
    return 'IA GANHOU';
  }
}






