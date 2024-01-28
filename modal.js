const botao = document.querySelector('.button-iniciar-jogo');


function validateNumber(input) {
    if (input.value > 10) {
        input.value = 10;
    }else if (input.value === 0 ){
        alert("Digite um valor de 1 a 10")
    }
}


botao.addEventListener('click' , function () {
    const modalUruario = document.querySelector('.modal-do-usuario');
    modalUruario.style.display = 'flex';
    
});
