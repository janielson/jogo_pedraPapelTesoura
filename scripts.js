
//paragrafos para serem execultados 
const sejaBemVindo = document.querySelector(".ola-seja-bem-vindo")
const sejaBemVindoMessageSecond = document.querySelector(".ola-seja-bem-vindo__second-message");






typewriter(sejaBemVindo);

// Chamar a função para iniciar a exibição automática
//exibirParagrafosAutomaticamente();



function typewriter(paragrafos) {
    let textoArray = paragrafos.innerHTML.split('')
    paragrafos.innerHTML = ''
    textoArray.forEach((letra, index) => {
        setTimeout(function () {
            paragrafos.innerHTML += letra

        }, 75 * index)

    });



}



// Função para exibir os parágrafos automaticamente
function exibirParagrafosAutomaticamente() {
    // Obter todos os parágrafos
    var paragrafos = document.querySelectorAll('p');

   

    paragrafos[0].style.display = "none";
    paragrafos[1].style.display = "none";

    // Iterar sobre os parágrafos
    paragrafos.forEach(function (paragrafo, index) {
        // Exibir o parágrafo atual após um atraso de 1000 milissegundos (1 segundo)
        setTimeout(function () {
            paragrafo.style.display = 'block';
        }, index * 1000);  // O atraso aumenta a cada parágrafo (index * 1000)
    });
}





  