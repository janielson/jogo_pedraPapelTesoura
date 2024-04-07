
const inputsRadio = document.querySelectorAll(".checked__img__input");
const imagens = document.querySelectorAll('.img-avatar__position');

for (let indice = 0; indice < imagens.length; indice++) {
  imagens[indice].addEventListener('click', (event) => {
    for (let i = 0; i < inputsRadio.length; i++) {
      if (i === indice) {
        inputsRadio[i].checked = true;
        inputsRadio[i].style.display = 'block';
      } else {
        inputsRadio[i].checked = false;
        inputsRadio[i].style.display = 'none';
      }
    }
  });
}
