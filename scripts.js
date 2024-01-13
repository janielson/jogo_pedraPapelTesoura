<<<<<<< HEAD
function speak(text) {
    let utterance = new SpeechSynthesisUtterance(text);
    utterance.lang = 'pt-BR'; // Definir o idioma para português do Brasil
    speechSynthesis.speak(utterance);
}

function typeWriter(text, n, element, callback) {
    if (n < text.length) {
        element.innerHTML = text.substring(0, n+1);
        setTimeout(function() {
            typeWriter(text, n+1, element, callback);
        }, 100);
    } else if (callback) {
        setTimeout(callback, 1500);
    }
}

function startTyping(dialogues) {
    if (dialogues.length > 0) {
        let dialogue = dialogues.shift();
        let element = document.querySelector('.balao-de-dialagos p');
        typeWriter(dialogue, 0, element, function() {
            speak(dialogue);
            startTyping(dialogues);
        });
    }
}

let dialogues = [
    'Olá, seja bem-vindo!!!',
    'Pronto para jogar Jokenpô?',
    'Escolha Pedra, Papel ou Tesoura e boa sorte!'
];

document.addEventListener('DOMContentLoaded', function() {
    startTyping(dialogues);
});
=======

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
>>>>>>> e12cce1129b2872f1b5a146c37f5bd43387c12d1
