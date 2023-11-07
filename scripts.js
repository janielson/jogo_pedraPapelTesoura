
// VARIAVEIS GLOBAIS
var iniciarJogoButton = document.querySelector(".button");
var pedraButton = document.querySelector(".content__jogo__imgs__button__one");
var papelButton = document.querySelector(".content__jogo__imgs__button__tow");
var tesouraButton = document.querySelector(".content__jogo__imgs__button__three");
var buttonGame = document.querySelectorAll(".button__game");
var jogadasRestantes = 10;
var suaPontuacao = 0;
var pontuacaoInteligencia = 0;

// EVENTOS DE CLIQUE
// buttonGame.addEventListener("click", jogarPedra);
iniciarJogoButton.addEventListener("click", openSectionOfPlay);
// pedraButton.addEventListener("click", jogarPedra);
// papelButton.addEventListener("click", jogarPapel);
// tesouraButton.addEventListener("click", jogarPedra);

for(let i = 0 ;  i < buttonGame.length ; i ++) {
  buttonGame[i].addEventListener("click", () => {
      
   let escolhaDoUsuario = buttonGame[i].querySelector(".content-jogo-imgs__pedra").innerHTML;
   var escolhaDaInteligencia = Math.floor(Math.random() * 3);

   
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

  
  console.log("sua Pontuação "  + suaPontuacao);
  console.log("sua Escolha "  + escolhaDoUsuario);
  console.log("");
  console.log("pontuação da inteligencia " + pontuacaoInteligencia);
  console.log("escolha da inteligencia " + escolhaDaInteligencia); 
   
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

  var secaoDeJogos = document.querySelector(".content-jogo");  
  secaoDeJogos.style.display = "block";
  secaoDeJogos.scrollIntoView({ behavior: "smooth" });
}



//crie uma função que a cada escolha do usuario entre pedra,papel ou tesoura, o numeros de jogadas diminua menos 1 e a pontuação do usuario aumente 1
function jogarPedra() {


 

  

  var escolhaDoUsuario = document.querySelector(".button__game");   
  var elementFilho = escolhaDoUsuario.querySelector(".content-jogo-imgs__pedra").innerHTML;

  
  console.log(elementFilho);

  console.log("codigo primera verificação " +  escolhaDoUsuario)






  }
     //  pontuacaoInteligencia e suaPontuacao exibir na tela 

   
//       jogadasRestantes.innerHTML = "Jogadas restantes: " + jogadasRestantes;
//   pontuacaoDoUsuario.innerHTML = "Sua pontuação: "


// var jogadasRestantes = document.querySelector(".play_rounds");
// var pontuacaoDoUsuario = document.querySelector(".content-jogo-resut-my-resuts");
