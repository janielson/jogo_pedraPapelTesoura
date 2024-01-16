document.addEventListener('DOMContentLoaded', function () {
    startTyping(dialogues);
});

let dialogues = [
    'Olá, seja bem-vindo!',
    'Pronto para jogar Jokenpô?',
    'Escolha Pedra, Papel ou Tesoura e boa sorte!'
    
];

function typeWriter(text,  numberOfCharactersToDisplay, elementOfText, callback) {
    if (numberOfCharactersToDisplay < text.length) {
        elementOfText.innerHTML = text.substring(0, numberOfCharactersToDisplay + 1);

        setTimeout(function () {
            typeWriter(text, numberOfCharactersToDisplay + 1, elementOfText, callback);
        }, 75);

    } else if (callback) {
        setTimeout(callback, 1500);
    }
}

function startTyping(dialogues) {
    if (dialogues.length > 0) {
        let dialogue = dialogues.shift();
        let element = document.querySelector('.balao-de-dialagos p');
        
        (dialogue, 0, element, function () {
            startTyping(dialogues);
        });
    }
}

// efeito no botão para o usuario saber que foi clicado 

document.addEventListener('DOMContentLoaded', function() {
    let button = document.querySelector('.button-iniciar-jogo');

    button.addEventListener('mousedown', function() {
        button.style.backgroundColor = '#000000'; // Muda a cor de fundo para preto
        button.style.color = '#FFFFFF'; // Muda a cor do texto para branco
    });

    button.addEventListener('mouseup', function() {
        button.style.backgroundColor = ''; // Restaura a cor de fundo original
        button.style.color = ''; // Restaura a cor do texto original
    });

    button.addEventListener('mouseout', function() {
        button.style.backgroundColor = ''; // Restaura a cor de fundo original se o mouse sair
        button.style.color = ''; // Restaura a cor do texto original se o mouse sair
    });
});



// açoes do jogo 

const computer = document.querySelector(".computer img");
const player = document.querySelector(".player img");
const computerPoints = document.querySelector(".computerPoints");
const playerPoints = document.querySelector(".playerPoints");
const options = document.querySelectorAll(".options button");

options.forEach((option) => {
  option.addEventListener("click", () => {
    computer.classList.add("shakeComputer");
    player.classList.add("shakePlayer");

    setTimeout(() => {
      computer.classList.remove("shakeComputer");
      player.classList.remove("shakePlayer");

      player.src = "./" + option.innerHTML + "Player.png";

      const choice = ["STONE", "PAPER", "SCISSORS"];
      let arrayNo = Math.floor(Math.random() * 3);
      let computerChoice = choice[arrayNo];
      computer.src = "./" + computerChoice + "Computer.png";

      let cPoints = parseInt(computerPoints.innerHTML);
      let pPoints = parseInt(playerPoints.innerHTML);

      if (option.innerHTML === "STONE") {
        if (computerChoice === "PAPER")
          computerPoints.innerHTML = cPoints + 1;
        else if (computerChoice === "SCISSORS")
          playerPoints.innerHTML = pPoints + 1;
      } else if (option.innerHTML === "PAPER") {
        if (computerChoice === "SCISSORS")
          computerPoints.innerHTML = cPoints + 1;
        else if (computerChoice === "STONE")
          playerPoints.innerHTML = pPoints + 1;
      } else {
        if (computerChoice === "STONE")
          computerPoints.innerHTML = cPoints + 1;
        else if (computerChoice === "PAPER")
          playerPoints.innerHTML = pPoints + 1;
      }
    }, 900);
  });
});
