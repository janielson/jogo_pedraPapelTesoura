let dialogos = [
  'Olá, seja bem-vindo!',
  'Pronto para jogar Jokenpô?',
  'Escolha Pedra, Papel ou Tesoura e boa sorte!'
];

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
      }, 900);
    });
  });

  resetButton.addEventListener("click", () => {
    computerPoints.innerHTML = '0';
    playerPoints.innerHTML = '0';
    computer.src = "./assets/stoneComputer.png";
    player.src = "./assets/stonePlayer.png";
  });
}

document.addEventListener('DOMContentLoaded', function () {
  configurarAcoesDoJogo();
  iniciarDigitacao(dialogos);
});

