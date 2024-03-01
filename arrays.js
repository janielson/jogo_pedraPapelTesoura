const estudantes = [
    { nome: "Ana", nota: 7.5 },
    { nome: "Beto", nota: 5.0 },
    { nome: "Carlos", nota: 9.0 },
    { nome: "Diana", nota: 6.0 }
];

let notaMaiorQueSete = estudantes.filter((alunos) => {
return alunos.nota >= 7 
})

 let notaAlunoAprovado = notaMaiorQueSete.map((objeto) => {

    return objeto.nota;
     
 } );


let media = notaMaiorQueSete.reduce((acc, element, index) => {
    
});


