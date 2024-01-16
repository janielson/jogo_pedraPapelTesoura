document.addEventListener('DOMContentLoaded', function () {
    startTyping(dialogues);
});

let dialogues = [
    'Olá, seja bem-vindo!',
    'Pronto para jogar Jokenpô?',
    'Escolha Pedra, Papel ou Tesoura e boa sorte!'
    
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

// efeito no botão para o usuario saber que foi clicado 

document.addEventListener('DOMContentLoaded', function() {
    var button = document.querySelector('.button-iniciar-jogo');

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
