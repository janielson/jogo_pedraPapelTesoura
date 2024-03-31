const inputText = document.querySelector('.container-login__senha');

inputText.addEventListener('input', (event) => {
  const value = event.target.value;
  const regex = /[^0-9]/g; // regex que identifica caracteres que não sejam números
  const newValue = value.replace(regex, ''); // remove caracteres não numéricos da string
  event.target.value = newValue; // atualiza o valor do campo com a string modificada
});
