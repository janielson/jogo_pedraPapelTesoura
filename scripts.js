
// const botaoTabela = document.querySelector(".botao-abrir-resultado");
// const modalTabela = document.querySelector('.modal');

// let dialogos = [
//   'Olá, seja bem-vindo!',
//   'Pronto para jogar Jokenpô?',
//   'Escolha Pedra, Papel ou Tesoura e boa sorte!'
// ];

// let numeroTotalDeRodadas;
// let rodadasRestantes;
// let numeroDaJogada = 1; 

// function maquinaDeEscrever(texto, numeroDeCaracteres, elementoDoTexto, callback) {
//   if (numeroDeCaracteres < texto.length) {
//     elementoDoTexto.innerHTML = texto.substring(0, numeroDeCaracteres + 1);
//     setTimeout(function () {
//       maquinaDeEscrever(texto, numeroDeCaracteres + 1, elementoDoTexto, callback);
//     }, 75);
//   } else if (callback) {
//     setTimeout(callback, 1500);
//   }
// }

// function iniciarDigitacao(dialogos) {
//   if (dialogos.length > 0) {
//     let dialogo = dialogos.shift();
//     let elemento = document.querySelector('.balao-de-dialagos p');
//     maquinaDeEscrever(dialogo, 0, elemento, function () {
//       iniciarDigitacao(dialogos);
//     });
//   }
// }

// function configurarAcoesDoJogo() {

//   const computerPoints = document.querySelector(".computerPoints");
//   const playerPoints = document.querySelector(".playerPoints");
//   const options = document.querySelectorAll(".options button");
//   const resultadoDasJogadas = document.querySelector(".resultado__jogadas");
//   let computer = document.querySelector(".computer img");
//   let player = document.querySelector(".player img");
//   let resetarJogadas = document.getElementById("resetButton");


//   const mapping = {
//     "PEDRA": "stone",
//     "PAPEL": "paper",
//     "TESOURA": "scissors"
//   };

//   options.forEach((option) => {
//     option.addEventListener("click", () => {
//       computer.classList.add("shakeComputer");
//       player.classList.add("shakePlayer");

//       setTimeout(() => {
//         computer.classList.remove("shakeComputer");
//         player.classList.remove("shakePlayer");

//         const escolhaDoJogador = mapping[option.innerHTML.toUpperCase()];
//         player.src = "./assets/" + escolhaDoJogador + "Player.png";

//         const choice = ["stone", "paper", "scissors"];
//         let arrayNo = Math.floor(Math.random() * 3);
//         let escolhaDaInteligencia = choice[arrayNo];
//         computer.src = "./assets/" + escolhaDaInteligencia + "Computer.png";

//         let pontosDoComputador = parseInt(computerPoints.innerHTML);
//         let pontosDoJogador = parseInt(playerPoints.innerHTML);

//         if ((escolhaDoJogador === "stone" && escolhaDaInteligencia === "paper") ||
//           (escolhaDoJogador === "scissors" && escolhaDaInteligencia === "stone") ||
//           (escolhaDoJogador === "paper" && escolhaDaInteligencia === "scissors")) {

//           computerPoints.innerHTML = pontosDoComputador + 1;
//           resultadoDasJogadas.textContent = "EU GANHEI!";
//         } else if (escolhaDoJogador === escolhaDaInteligencia) {
//           resultadoDasJogadas.textContent = "EMPATAMOS!";
//         } else {
//           playerPoints.innerHTML = pontosDoJogador + 1;
//           resultadoDasJogadas.textContent = "VOCÊ GANHOU!";
//         }

//         rodadasRestantes--;
//         atualizarRodadasRestantes(rodadasRestantes);
//       }, 500);
//     });
//   });

//   resetarJogadas.addEventListener("click", () => {
//     computerPoints.innerHTML = '0';
//     playerPoints.innerHTML = '0';
//     computer.src = "./assets/stoneComputer.png";
//     player.src = "./assets/stonePlayer.png";
//     rodadasRestantes = numeroTotalDeRodadas;
//     atualizarRodadasRestantes(rodadasRestantes);
//     numeroDaJogada = 1;
//   });
// }

// // ===================================================================== 
// document.addEventListener('DOMContentLoaded', function () {
//   configurarAcoesDoJogo();
//   iniciarDigitacao(dialogos);

//   document.getElementById('botaoPronto').addEventListener('click', function () {
//     const nomeUsuario = document.getElementById('inputNome').value;
//     numeroTotalDeRodadas = parseInt(document.getElementById('inputRodadas').value);

//     if (nomeUsuario && numeroTotalDeRodadas) {
//       rodadasRestantes = numeroTotalDeRodadas;
//       const mensagemPersonalizada = `Olá ${nomeUsuario}, você determinou ${numeroTotalDeRodadas} jogadas.`;
//       let elemento = document.querySelector('.balao-de-dialagos p');
//       maquinaDeEscrever(mensagemPersonalizada, 0, elemento, function () {
//         setTimeout(function () {
//           document.querySelector('.modal-do-usuario').style.display = 'none';
//           document.querySelector('.container-principal').style.display = 'block';
//           atualizarRodadasRestantes(rodadasRestantes);
//         }, 75); 
//       });
//     } else {
//       alert('Por favor, preencha todos os campos.');
//     }
//   });

//   document.getElementById('fechar__modal').addEventListener("click", function () {
//     let modalUsuario = document.querySelector(".modal-do-usuario");
//     modalUsuario.style.display = 'none';
//   });

//   const botao = document.querySelector('.button-iniciar-jogo');
//   botao.addEventListener('click', function () {
//     const modalUsuario = document.querySelector('.modal-do-usuario');
//     modalUsuario.style.display = 'flex';
//   });
// });


// // ===================================================================== 


// function atualizarRodadasRestantes(rodadas) {
//   let elemento = document.querySelector('.balao-de-dialagos p');
//   if (rodadas > 0) {
//     let mensagemRodadasRestantes = `você tem ${rodadas} jogada.`;
//     maquinaDeEscrever(mensagemRodadasRestantes, 0, elemento);
//   } else {
//     let mensagemFimDeJogo = "Fim do jogo! Clique em 'Reiniciar jogada' para jogar novamente.";
//     maquinaDeEscrever(mensagemFimDeJogo, 0, elemento);
  
//   }
// }

