
//paragrafos para serem execultados 
const sejaBemVindo = document.querySelector(".ola-seja-bem-vindo")



// audios para serem execultados
// const audioSejaBemVindo = document.querySelector(".audio__seja__bem__vindo")








// funçoes do programa

function typewriter (paragrafos) {
   let textoArray = paragrafos.innerHTML.split('')
   paragrafos.innerHTML = ''
   textoArray.forEach((letra, index) => {
    setTimeout(function(){
        paragrafos.innerHTML += letra

    },75 * index)
    
   });

}


typewriter(sejaBemVindo)