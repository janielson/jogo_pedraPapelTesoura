
const texto = document.querySelector(".texto").innerHTML
console.log(texto);


// Verifica se o navegador suporta a Web Speech API
if ('speechSynthesis' in window) {
    // Cria um objeto de síntese de fala
    var synthesis = window.speechSynthesis;
  
    // Cria um objeto de fala
    var utterance = new SpeechSynthesisUtterance();
  
    // Define o texto a ser lido em voz alta
 //    utterance.text = 'Olá, isso é um exemplo de texto lido em voz alta!';
  
    
    // Obtém todas as vozes disponíveis
    var voices = synthesis.getVoices();
  
    // Filtra as vozes para encontrar uma voz específica
    var desiredVoice = voices.find(voice => voice.name === 'Nome da Voz Desejada');
  
    // Define a voz desejada no objeto de fala
    utterance.voice = desiredVoice;
  
    // Adiciona o objeto de fala à lista de síntese de fala
    synthesis.speak(utterance);

    
    console.log('A Web Speech API não é suportada neste navegador.');
  }
  