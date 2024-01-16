document.addEventListener('DOMContentLoaded', function () {
    startTyping(dialogues);
});

let dialogues = [
    'Olá, seja bem-vindo!',
    'Pronto para jogar Jokenpô?',
    'Escolha Pedra, Papel ou Tesoura e boa sorte!',
    'Antes de começarmos,veja como funciona o jogo. clique em "Saiba Mais!" no botão a baixo'
];

function typeWriter(text, n, element, callback) {
    if (n < text.length) {
        element.innerHTML = text.substring(0, n + 1);
        setTimeout(function () {
            typeWriter(text, n + 1, element, callback);
        }, 75);
    } else if (callback) {
        setTimeout(callback, 1500);
    }
}

function startTyping(dialogues) {
    if (dialogues.length > 0) {
        let dialogue = dialogues.shift();
        let element = document.querySelector('.balao-de-dialagos p');
        typeWriter(dialogue, 0, element, function () {
            startTyping(dialogues);
        });
    }
}





