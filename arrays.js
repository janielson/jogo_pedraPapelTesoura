// 1 - Para entender arrays precisamos saber de duas coisas.
// o que sao os indices de um array e o que tem dentro do array exemplo

// criei um array com 3 elementos
// let array = ["pedro" , "ana", "Joao", 10,true,3.00];

// o indice de um array sempre eu digo sempre começa no 0
// no nosso caso temos um array com 3 elementos ou seja 
// temos indices 0 1 e 2 esses sao os indices do array
// o que tem dentro dos indices sao os tipos de dados que colocamos
// dentro do array, ou seja string number boolean double etc


// precisamos separar o que sao indices e o que sao elementos 
// dentro dos indices. No nosso caso esse array possui 3 elementos
// que sao "pedro" , "ana", "Joao"
// pedro esta no indice 0
// ana esta no indice 1
// e joao esta no indice 2
// como eu acesso esses elementos? atraves dos indices

// let elementoZero = array[0];
//console.log(elementoZero) // imprimira "pedro"

// quando eu faço array[0] eu estou acessando o indice 0
// que contem o elemento "pedro" e estou guardando esse elemento na 
// variavel elementoZero e exibindo na tela 



let produto1 = { nome: "Shampo", valor: 6.00 };
let produto2 = { nome: "Chocolate", valor: 10.00 };
let produto3 = { nome: "Pilha", valor: 12.00 };

let listaDeProdutos = [produto1, produto2, produto3];


console.log("teste")




function retornaSomaProdutos(listaDeProdutos) {
    let soma = 0;
    for (let i = 0; i < listaDeProdutos.length; i++) {

        soma += listaDeProdutos[i].valor;
    }
    return soma;
}

function imprimeDaDosDoProduto(listaDeProdutos) {
    let soma = retornaSomaProdutos(listaDeProdutos);
     
     console.log("_________ Lista de Produtos __________")
    for (let i = 0; i < listaDeProdutos.length; i++) {

       console.log(listaDeProdutos[i].nome)
    }
    console.log("A soma total dos produtos é R$ " + soma.toFixed(2));
}


console.log(imprimeDaDosDoProduto(listaDeProdutos));