
// VARIAVEIS GLOBAIS
let iniciarJogoButton = document.querySelector(".button");
let pedraButton = document.querySelector(".content__jogo__imgs__button__one");
let papelButton = document.querySelector(".content__jogo__imgs__button__tow");
let tesouraButton = document.querySelector(".content__jogo__imgs__button__three");
let buttonGame = document.querySelectorAll(".button__game");
let myResult = document.querySelector(".content-jogo-resut-my-resuts");
let inteligenciaResult = document.querySelector(".content-jogo-resut-inteligence");



let jogadasRestantes = 10;
let suaPontuacao = 0;
let pontuacaoInteligencia = 0;

// EVENTOS DE CLIQUE
iniciarJogoButton.addEventListener("click", openSectionOfPlay);


for(let i = 0 ;  i < buttonGame.length ; i ++) {
  buttonGame[i].addEventListener("click", () => {
      
   let escolhaDoUsuario = buttonGame[i].querySelector(".content-jogo-imgs__pedra").innerHTML;
   let escolhaDaInteligencia = Math.floor(Math.random() * 3);

   
  if (escolhaDaInteligencia == 0) {
    escolhaDaInteligencia = "pedra";
  } else if (escolhaDaInteligencia == 1) {
    escolhaDaInteligencia = "papel";
  } else {
    escolhaDaInteligencia = "tesoura";  
  }

  if (escolhaDoUsuario == "pedra" && escolhaDaInteligencia == "tesoura") {
    suaPontuacao++;
    pontuacaoInteligencia--;
  } else if (escolhaDoUsuario == "pedra" && escolhaDaInteligencia == "papel") {
    pontuacaoInteligencia++;
    suaPontuacao--;
  } else if (escolhaDoUsuario == "papel" && escolhaDaInteligencia == "pedra") {
    suaPontuacao++;
    pontuacaoInteligencia--;
  } else if (escolhaDoUsuario == "papel" && escolhaDaInteligencia == "tesoura") {
    pontuacaoInteligencia++;
    suaPontuacao--;
  } else if (escolhaDoUsuario == "tesoura" && escolhaDaInteligencia == "papel") {
    suaPontuacao++;
    pontuacaoInteligencia--;
  } else if (escolhaDoUsuario == "tesoura" && escolhaDaInteligencia == "pedra") {
    suaPontuacao--;
    pontuacaoInteligencia++;
  } else if(escolhaDoUsuario == "papel" && escolhaDaInteligencia == "papel") {
     suaPontuacao--;
     pontuacaoInteligencia--;

  } else if(escolhaDoUsuario == "tesoura" && escolhaDaInteligencia == "tesoura") {
    suaPontuacao--;
    pontuacaoInteligencia--;

 }else if(escolhaDoUsuario == "pedra" && escolhaDaInteligencia == "pedra") {
  suaPontuacao--;
  pontuacaoInteligencia--;

}

  
  // console.log("sua Pontuação "  + suaPontuacao);
  myResult.innerHTML = suaPontuacao;
  // console.log("sua Escolha "  + escolhaDoUsuario);
  // console.log("");
  // console.log("pontuação da inteligencia " + pontuacaoInteligencia);
  inteligenciaResult.innerHTML = pontuacaoInteligencia;
  // console.log("escolha da inteligencia " + escolhaDaInteligencia); 
   
  if(suaPontuacao > pontuacaoInteligencia){ 
    console.log("Você venceu");
  } else if (suaPontuacao < pontuacaoInteligencia) {
     console.log("Você perdeu");

  } 

   if( suaPontuacao === pontuacaoInteligencia) {
      console.log("empate");
   }

  

  
  });
 

}

// FUNÇOES DA APLICAÇÃO
function openSectionOfPlay() {

  let secaoDeJogos = document.querySelector(".content-jogo");  
  secaoDeJogos.style.display = "block";
  secaoDeJogos.scrollIntoView({ behavior: "smooth" });
}




