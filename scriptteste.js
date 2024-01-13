document.addEventListener("DOMContentLoaded", function() {
  typeWriter("paragrafo1", function() {
    setTimeout(function() {
      document.getElementById("paragrafo1").classList.add("hidden");
      document.getElementById("paragrafo2").classList.remove("hidden");
      typeWriter("paragrafo2");
    }, 1000); // Tempo de espera após completar o primeiro parágrafo (1 segundo neste exemplo)
  });
});

function typeWriter(elementId, callback) {
  var speed = 50; // Velocidade da digitação em milissegundos
  var element = document.getElementById(elementId);
  var text = element.innerText;
  var i = 0;

  element.innerHTML = ''; // Limpar o conteúdo original

  function type() {
    if (i < text.length) {
      element.innerHTML += text.charAt(i);
      i++;
      setTimeout(type, speed);
    } else {
      if (callback) {
        callback();
      }
    }
  }

  type();
}
