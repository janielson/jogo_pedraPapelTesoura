function openSectionOfPlay() {
    var secaoDeJogos = document.querySelector('.content-jogo');
    secaoDeJogos.style.display = 'block';
    secaoDeJogos.scrollIntoView({ behavior: 'smooth' });
  }
  var iniciarJogoButton = document.querySelector('.button');
  iniciarJogoButton.addEventListener('click', openSectionOfPlay);