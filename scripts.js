
//paragrafos para serem execultados 
const sejaBemVindo = document.querySelector(".dialog__paragraph__one")
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
