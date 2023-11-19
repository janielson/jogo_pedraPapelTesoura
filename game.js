class Game {

    numeroDeJogadas;
    escolhaDoUsuario;


    constructor() {
        this.numeroDeJogadas = 0;
        this.escolhaDoUsuario = "";

    }

    // ATUALMENTE CRIADA
    setEscolhaDoUsuario(buttonGame) {
        let escolha = "";

        for (let i = 0; i < buttonGame.length; i++) {

            buttonGame[i].addEventListener("click", () => {

                escolha = buttonGame[i].querySelector(
                    ".content-jogo-imgs__pedra"
                ).innerHTML;

                this.escolhaDoUsuario = escolha;
               //  this.getNumeroDeJogadas();
               //  console.log("Escolha do usuario " + this.getEscolhaDoUsuario());
            });
            if (this.escolhaDoUsuario !== "") {
                break;
            }
        }
    }

    alteraNumeroDeJogadasNaTela(tagSpanJogadas) {
        let jogadas = this.getNumeroDeJogadas();
        tagSpanJogadas.innerHTML = jogadas;
    }

    // GETTERS E SETTERS
    setNumeroDeJogadas(QtdJogadas) {
        this.numeroDeJogadas = QtdJogadas;
    }
    getNumeroDeJogadas() {
        return this.numeroDeJogadas;
    }

    getEscolhaDoUsuario() {

        return this.escolhaDoUsuario;
    }

}

function main() {
    const button = document.querySelectorAll(".button__game");
    let jogadas = document.querySelector(".number__of__play");
    
    
    const game = new Game();
    game.setEscolhaDoUsuario(buttonGame);
    game.setNumeroDeJogadas(10);
    game.alteraNumeroDeJogadasNaTela(jogadas);
    
    
    
    for (let i = 0; i < button.length; i++) {
        button[i].addEventListener("click", () => {
            console.log("Este é o retorno do metodo " + game.getEscolhaDoUsuario())
        });
    
    }
      
}




main();
