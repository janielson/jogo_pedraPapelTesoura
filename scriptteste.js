//como fazer pra atravesar a rua;

// olha pra direita e tbm para ESQUEDA
let carroDireita = true 
let carroEsquerda = true

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }
  
  async function controlarSemaforo() {
    let semaforo = ["verde", "amarelo" , "vermelho"];
  
    for (let index = 0; index < semaforo.length; index++) {
       
      if(index == 0) {
        console.log(semaforo[index]);
          console.log('carro esta passando')
          await sleep(15000);
         
      }  if(index == 1) {
        console.log(semaforo[index]);
        console.log('Atenção aguarde para atravessar')
        await sleep(6000);
      
      }  if(index == 2 ) {

        console.log(semaforo[index]);
        console.log('Pode atravessar')
        await sleep(20000);

       
      





      }


    }
  }
  
  controlarSemaforo();
  
 

// VERIFICAR SE TEM CARRO PASSANDO 


