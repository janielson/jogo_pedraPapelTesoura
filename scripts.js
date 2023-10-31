



// Lista de imagens
const imagens = [".assets/background1.jpg", ".assets/background2.jpg", ".assets/background3.jpg", ".assets/background4.jpg", ".assets/background5.jpg",
    ".assets/background6.jpg", ".assets/background7.jpg", ".assets/background8.jpg", "assets/background9.jpg", ".assets/background10.jpg"];

// Índice da imagem atual
let indiceImagemAtual = 0;


for (let index = 0; index < imagens.length; index++) {
    // Atualiza a imagem a cada 5 segundos
    setInterval(() => {
        // Obtém a nova imagem
        const novaImagem = imagens[index];

        // Altera o background de imagem
        document.body.style.backgroundImage = `url(${novaImagem})`;


    }, 5000);

}